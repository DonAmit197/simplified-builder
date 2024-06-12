export default {
    title: 'Short Answer',
    key: 'shortAnswer',
    icon: 'terminal',
    schema: {
        label: 'Short Answer',
        placeholder: "Enter short answer",
        applyMaskOn: "change",
        tableView: true,
        validate: {
            required: true,
            pattern: "^[a-zA-Z0-9ĀāĒēĪīŌōŪūȲȳ !@&*()]+$)"
        },
        type: 'textfield',
        key: 'shortAnswer',

        input: true,
    },
}