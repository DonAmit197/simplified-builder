import Webform from 'bcformiojs/Webform';
import Components from 'bcformiojs/components/Components';
import {fastCloneDeep} from 'bcformiojs/utils/utils';
import BuilderUtils from 'bcformiojs/utils/builder';
import _ from 'lodash';

function formioWebFormBuilder() {
  import('bcformiojs/WebformBuilder').then((module) => {
    const WebformBuilder = module;
    //console.log(WebformBuilder)
    WebformBuilder.default.prototype.attachComponent = function (element, component) {
      /**
       * Set tabIndex to the element to add keyboard event Tab
       */
      element.setAttribute('tabindex', '0');

      const actionBtns = document.createElement('div');

      actionBtns.classList.add('widget-action-btn');

      /**
       * Open the Keyboard Buttons on CTRL key press
       */
      //console.log([element])
      //element.focus();
      element.addEventListener('keydown', (e) => {
        // When the Key = CRTL key
        if (e.keyCode === 17) {
          const keyBoardWidget = element.querySelector('.widget-action-btn');
          if (keyBoardWidget) {
            keyBoardWidget.style.display = 'block';
            var moveDwnBtnElem = keyBoardWidget.querySelector('.btn-move:first-child');
            moveDwnBtnElem.focus();
          }
        }
      });

      // Move Down Button
      const btnElem = document.createElement('a');
      btnElem.classList.add('moveDn');
      btnElem.classList.add('btn-move');
      btnElem.textContent = 'Move Down';
      btnElem.setAttribute('tabindex', '0');

      // Move Up Button
      const upMoveBtn = document.createElement('a');
      upMoveBtn.classList.add('move-up');
      upMoveBtn.setAttribute('tabindex', '0');
      upMoveBtn.classList.add('btn-move');
      upMoveBtn.textContent = 'Move Up';
      // Edit button
      const editButton = document.createElement('a');
      editButton.classList.add('edit-button');
      editButton.classList.add('btn-move');
      editButton.setAttribute('tabindex', '0');
      editButton.textContent = 'Edit';
      // Remove Button
      const removeBtn = document.createElement('a');
      removeBtn.classList.add('btn-move', 'remove-component');
      removeBtn.setAttribute('tabindex', '0');
      removeBtn.textContent = 'Remove';

      // /**
      //  * Append Move buttons
      //  */
      actionBtns.appendChild(btnElem);
      actionBtns.appendChild(upMoveBtn);
      actionBtns.appendChild(editButton);
      actionBtns.appendChild(removeBtn);
      if (actionBtns) {
        const keyBoardEventsBtns = actionBtns.querySelectorAll('.btn-move');
        Array.from(keyBoardEventsBtns).map((keyboardEventBtn) => {
          //console.log(keyboardEventBtn);
          const iconElem = document.createElement('i');

          iconElem.classList.add('icon', 'fa');
          if (keyboardEventBtn.classList.contains('moveDn')) {
            iconElem.classList.add('fa-arrow-down');
          }

          if (keyboardEventBtn.classList.contains('move-up')) {
            iconElem.classList.add('fa-arrow-up');
          }

          if (keyboardEventBtn.classList.contains('edit-button')) {
            iconElem.classList.add('fa-cog');
          }

          if (keyboardEventBtn.classList.contains('remove-component')) {
            iconElem.classList.add('fa-remove');
          }

          keyboardEventBtn.insertBefore(iconElem, keyboardEventBtn.firstChild);
        });
      }

      /**
       * Attach Action buttons to element Move down button
       */
      element.appendChild(actionBtns);
      /**
       * Move down button event
       */
      component.addEventListener(btnElem, 'keydown', (e) => {
        if (e.keyCode === 13) {
          e.stopPropagation();
          e.preventDefault();
          this.selectedComponent = component;
          //console.log('Grand Parent', [grandParent]);
          this.updateComponentPlacement(false);
          this.emit('change', this.form);
        }
      });
      /**
       * Attach event on Move up
       */
      upMoveBtn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.stopPropagation();
          event.preventDefault();
          this.selectedComponent = component;

          //console.log('Event on Move Up', event);

          this.updateComponentPlacement(true);
          this.emit('change', this.form);
        }
      });
      /**
       * Attach Event to Edit Button
       */
      if (editButton) {
        editButton.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            event.stopPropagation();
            event.preventDefault();
            this.selectedComponent = component;
            this.editComponent(component.schema, parent, false, false, component.component, {
              inDataGrid: component.isInDataGrid,
            });
          }
        });
      }
      /** Attach event to Remove Button */
      if (removeBtn) {
        removeBtn.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            event.stopPropagation();
            event.preventDefault();
            this.removeComponent(component.schema, parent, component.component);
          }
        });
      }

      element.formioComponent = component;

      component.loadRefs(element, {
        removeComponent: 'single',
        editComponent: 'single',
        moveComponent: 'single',
        copyComponent: 'single',
        pasteComponent: 'single',
        editJson: 'single',
      });
      if (component.component.showSidebar === false) {
        component.refs.copyComponent = '';
        component.refs.removeComponent = '';
        //component.refs.editComponent = '';
        component.refs.addButton = '';
        component.refs.editJson = '';
        component.refs.moveComponent = '';

        //console.log('Element get', [element]);
        // Removing the remove button from the childnodes
        // of essential-items
        const allChildNodes = element.querySelectorAll('*');
        //console.log([...allChildNodes])
        allChildNodes.forEach((node) => {
          if (node.classList.contains('component-settings-button-remove')) {
            node.style.display = 'none';
          }
        });

        const componentHoverElem = element.querySelector('[data-noattach="true"]');
        element.classList.add('no-drag');
        element.style.cursor = 'auto';
        element.classList.add('essential-item');
        element.querySelector('.widget-action-btn').remove();
        if (componentHoverElem) {
          //componentHoverElem.remove();
          const removeComElem = componentHoverElem.querySelector('[ref="removeComponent"]');
          const copyComponentElem = componentHoverElem.querySelector('[ref="copyComponent"]');
          const moveComponentElem = componentHoverElem.querySelector('[ref="moveComponent"]');
          const editComponentJSONElem = componentHoverElem.querySelector('[ref="editJson"]');
          removeComElem.remove();
          copyComponentElem.remove();
          editComponentJSONElem.remove();
          moveComponentElem.remove();
        }
      }

      if (component.refs.copyComponent) {
        this.attachTooltip(component.refs.copyComponent, this.t('Copy'));

        component.addEventListener(component.refs.copyComponent, 'click', () => this.copyComponent(component));
      }

      if (component.refs.pasteComponent) {
        const pasteToolTip = this.attachTooltip(component.refs.pasteComponent, this.t('Paste below'));

        component.addEventListener(component.refs.pasteComponent, 'click', () => {
          pasteToolTip.hide();
          this.pasteComponent(component);
        });
      }

      if (component.refs.moveComponent) {
        this.attachTooltip(component.refs.moveComponent, this.t('Move'));
        if (this.keyboardActionsEnabled) {
          component.addEventListener(component.refs.moveComponent, 'click', () => {
            this.moveComponent(component);
          });
        }
      }

      const parent = this.getParentElement(element);

      if (component.refs.editComponent) {
        this.attachTooltip(component.refs.editComponent, this.t('Edit'));

        component.addEventListener(component.refs.editComponent, 'click', () =>
          this.editComponent(component.schema, parent, false, false, component.component, {
            inDataGrid: component.isInDataGrid,
          })
        );
      }

      if (component.refs.editJson) {
        this.attachTooltip(component.refs.editJson, this.t('Edit JSON'));

        component.addEventListener(component.refs.editJson, 'click', () =>
          this.editComponent(component.schema, parent, false, true, component.component)
        );
      }

      if (component.refs.removeComponent) {
        this.attachTooltip(component.refs.removeComponent, this.t('Remove'));

        component.addEventListener(component.refs.removeComponent, 'click', () =>
          this.removeComponent(component.schema, parent, component.component)
        );
      }

      return element;
    };

    WebformBuilder.default.prototype.editComponent = function (
      component,
      parent,
      isNew,
      isJsonEdit,
      original,
      flags = {}
    ) {
      //console.log([component], [parent], original, flags);
      if (!component.key) {
        return;
      }
      //console.log(this)
      this.saved = false;
      const componentCopy = fastCloneDeep(component);
      let ComponentClass = Components.components[componentCopy.type];
      const isCustom = ComponentClass === undefined;
      isJsonEdit = isJsonEdit || isCustom;
      ComponentClass = isCustom ? Components.components.unknown : ComponentClass;
      // Make sure we only have one dialog open at a time.
      if (this.dialog) {
        this.dialog.close();
        this.highlightInvalidComponents();
      }

      // This is the render step.
      const editFormOptions = _.clone(_.get(this, 'options.editForm', {}));
      if (this.editForm) {
        this.editForm.destroy();
      }

      // Allow editForm overrides per component.
      const overrides = _.get(this.options, `editForm.${componentCopy.type}`, {});

      // Pass along the form being edited.
      editFormOptions.editForm = this.form;
      editFormOptions.editComponent = component;
      editFormOptions.flags = flags;

      this.hook('editComponentParentInstance', editFormOptions, parent);

      this.editForm = new Webform({
        ..._.omit(this.options, ['hooks', 'builder', 'events', 'attachMode', 'skipInit']),
        language: this.options.language,
        ...editFormOptions,
      });

      this.hook('editFormProperties', parent);

      this.editForm.form =
        isJsonEdit && !isCustom
          ? {
              components: [
                {
                  type: 'textarea',
                  as: 'json',
                  editor: 'ace',
                  weight: 10,
                  input: true,
                  key: 'componentJson',
                  label: 'Component JSON',
                  tooltip: 'Edit the JSON for this component.',
                },
                {
                  type: 'checkbox',
                  key: 'showFullSchema',
                  label: 'Full Schema',
                },
              ],
            }
          : ComponentClass.editForm(_.cloneDeep(overrides));
      const instanceOptions = {
        inFormBuilder: true,
      };

      this.hook('instanceOptionsPreview', instanceOptions);

      const instance = new ComponentClass(componentCopy, instanceOptions);
      const schema = this.hook('builderComponentSchema', component, instance);

      this.editForm.submission = isJsonEdit
        ? {
            data: {
              componentJson: schema,
              showFullSchema: this.options.showFullJsonSchema,
            },
          }
        : {
            data: instance.component,
          };

      if (this.preview) {
        this.preview.destroy();
      }
      if (
        // eslint-disable-next-line no-prototype-builtins
        !ComponentClass.builderInfo.hasOwnProperty('preview') ||
        ComponentClass.builderInfo.preview
      ) {
        this.preview = new Webform(
          _.omit({...this.options, preview: true}, ['hooks', 'builder', 'events', 'attachMode', 'calculateValue'])
        );

        this.hook('previewFormSettitngs', schema, isJsonEdit);
      }

      this.showPreview = ComponentClass.builderInfo.showPreview ?? true;

      this.componentEdit = this.ce('div', {class: 'component-edit-container'});
      this.setContent(
        this.componentEdit,
        this.renderTemplate('builderEditForm', {
          componentInfo: ComponentClass.builderInfo,
          editForm: this.editForm.render(),
          preview: this.preview ? this.preview.render() : false,
          showPreview: this.showPreview,
          helplinks: this.helplinks,
        })
      );
      //console.log(this.componentEdit);
      if (parent.formioComponent) {
        const formioComponentOfParent = parent.formioComponent;
        //console.log('original', original)
        if (formioComponentOfParent.element.classList.contains('essential-item') || original?.showSidebar == false) {
          //console.log(parent.formioComponent);

          //console.log(this.componentEdit);
          const dialogEdit = this.componentEdit;
          const removeBtn = dialogEdit.querySelector('[ref="removeButton"]');
          removeBtn.style.display = 'none';
        }
      }

      this.dialog = this.createModal(this.componentEdit, _.get(this.options, 'dialogAttr', {}));

      // This is the attach step.
      this.editForm.attach(this.componentEdit.querySelector('[ref="editForm"]'));

      this.hook('editFormWrapper');

      this.updateComponent(componentCopy);

      this.editForm.on('change', (event) => {
        if (event.changed) {
          if (event.changed.component && event.changed.component.key === 'showFullSchema') {
            const {value} = event.changed;
            this.editForm.submission = {
              data: {
                componentJson: value ? instance.component : component,
                showFullSchema: value,
              },
            };
            return;
          }
          // See if this is a manually modified key. Treat custom component keys as manually modified
          if ((event.changed.component && event.changed.component.key === 'key') || isJsonEdit) {
            componentCopy.keyModified = true;
          }

          let isComponentLabelChanged = false;
          if (event.changed.instance) {
            isComponentLabelChanged = ['label', 'title'].includes(event.changed.instance.path);
          } else if (event.changed.component) {
            isComponentLabelChanged = ['label', 'title'].includes(event.changed.component.key);
          }

          if (isComponentLabelChanged) {
            // Ensure this component has a key.
            if (isNew) {
              if (!event.data.keyModified) {
                this.editForm.everyComponent((component) => {
                  if (component.key === 'key' && component.parent.component.key === 'tabs') {
                    component.setValue(this.updateComponentKey(event.data));
                    return false;
                  }
                });
              }

              if (this.form) {
                let formComponents = this.findNamespaceRoot(parent.formioComponent);
                // excluding component which key uniqueness is to be checked to prevent the comparing of the same keys
                formComponents = formComponents.filter((comp) => editFormOptions.editComponent.id !== comp.id);

                // Set a unique key for this component.
                BuilderUtils.uniquify(formComponents, event.data);
              }
            }
          }

          // Update the component.
          this.updateComponent(event.data.componentJson || event.data, event.changed);
        }
      });

      this.attachEditComponentControls(component, parent, isNew, original, ComponentClass);

      const dialogClose = () => {
        this.editForm.destroy(true);
        if (this.preview) {
          this.preview.destroy(true);
          this.preview = null;
        }
        if (isNew && !this.saved) {
          this.removeComponent(component, parent, original);
          this.highlightInvalidComponents();
        }
        // Clean up.
        this.removeEventListener(this.dialog, 'close', dialogClose);
        this.dialog = null;
      };
      this.addEventListener(this.dialog, 'close', dialogClose);

      // Called when we edit a component.
      this.emit('editComponent', component);
    };
  });
}

export default formioWebFormBuilder;
