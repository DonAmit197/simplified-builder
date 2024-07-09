export default {
  showSidebar: false,
  label: 'Name of section goes here',
  customClass: 'expressform-section',
  key: 'nameOfSectionGoesHere2',
  type: 'well',
  input: false,
  tableView: false,
  components: [
    {
      html: '<h3>Applicant details</h3>',
      label: 'Content',
      customClass: 'expressform-section_header',
      refreshOnChange: false,
      key: 'content13',
      type: 'content',
      input: false,
      tableView: false,
    },
    {
      label: 'Do you have an NZBN?',
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
      },
      key: 'doYouHaveAnNzbn',
      type: 'radio',
      input: true,
    },
    {
      label: 'Enter your New Zealand Business Number or business name',
      widget: 'choicesjs',
      placeholder: 'Search for business',
      tableView: true,
      dataSrc: 'url',
      data: {
        url: 'data_nzbnentityurl',
        headers: [
          {
            key: 'Authorization',
            value: 'data_nzbnapikey',
          },
          {
            key: 'Ocp-Apim-Subscription-Key',
            value: 'data_nzbnbasesubscriptionkey',
          },
        ],
      },
      dataType: 'object',
      valueProperty: 'nzbn',
      template: '<span>{{ item.entityName }} {{ item.nzbn }}</span>',
      clearOnHide: false,
      validate: {
        required: true,
        select: false,
      },
      key: 'data_entity_nzbn',
      conditional: {
        show: true,
        conjunction: 'all',
        conditions: [
          {
            component: 'doYouHaveAnNzbn',
            operator: 'isEqual',
            value: 'yes',
          },
        ],
      },
      type: 'select',
      selectValues: 'items',
      disableLimit: false,
      searchField: 'search-term',
      minSearch: 3,
      filter: 'entity-status=Registered',
      limit: 10,
      noRefreshOnScroll: false,
      input: true,
    },
    {
      label: 'Is this application for',
      widget: 'choicesjs',
      placeholder: 'Select business type',
      tableView: true,
      data: {
        values: [
          {
            label: 'Sole trader',
            value: 'Sole trader',
          },
          {
            label: 'Partnership',
            value: 'Partnership',
          },
          {
            label: 'Individual',
            value: 'Individual',
          },
          {
            label: 'Trust',
            value: 'Trust',
          },
          {
            label: 'Incorporated Society',
            value: 'Incorporated Society',
          },
          {
            label: 'Charitable Trust',
            value: 'Charitable Trust',
          },
          {
            label: 'Limited Partnership (NZ)',
            value: 'Limited Partnership (NZ)',
          },
          {
            label: 'Limited Partnership (Overseas)',
            value: 'Limited Partnership (Overseas)',
          },
          {
            label: 'NZ Limited Company',
            value: 'NZ Limited Company',
          },
          {
            label: 'NZ Unlimited Company',
            value: 'NZ Unlimited Company',
          },
          {
            label: 'NZ Co-operative Company',
            value: 'NZ Co-operative Company',
          },
        ],
      },
      validate: {
        required: true,
      },
      key: 'isThisApplicationFor1',
      conditional: {
        show: true,
        conjunction: 'any',
        conditions: [
          {
            component: 'doYouHaveAnNzbn',
            operator: 'isEqual',
            value: 'no',
          },
        ],
      },
      type: 'select',
      input: true,
    },
    {
      label: 'Business legal name',
      placeholder: 'Enter full legal name',
      applyMaskOn: 'change',
      tableView: true,
      validate: {
        required: true,
        pattern: '^[a-zA-Z0-9ĀāĒēĪīŌōŪūȲȳ !@&*-.,$()]+$',
      },
      key: 'data_entity_legalName',
      conditional: {
        show: true,
        conjunction: 'all',
        conditions: [
          {
            component: 'doYouHaveAnNzbn',
            operator: 'isEqual',
            value: 'no',
          },
          {
            component: 'isThisApplicationFor1',
            operator: 'isNotEqual',
            value: 'Individual',
          },
          {
            component: 'isThisApplicationFor1',
            operator: 'isNotEqual',
            value: 'Sole trader',
          },
        ],
      },
      type: 'textfield',
      input: true,
    },
    {
      label: 'First name',
      placeholder: 'Enter first name',
      applyMaskOn: 'change',
      tableView: true,
      validate: {
        required: true,
        pattern: '^[a-zA-Z0-9ĀāĒēĪīŌōŪūȲȳ !@&*-.,$()]+$',
      },
      key: 'data_contactPerson_firstName',
      conditional: {
        show: true,
        conjunction: 'any',
        conditions: [
          {
            component: 'doYouHaveAnNzbn',
            operator: 'isNotEmpty',
          },
        ],
      },
      type: 'textfield',
      input: true,
    },
    {
      label: 'Last name',
      placeholder: 'Enter last name',
      applyMaskOn: 'change',
      tableView: true,
      validate: {
        required: true,
        pattern: '^[a-zA-Z0-9ĀāĒēĪīŌōŪūȲȳ !@&*-.,$()]+$',
      },
      key: 'data_contactPerson_lastName',
      conditional: {
        show: true,
        conjunction: 'any',
        conditions: [
          {
            component: 'doYouHaveAnNzbn',
            operator: 'isNotEmpty',
          },
        ],
      },
      type: 'textfield',
      input: true,
    },
    {
      label: 'Email address',
      placeholder: 'Enter email address',
      applyMaskOn: 'change',
      tableView: true,
      validate: {
        required: true,
      },
      key: 'data_contactPerson_email',
      conditional: {
        show: true,
        conjunction: 'any',
        conditions: [
          {
            component: 'doYouHaveAnNzbn',
            operator: 'isNotEmpty',
          },
        ],
      },
      type: 'email',
      input: true,
    },
  ],
};
