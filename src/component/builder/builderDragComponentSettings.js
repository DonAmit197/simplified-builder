import shortAnswerResource from './_components/_resources/shortAnswerResource';
import longAnswerResource from './_components/_resources/longAnswerResource';
import fileResource from './_components/_resources/fileResource';
import tableResource from './_components/_resources/tableResource';
import bankAccountResource from './_components/_resources/bankAccountResource';
import panelResource from './_components/_resources/panelResource';
import currencyResource from './_components/_resources/currencyResource';
import nzbnSearchResource from './_components/_resources/nzbnSearchResource';
import addressNZBNResource from './_components/_resources/addressNZBNResource';
import declarationResource from './_components/_resources/declarationResource';
import whnContentResource from './_components/_resources/whnContentResource';
import whnHTMLResource from './_components/_resources/whnHTMLResource';
import showStopperResource from './_components/_resources/showStopperResource';
import reCapthaResource from './_components/_resources/reCapthaResource';

const builderDragComponents = {
    custom: {
        title: 'Fields',
        weight: 0,
        components: {
            shortAnswer: shortAnswerResource,
            longAnswer: longAnswerResource,
            number: true,
            checkbox: true,
            selectboxes: true,
            select: true,
            radio: true,
            button: true,
            email: true,
            url: true,
            phoneNumber: true,
            datetime: true,
            day: true,
            time: true,
            file: fileResource,
            datagrid: tableResource,
            bankAccountNumber: bankAccountResource,
            nzCurrency: currencyResource,
            columnContent: panelResource,
            header: true,
            imageComponent: true,
        },
    },
    layouts: {
        title: 'Layout',
        weight: 2,
        components: {
            panel: true,
            columns: true,
            content: true,
            htmlelement: true,
            starrating: true,
        },
    },
    apiSearch: {
        title: 'API Search',
        weight: 3,

        components: {
            nzbnSearch: nzbnSearchResource,
            addressNZBN: addressNZBNResource,
        },
    },
    additional: {
        title: 'Additional',
        weight: 4,
        components: {
            declaration: declarationResource,
            whatHappensNextContent: whnContentResource,
            whatHappensNextHTML: whnHTMLResource,
            showStopper: showStopperResource,
            reCaptha: reCapthaResource,
        },
    },
}
export default builderDragComponents