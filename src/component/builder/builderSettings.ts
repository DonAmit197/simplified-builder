import pageHeader from './_components/pageHeader/pageHeader';
import imageViewComponent from './_components/image/imageViewComponent';
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
    custom: {
      title: string;
      weight: number;
      components: {
        [key: string]: any;
      };
    };
    layouts: {
      title: string;
      weight: number;
      components: {
        [key: string]: boolean;
      };
    };
    customBasic: {
      title: string;
      weight: number;
      components: {
        [key: string]: boolean;
      };
    };
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
    custom: {
      title: 'Fields',
      weight: 0,
      components: {
        shortAnswer: {
          title: 'Short Answer',
          key: 'shortAnswer',
          icon: 'terminal',
          schema: {
            label: 'Short Answer',
            type: 'textfield',
            key: 'shortAnswer',
            input: true,
          },
        },
        longAnswer: {
          title: 'Long Answer',
          key: 'longAnswer',
          icon: 'terminal',
          schema: {
            label: 'Long Answer',
            type: 'textarea',
            key: 'longAnswer',
            inputFormat: 'plain',
            input: true,
            wysiwyg: false,
          },
        },

        number: true,

        checkbox: true,
        selectboxes: true,
        select: true,
        radio: true,
        button: true,
        email: true,
        url: true,
        phoneNumber: true,
        address: true,
        datetime: true,
        day: true,
        time: true,
        currency: true,
        datagrid: true,
        file: true,
        header: true,
        imageComponent: true,
      },
    },
    layouts: {
      title: 'Layout',
      weight: 2,
      components: {
        panel: true,
        columns: true,
        content: true,
        htmlelement: true,
        starrating: true,
      },
    },
    customBasic: {
      title: 'Custom Components',
      weight: 3,

      components: {
        starrating: true,
      },
    },
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
  components,
  display,
  defaultComp,
  subJSON,
  jsonElement,
  formElement,
  schema,
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

        const onForm = (form: any) => {
          instance.on('change', () => {
            subJSON.innerHTML = '';
            subJSON.appendChild(
              document.createTextNode(JSON.stringify(instance.form, null, 4))
            );
          });
          onSchemaChange(instance.schema);
        };

        const onBuild = () => {
          jsonElement.innerHTML = '';
          formElement.innerHTML = '';
          jsonElement.appendChild(
            document.createTextNode(JSON.stringify(instance.form, null, 4))
          );
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
