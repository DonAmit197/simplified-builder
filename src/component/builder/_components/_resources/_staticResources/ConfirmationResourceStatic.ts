export default {
  showSidebar: false,
  label: 'Thank You details',
  customClass: 'ef-hideComponent ef-confirmation',
  key: 'thankYouDetails',
  type: 'well',
  input: false,
  tableView: false,
  components: [
    {
      html: `<p><strong>Confirmation message</strong></p>
      <p>The What happens next message will appear on a new page once the form has been submitted. Some useful things you can add are:</p>
      <ul>
      <li>details of what happens next and when.</li><li>contact details for the service.</li>
      <li>links to information or services that users are likely to need next.</li>
      <li>a link to your feedback form.</li>
      </ul>`,
      label: 'Content',
      refreshOnChange: false,
      key: 'confirmation_information',
      type: 'content',
      input: false,
      tableView: false,
      hidden: true,
    },
    {
      html: '<h3>Your request has been successful.</h3>',
      label: 'Content',
      customClass: 'page-heading efPageHeading',
      refreshOnChange: false,
      key: 'ui_pageHeading',
      type: 'content',
      input: false,
      tableView: false,
    },
    {
      html: '<h3>What happens next</h3><p>Your application will be processed by the xxxxx team who will contact you to advise that your proposed service has been approved or decline. They may also contact you for further information if needed.</p><p>If you have any questions contact (email address) with your Application ID number.</p><p>Thank you.</p>',
      label: 'Content',
      refreshOnChange: false,
      key: 'form_whatHappensNext',
      type: 'content',
      input: false,
      tableView: false,
    },
    {
      html: '<p><span style="background-color:rgb(255,255,255);color:rgb(65,64,66);">If you think emails aren’t arriving into your inbox, please check your junk or spam folders.</span></p>',
      label: 'Content',
      customClass: 'tips-container',
      refreshOnChange: false,
      key: 'info-content1',
      type: 'content',
      input: false,
      tableView: false,
    },
    {
      html: '<p>How was your experience? Let us know what we\'re getting right and what we can improve.&nbsp;It\'ll only take 2 minutes.</p><p><a href="https://test.businessconnect.govt.nz/prweb/PRAuth/app/default/CustomerFeedback_FRMNPS">Rate your experience</a></p>',
      label: 'Content',
      customClass: 'tips-container',
      refreshOnChange: false,
      key: 'info-content2',
      type: 'content',
      input: false,
      tableView: false,
    },
  ],
};
