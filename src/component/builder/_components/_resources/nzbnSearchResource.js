export default {
    title: 'nzbn',
    key: 'data_entity_nzbn',
    icon: 'university',
    schema: {
        label: "Enter your New Zealand Business Number or business name",
        widget: "choicesjs",
        placeholder: "Search for business",
        tableView: true,
        dataSrc: "url",
        data: {
            url: "data_nzbnentityurl",
            headers: [
                {
                    key: "Authorization",
                    value: "data_nzbnapikey"
                },
                {
                    key: "Ocp-Apim-Subscription-Key",
                    value: "data_nzbnbasesubscriptionkey"
                }
            ]
        },
        dataType: "object",
        template: "<span>{{ item.entityName }} {{ item.nzbn }}</span>",
        validate: {
            required: true
        },
        key: "data_entity_nzbn",
        type: "select",
        disableLimit: false,
        filter: "entity-status=Registered",
        noRefreshOnScroll: false,
        input: true
    },
    weight: 1,
}