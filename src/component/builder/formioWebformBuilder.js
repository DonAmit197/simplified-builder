import buttonMovement from './buttonEvents';

function formioWebFormBuilder() {
    import('bcformiojs/WebformBuilder').then((module) => {
        const WebformBuilder = module;

        WebformBuilder.default.prototype.attachComponent = function (
            element,
            component
        ) {
            /**
             * Set tabIndex to the element to add keyboard event Tab
             */
            element.setAttribute('tabindex', '0');

            const actionBtns = document.createElement('div');

            actionBtns.classList.add('widget-action-btn');

            /**
             * Open the Keyboard Buttons on CTRL key press
             */
            element.addEventListener('keydown', (e) => {
                // When the Key = CRTL key
                if (e.keyCode === 17) {
                    const keyBoardWidget = element.querySelector('.widget-action-btn');

                    keyBoardWidget.style.display = 'block';
                    var moveDwnBtnElem = keyBoardWidget.querySelector(
                        '.btn-move:first-child'
                    );
                    moveDwnBtnElem.focus();
                }
            });

            const btnElem = document.createElement('a');
            btnElem.setAttribute('class', 'moveDn');
            btnElem.setAttribute('class', 'btn-move');
            btnElem.textContent = 'Move Down';
            btnElem.setAttribute('tabindex', '0');
            const upMoveBtn = document.createElement('a');
            upMoveBtn.classList.add('move-up');
            upMoveBtn.setAttribute('tabindex', '0');
            upMoveBtn.setAttribute('class', 'btn-move');

            upMoveBtn.textContent = 'Move Up';
            // /**
            //  * Append Move down button
            //  */
            actionBtns.appendChild(btnElem);
            // /**
            //  * Append Move up button
            //  */
            actionBtns.appendChild(upMoveBtn);
            /**
             * Attach Action buttons to element Move down button
             */
            element.appendChild(actionBtns);
            const BuilderComponent = this;

            buttonMovement('up', actionBtns, component, BuilderComponent);
            buttonMovement('down', actionBtns, component, BuilderComponent);

            component.addEventListener(btnElem, 'keydown', (e) => {
                if (e.keyCode === 13) {
                    e.stopPropagation();
                    e.preventDefault();
                    this.selectedComponent = component;
                    //console.log('Grand Parent', [grandParent]);
                    this.updateComponentPlacement(false);
                    this.emit('change', this.form);

                    //grandParent.formioComponent.rebuild();
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

                const componentHoverElem = element.querySelector(
                    '[data-noattach="true"]'
                );
                element.classList.add('no-drag');
                element.style.cursor = 'auto';
                element.classList.add('essential-item');
                element.querySelector('.widget-action-btn').remove();
                if (componentHoverElem) {
                    //componentHoverElem.remove();
                    const removeComElem = componentHoverElem.querySelector(
                        '[ref="removeComponent"]'
                    );
                    const copyComponentElem = componentHoverElem.querySelector(
                        '[ref="copyComponent"]'
                    );
                    const moveComponentElem = componentHoverElem.querySelector(
                        '[ref="moveComponent"]'
                    );
                    const editComponentJSONElem =
                        componentHoverElem.querySelector('[ref="editJson"]');
                    removeComElem.remove();
                    copyComponentElem.remove();
                    editComponentJSONElem.remove();
                    moveComponentElem.remove();
                }
            }

            if (component.refs.copyComponent) {
                this.attachTooltip(component.refs.copyComponent, this.t('Copy'));

                component.addEventListener(component.refs.copyComponent, 'click', () =>
                    this.copyComponent(component)
                );
            }

            if (component.refs.pasteComponent) {
                const pasteToolTip = this.attachTooltip(
                    component.refs.pasteComponent,
                    this.t('Paste below')
                );

                component.addEventListener(
                    component.refs.pasteComponent,
                    'click',
                    () => {
                        pasteToolTip.hide();
                        this.pasteComponent(component);
                    }
                );
            }

            if (component.refs.moveComponent) {
                this.attachTooltip(component.refs.moveComponent, this.t('Move'));
                if (this.keyboardActionsEnabled) {
                    component.addEventListener(
                        component.refs.moveComponent,
                        'click',
                        () => {
                            this.moveComponent(component);
                        }
                    );
                }
            }

            const parent = this.getParentElement(element);

            if (component.refs.editComponent) {
                this.attachTooltip(component.refs.editComponent, this.t('Edit'));

                component.addEventListener(component.refs.editComponent, 'click', () =>
                    this.editComponent(
                        component.schema,
                        parent,
                        false,
                        false,
                        component.component,
                        { inDataGrid: component.isInDataGrid }
                    )
                );
            }

            if (component.refs.editJson) {
                this.attachTooltip(component.refs.editJson, this.t('Edit JSON'));

                component.addEventListener(component.refs.editJson, 'click', () =>
                    this.editComponent(
                        component.schema,
                        parent,
                        false,
                        true,
                        component.component
                    )
                );
            }

            if (component.refs.removeComponent) {
                this.attachTooltip(component.refs.removeComponent, this.t('Remove'));

                component.addEventListener(
                    component.refs.removeComponent,
                    'click',
                    () =>
                        this.removeComponent(component.schema, parent, component.component)
                );
            }

            return element;
        };
    });
}

export default formioWebFormBuilder;
