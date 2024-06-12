export default {
    title: 'Show Stopper',
    key: 'showStopper',
    icon: 'list-alt',
    schema: {
        label: 'Show stopper - two questions (validation rule)',
        optionsLabelPosition: 'right',
        inline: false,
        tableView: false,
        values: [
            {
                label: 'Yes',
                value: 'yes',
                shortcut: '',
            },
            {
                label: 'No',
                value: 'no',
                shortcut: '',
            },
        ],
        validate: {
            required: true,
            custom: "valid = (input === 'yes') ? true : ' ';",
        },
        key: 'showStopper',
        type: 'radio',
        input: true,
        lockKey: true,

        isNew: true,
    },
}