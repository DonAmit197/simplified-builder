import pageHeader from './_components/pageHeader/pageHeader';
import imageViewComponent from './_components/image/imageViewComponent';
import builderDragComponents from './builderDragComponentSettings';

import('bcformiojs').then((module) => {
  pageHeader(module);
  imageViewComponent(module);
});
// Define the type for builder options
interface BuilderOptions {
  builder: {
    basic: boolean;
    advanced: boolean;
    data: boolean;
    layout: boolean;
    premium: boolean;
    custom: any;
    layouts: any;
    apiSearch: any;
    additional: any;
  };
  editForm: {
    [key: string]: any[];
  };
}

const builderOptions: BuilderOptions = {
  builder: {
    basic: false,
    advanced: false,
    data: false,
    layout: false,
    premium: false,
    custom: builderDragComponents.custom,
    layouts: builderDragComponents.layouts,
    apiSearch: builderDragComponents.apiSearch,
    additional: builderDragComponents.additional,
  },
  editForm: {
    textarea: [],
  },
};

type BuilderSettingsFn = (
  builder: HTMLElement,
  _formiojs: any,
  components: any[],
  display: string,
  defaultComp: any[],
  subJSON: HTMLElement,
  jsonElement: HTMLElement,
  formElement: HTMLElement,
  schema: any[],
  onSchemaChange: (schema: any[]) => void
) => void;

const builderSettings: BuilderSettingsFn = (
  builder,
  _formiojs,
  _components,
  display,
  defaultComp,
  subJSON,
  jsonElement,
  formElement,
  _schema,
  onSchemaChange
) => {
  let _builder: any = null;

  const setDisplay = (display: string) => {
    if (_builder) {
      _builder.destroy();
      document.getElementById('builder')!.innerHTML = '';
    }

    const builderElem = builder;
    _formiojs
      .builder(
        builderElem,
        {
          display: display,
          components: defaultComp,
        },
        builderOptions
      )
      .then((instance: any) => {
        _builder = instance;

        const onForm = () => {
          instance.on('change', () => {
            subJSON.innerHTML = '';
            subJSON.appendChild(document.createTextNode(JSON.stringify(instance.form, null, 4)));
          });
          onSchemaChange(instance.schema);
        };

        const onBuild = () => {
          jsonElement.innerHTML = '';
          formElement.innerHTML = '';
          jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.form, null, 4)));
          _formiojs.createForm(formElement, instance.form).then(onForm);
        };

        const onReady = () => {
          _formiojs.createForm(formElement, instance.schema);
          instance.on('change', onBuild);
        };

        instance.ready.then(onReady);
      });
  };

  setDisplay(display);
};

export default builderSettings;
