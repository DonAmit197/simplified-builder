export default {
  showSidebar: false,
  label: 'Name of section goes here',
  customClass: 'expressform-section',
  key: 'nameOfSectionGoesHere1',
  type: 'well',
  input: false,
  tableView: false,
  components: [
    {
      html: '<h3>Declaration</h3>',
      label: 'Content',
      customClass: 'expressform-section_header',
      refreshOnChange: false,
      key: 'content8',
      type: 'content',
      input: false,
      tableView: false,
    },
    {
      label:
        'I declare the information provided is true and correct and I understand and accept the terms and conditions of this application',
      optionsLabelPosition: 'right',
      hideLabel: true,
      tableView: false,
      defaultValue: {
        iDeclareTheInformationProvidedIsTrueAndCorrectAndIUnderstandTheTermsAndConditionsOfThisApplication: false,
      },
      values: [
        {
          label:
            'I declare the information provided is true and correct and I understand and accept the terms and conditions of this application',
          value: 'iDeclareTheInformationProvidedIsTrueAndCorrectAndIUnderstandTheTermsAndConditionsOfThisApplication',
          shortcut: '',
        },
      ],
      validate: {
        required: true,
      },
      key: 'iDeclareTheInformationProvidedIsTrueAndCorrectAndIUnderstandTheTermsAndConditionsOfThisApplication2',
      type: 'selectboxes',
      input: true,
      inputType: 'checkbox',
    },
  ],
};
