import _ from 'lodash';
export default [
  {
    key: 'display',
    label: 'Display',
    weight: 0,
    components: [
      {
        key: 'label',
        autofocus: true,
        input: true,
        label: 'Field Label',
        placeholder: 'Field Label',
        tooltip: 'The label for this field that will appear next to it.',
        type: 'textfield',
        validate: {
          required: true,
        },
        weight: 0,
      },
      {
        key: 'key',
        input: true,
        label: 'Property Key',
        tooltip: 'The name of this field in the API endpoint',
        type: 'textfield',
        validate: {
          pattern: '(\\w|\\w[\\w-.]*\\w)',
          patternMessage:
            'The property name must only contain alphanumeric characters, underscores, dots and dashes and should not be ended by dash or dot.',
          required: true,
        },
        weight: 20,
      },

      {
        data: {
          values: [
            {label: 'H1', value: 'h1'},
            {label: 'H2', value: 'h2'},
            {label: 'H3', value: 'h3'},
            {label: 'H4', value: 'h4'},
            {label: 'H5', value: 'h5'},
          ],
        },
        dataSrc: 'values',
        //defaultValue: 'H1',
        input: true,
        key: 'widget.type',
        label: 'Select your Page heading type',
        type: 'select',
        weight: 35,
        tooltip: 'Select which type of heading element you want.',
        onChange: (context) => {
          context.data.widget = _.pick(context.data.widget, 'type');
          context.data.tag = context.data.widget.type;
        },
      },
      {
        type: 'textfield',
        input: true,
        key: 'className',
        weight: 40,
        label: 'CSS Class',
        placeholder: 'CSS Class',
        tooltip: 'The CSS class for this HTML element.',
      },
      {
        type: 'datagrid',
        input: true,
        label: 'Attributes',
        key: 'attrs',
        tooltip:
          'The attributes for this HTML element. Only safe attributes are allowed, such as src, href, and title.',
        weight: 70,
        components: [
          {
            label: 'Attribute',
            key: 'attr',
            input: true,
            type: 'textfield',
          },
          {
            label: 'Value',
            key: 'value',
            input: true,
            type: 'textfield',
          },
        ],
      },
      {
        type: 'textarea',
        input: true,
        editor: 'ace',
        rows: 10,
        as: 'html',
        label: 'Content',
        tooltip: 'The content of this HTML element.',
        defaultValue: '<div class="well">Content</div>',
        key: 'content',
        weight: 80,
      },
      {
        type: 'textfield',
        input: true,
        key: 'customClass',
        weight: 40,
        label: 'Custom CSS Class',
        placeholder: 'Custom CSS Class',
        tooltip: 'The CSS class for this HTML element.',
      },
      {
        weight: 85,
        type: 'checkbox',
        label: 'Refresh On Change',
        tooltip: 'Rerender the field whenever a value on the form changes.',
        key: 'refreshOnChange',
        input: true,
      },
    ],
  },
];
