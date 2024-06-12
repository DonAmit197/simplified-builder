export default {
    title: 'WHN HTML',
    key: 'data_whatHappensNext',
    icon: 'list-alt',
    schema: {
        label: 'What happens next content',
        applyMaskOn: "change",
        type: 'textarea',
        key: 'data_whatHappensNext',
        editor: 'ace',
        calculateValue:
            "var totalAmt = parseFloat(data.data_payment_totalAmount);\r\nif(totalAmt){\r\n  console.log(\"TotalAmt\",totalAmt);\r\nvar formattedTxt = totalAmt.toFixed(2);0-\r\nvalue = 'Your application has been forwarded to XX District Council for processing. You can check the progress of your applications from your Business Connect dashboard. <br /><br />XX District Council will send you an invoice for your records and be in touch if they require any additional information.<br /><br />You can pay the application fee in person at the XX District Council Service Centre or online using the details below:<br /><br /> Amount to  pay: $' + formattedTxt + '<br />Bank account name: XX District Council <br />Bank account number: 02-0000-0000000-00 <br />Code: data_caseID <br />Reference: XXXXX <br/> <br/>Contact details for Ōtorohanga District Council:<br />Email: XX<br />Phone: 0800 000 000<br /><br />';\r\n}\r\n",
        input: true,
        lockKey: true,
        isNew: true,
    },
    weight: 15,
}