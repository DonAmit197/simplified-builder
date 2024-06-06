import HeaderComponentEditDisplay from './editForm/HeaderComponent.edit.display';
// import editForm from './editForm/HeaderComponent.form'
//import _ from 'lodash'

const pageHeader = (_module) => {
    console.log(_module)
    const Formio = _module;

    const HTMLComponent = Formio.Components.components.htmlelement;
    /**
   * Create a Header compoennt and extend from the HTMLComponent.
   */

    class HeaderComponent extends HTMLComponent {
        constructor(component, options, data) {
            super(component, options, data);



            // console.log(HeaderComponentEditDisplay)

            // HeaderComponentEditDisplay.forEach((_component) => {
            //     if (_component.components) {
            //         _component.components.forEach((subComp) => {
            //             if (subComp.key === 'headerType') {
            //                 const _data = subComp.data;
            //                 console.log(subComp.data)
            //                 this.component.tag = _data.values

            //             }
            //         })
            //     }
            // })


        }

        // static editForm = () => {
        //     return {
        //         components: [
        //             {
        //                 key: 'tabs',
        //                 type: 'tabs',
        //                 components: HeaderComponentEditDisplay
        //             }
        //         ]
        //     }
        // }

        static schema(...extend) {
            return HTMLComponent.schema(
                {
                    label: 'Page Header',
                    type: 'header',
                    tag: 'h2',

                },
                ...extend
            );
        }


        static get builderInfo() {
            return {
                title: 'Page Header',
                group: 'Fields',
                icon: 'code',

                weight: 2,
                documentation: '/userguide/#html-element-component',
                schema: HeaderComponent.schema({}),
            };
        }



        init() {
            /** Use this method on drop of this component */
            //console.log(this)

            super.init();


        }



    }


    HeaderComponent.editForm = () => {
        // const editForm = HTMLComponent.editForm(...args);
        // console.log(args);
        // editForm.components.key = 'tabs';
        // editForm.components.type = 'tabs';
        // editForm.components = HeaderComponentEditDisplay

        return {
            components: [
                {
                    key: 'tabs',
                    type: 'tabs',
                    components: HeaderComponentEditDisplay
                }
            ]
        }


        // const tagComponent = Formio.Utils.getComponent(editForm.components, 'tag');
        // console.log(tagComponent)
        // tagComponent.type = 'select';
        // tagComponent.dataSrc = 'values';
        // tagComponent.data = {
        //     values: [
        //         { label: 'H1', value: 'h1' },
        //         { label: 'H2', value: 'h2' },
        //         { label: 'H3', value: 'h3' },
        //         { label: 'H4', value: 'h4' },
        //         { label: 'H5', value: 'h5' },
        //     ],
        // };
        //return editForm;
    };

    Formio.Components.addComponent('header', HeaderComponent);

    // Formio.Formio.use({
    //     components: {
    //         header: HeaderComponent
    //     }
    // })
}
export default pageHeader;