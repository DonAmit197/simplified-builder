export default {
  showSidebar: false,
  label: 'intro and logo',
  customClass: 'expressform-section',
  key: 'introAndLogo',
  type: 'well',
  input: false,
  tableView: false,
  components: [
    {
      html: '<h2>Form title</h2>',
      label: 'Content',
      customClass: 'expressform-page_header',
      refreshOnChange: false,
      key: 'content',
      type: 'content',
      input: false,
      tableView: false,
    },
    {
      html: `<p>Add a description to your form to help set expectations.</p>
      <p>Description content about the service and what you would like the customers to know...</p>`,
      label: 'Content',
      refreshOnChange: false,
      key: 'content2',
      type: 'content',
      input: false,
      tableView: false,
      hidden: true,
    },
  ],
};
