import _ from "lodash";

const builderOptions = {
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
                //textarea: true,
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
            },
        },
    },
    editForm: {
        textarea: [
            {
                // key: 'api',
                // ignore: true,
            },
        ],
    },
    //noDefaultSubmitButton: true,
};

const builderSettings = (
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



    let _builder = null;
    const setDisplay = (display) => {
        if (_builder) {
            console.log(_builder)
            _builder.destroy();
            document.getElementById('builder').innerHTML = '';
        }

        const builderElem = builder;
        _formiojs.builder(
            builderElem,

            {
                display: display,

                components: defaultComp,

            },
            builderOptions,

        ).then((instance) => {

            builder = instance;
            // eslint-disable-next-line no-unused-vars
            function onForm(form) {
                instance.on('change', function () {
                    //console.log('change', instance.form);
                    subJSON.innerHTML = '';
                    subJSON.appendChild(
                        document.createTextNode(JSON.stringify(instance.form, null, 4))
                    );
                });

                onSchemaChange(instance.schema);
            }
            var onBuild = function () {
                jsonElement.innerHTML = '';
                formElement.innerHTML = '';
                console.log("Schema", instance.schema)
                jsonElement.appendChild(
                    document.createTextNode(JSON.stringify(instance.form, null, 4))
                );
                _formiojs.createForm(formElement, instance.form).then(onForm);
            };
            var onReady = function () {
                _formiojs.createForm(formElement, instance.schema);

                //console.log('instance change', instance)
                // jsonElement = document.getElementById('json');
                // formElement = document.getElementById('formio');
                instance.on('change', onBuild);
            };

            instance.ready.then(onReady);
        });
    }

    setDisplay(display);
};
export default builderSettings;
