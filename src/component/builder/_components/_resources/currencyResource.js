export default {
    title: 'Currency',
    key: 'nzCurrency',
    icon: 'usd',
    schema: {
        label: "Currency",
        placeholder: "Enter amount",
        applyMaskOn: "change",
        mask: false,
        spellcheck: true,
        tableView: false,
        currency: "NZD",
        inputFormat: "plain",
        truncateMultipleSpaces: false,
        validate: {
            required: true
        },

        key: 'nzCurrency',
        type: 'currency',
        input: true,
        delimiter: true
    },
    weight: 30,
}