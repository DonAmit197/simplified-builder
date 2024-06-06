//import _ from 'lodash';
export default [{
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

            input: true,
            key: 'html',
            label: 'Select your Page heading type',
            type: 'textarea',
            editor: 'ckeditor',
            hideLabel: true,

            as: 'html',
            rows: 3,
            weight: 35,
            tooltip: 'Select which type of heading element you want.',



        },
        {
            key: 'width',
            autofocus: true,
            input: true,
            label: 'Image width',
            placeholder: 'Set Image width',
            tooltip: 'Width will set the image width.',
            type: 'textfield',
            validate: {
                //required: true,
            },
            weight: 36,

        },
        {
            key: 'height',
            autofocus: true,
            input: true,
            label: 'Image height',
            placeholder: 'Set Image height',
            tooltip: 'Height will set the image height.',
            type: 'textfield',
            validate: {
                //required: true,
            },
            weight: 37,
        },
        {
            type: 'textfield',
            input: true,
            key: 'className',
            weight: 40,
            label: 'CSS Class',
            placeholder: 'CSS Class',
            tooltip: 'The CSS class for this HTML element.'
        },
        {
            type: 'textfield',
            input: true,
            key: 'customClass',
            weight: 42,
            label: 'Custom CSS Class',
            placeholder: 'Custom CSS Class',
            tooltip: 'The CSS class for this HTML element.'
        },
    ]
}]