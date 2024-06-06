import ImageComponentDisplay from './editForm/ImageComponent.edit.display';
import Component from 'bcformiojs/components/_classes/component/Component'
//import _ from 'lodash';

const imageViewComponent = (_module) => {
    const Formio = _module;
    console.log(Formio);
    const ContentComponent = Formio.Components.components.content;

    class ImageComponent extends Component {
        static schema(...extend) {
            return ContentComponent.schema(
                {
                    label: 'Image upload',
                    type: 'imageComponent',
                    key: 'imageComponent',
                },
                ...extend
            );
        }
        static get builderInfo() {
            return {
                title: 'Image',
                icon: 'terminal',
                group: 'Field',
                weight: 3,
                documentation: '/userguide/#html-element-component',
                schema: ImageComponent.schema({}),
            };
        }
        get defaultSchema() {
            return ImageComponent.schema();
        }
        get content() {
            if (this.builderMode) {
                return this.component.html || 'Content';
            }

            let htmlContent = this.component.html || '';
            const imgWidth = parseInt(this.schema.width);
            const imgHeight = parseInt(this.schema.height);

            if (htmlContent && (imgWidth || imgHeight)) {

                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = htmlContent;

                const imgElement = tempDiv.querySelector('img');
                const altText = tempDiv.querySelector('figcaption');
                if (imgElement) {
                    if (imgWidth) {
                        imgElement.width = imgWidth;
                    }
                    if (imgHeight) {
                        imgElement.height = imgHeight;
                    }
                    if (altText) {

                        const getAltText = altText.textContent.trim();
                        imgElement.alt = getAltText
                    }

                }


                htmlContent = tempDiv.innerHTML;

            }

            return htmlContent;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render(content) {

            return super.render(`<div ref="html">${this.content}</div>`);
        }

        getAltAttr = (elem) => {

            const figCaption = elem.querySelector('figcaption');
            //console.log(figCaption)
            let altText;
            if (figCaption) {
                figCaption.style.display = 'none';
                altText = figCaption.textContent;

                return altText
            }

            return altText;
        };
        attach(element) {

            this.loadRefs(element, { html: 'single' });
            const altAttr = this.getAltAttr(element);


            const addImgDimension = () => {
                const imgWidth = parseInt(this.schema.width);
                const imgHeight = parseInt(this.schema.height);
                const $img = element.querySelector('img');
                if ($img) {
                    if (imgWidth) {

                        $img.width = imgWidth;
                    }

                    if (imgHeight) {

                        $img.height = imgHeight;
                    }
                    if (altAttr) {
                        $img.alt = altAttr;
                    }
                }

                let innerElement;
                if (this.refs.html) {
                    innerElement = this.refs.html.innerHTML;


                }


                if (this.refs.html) {
                    this.setContent(this.refs.html, innerElement);
                }
                if (this.component.html) {
                    this.component.html = innerElement;
                }




            };
            const setAltAttr = () => {
                const figCaption = element.querySelector('figcaption');

                if (figCaption) {
                    figCaption.style.display = 'none';
                    const $img = element.querySelector('img');
                    const altText = figCaption.textContent.trim();
                    $img.setAttribute('alt', altText);
                }
            };

            addImgDimension();
            setAltAttr();

            this.on('change', () => {
                addImgDimension();
                setAltAttr();
            });

            return super.attach(element);
        }


    }

    ImageComponent.editForm = () => {
        return {
            components: [
                {
                    key: 'tabs',
                    type: 'tabs',
                    components: ImageComponentDisplay,
                },
            ],
        };
    };

    Formio.Components.addComponent('imageComponent', ImageComponent);
};

export default imageViewComponent;
