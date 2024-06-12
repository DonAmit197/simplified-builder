export default {
    title: 'Bank Account Number',
    key: 'bankAccountNumber',
    icon: 'university',
    schema: {
        label: 'Bank account number',
        displayMask: '99-9999-9999999-999',
        applyMaskOn: 'change',
        tableView: true,
        validate: {
            required: true,
        },
        key: 'bankAccountNumber',
        type: 'textfield',
        input: true,
        lockKey: true,

        isNew: true,
    },
    weight: 25,
}