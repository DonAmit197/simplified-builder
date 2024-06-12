export default {
    title: 'Declaration',
    key: 'declaration',
    icon: 'list-alt',
    schema: {
        label: "I declare the information provided is true and correct and I understand and accept the terms and conditions of this application",
        optionsLabelPosition: "right",
        customClass: "pdf-checkbox-show",
        hideLabel: true,
        tableView: false,
        defaultValue: {
            "iDeclareTheInformationProvidedIsTrueAndCorrectAndIUnderstandTheTermsAndConditionsOfThisApplication": false
        },
        values: [
            {
                "label": "I declare the information provided is true and correct and I understand  and accept the terms and conditions of this application",
                "value": "iDeclareTheInformationProvidedIsTrueAndCorrectAndIUnderstandTheTermsAndConditionsOfThisApplication",
                "shortcut": ""
            }
        ],
        validate: {
            "required": true
        },
        key: "declaration",
        type: "selectboxes",
        input: true,
        inputType: "checkbox"
    },
    weight: 5,
}