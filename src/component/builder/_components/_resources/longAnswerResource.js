export default {
    title: 'Long Answer',
    key: 'longAnswer',
    icon: 'paragraph',
    schema: {
        label: 'Long Answer',
        placeholder: "Enter long answer",
        applyMaskOn: "change",
        autoExpand: false,
        showCharCount: true,
        tableView: true,
        validate: {
            required: true,
            pattern: "^[a-zA-Z0-9ĀāĒēĪīŌōŪūȲȳ !@&*()]+$)",
            minLength: 1,
            maxLength: 2500
        },
        type: 'textarea',
        key: 'longAnswer',
        inputFormat: 'plain',
        input: true,
        wysiwyg: false,
    },
}