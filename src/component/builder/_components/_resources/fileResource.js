export default {
    title: 'Attachment',
    key: 'file',
    icon: 'terminal',
    schema: {
        label: 'Attachment (optional)',
        hideLabel: true,
        tableView: false,
        storage: 'url',
        webcam: false,
        fileTypes: [
            {
                label: '',
                value: '',
            },
        ],
        filePattern: '.pdf,.png,.jpg,.jpeg,.docx,.xlsx',
        fileMaxSize: '10MB',
        key: 'file',
        type: 'file',
        url: 'data_fileUpload_url?FileLabel="name of document goes here"',
        input: true,
    },
    weight: 15,
}