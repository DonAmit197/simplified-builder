export default {
  showSidebar: false,
  label: 'one-page-form-header',
  customClass: 'expressform-section_withCol one-page-header',
  key: 'onePageFormHeader',
  type: 'well',
  input: false,
  tableView: false,
  components: [
    {
      html: '<p>Add your logo here,recommended size 100px wide.</p>',
      label: 'Content',
      customClass: 'expressform-service_logo expressform-hide_review',
      refreshOnChange: false,
      key: 'content1',
      type: 'content',
      input: false,
      tableView: false,
    },
  ],
  lockKey: true,
  //"source": "65a4c11a7800da3c1021e65d",
  isNew: true,
};
