interface Component {
  label: string;
  tableView: boolean;
  key: string;
  type: string;
  showSidebar: boolean;
  input: boolean;
  html?: string;
}

interface BuilderOptions {
  components: Component[];
}
const builderOptions: BuilderOptions = {
  components: [
    {
      label: 'Form Title',
      tableView: true,
      key: 'formTitle',
      type: 'textfield',
      input: true,
      showSidebar: false,
    },
    {
      label: 'Add a description to your form to set expectations for those filling it out.',
      tableView: true,
      key: 'formDescription',
      type: 'textarea',
      input: true,
      showSidebar: false,
    },
    {
      label: 'Confirmation Page What Happens Next',
      tableView: false,
      key: 'whnContent',
      type: 'content',
      html: '<p>The confirmation message will appear on a new page once the form has been submitted. Some useful things you can add to your confirmation page are:</p>',
      input: false,
      showSidebar: false,
    },
    {
      label: 'Submit',
      tableView: false,
      key: 'submit',
      type: 'button',
      input: true,
      showSidebar: false,
    },
  ],
};
export default builderOptions;
