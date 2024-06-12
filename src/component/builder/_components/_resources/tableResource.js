export default {
    title: 'Table',
    key: 'dataGrid',
    icon: 'calendar',
    schema: {
        label: "Data Grid",
        reorder: false,
        addAnotherPosition: "bottom",
        layoutFixed: false,
        enableRowGroups: false,
        initEmpty: false,
        tableView: false,
        defaultValue: [
            {}
        ],
        validate: {
            minLength: "1"
        },
        key: "dataGrid",
        type: "datagrid",
        input: true,
        components: [
            {
                label: "datagrid",
                hideLabel: true,
                key: "datagrid",
                type: "well",
                input: false,
                tableView: false,
                components: [
                    {
                        label: "Example field",
                        applyMaskOn: "change",
                        tableView: true,
                        validate: {
                            required: true,
                            pattern: "^[a-zA-Z0-9ĀāĒēĪīŌōŪūȲȳ !@&*()]+$)"
                        },
                        key: "exampleField",
                        type: "textfield",
                        input: true
                    }
                ]
            }
        ]
    },
    weight: 20,
}