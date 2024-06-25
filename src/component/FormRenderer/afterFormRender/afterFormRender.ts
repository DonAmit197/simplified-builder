interface FormComponent {
  id: string;
  element: HTMLElement;
}

interface FnDefinitions {
  components: FormComponent[];
  getComponent?: (component_key: string) => FormComponent | undefined;
}

const afterFormRender = {
  hideReCapthaComponentfromUI: (form: FnDefinitions) => {
    const reCapthaComponent = form.getComponent ? form.getComponent('reCaptha_Token') : null;
    try {
      if (reCapthaComponent) {
        const reCapthaElement = reCapthaComponent.element;
        if (reCapthaElement) {
          reCapthaElement.style.display = 'none';
        }
      } else {
        console.log('ReCaptha Component not found at ', reCapthaComponent);
      }
    } catch (error) {
      console.error('Error hiding ReCaptha component:', error);
    }
  },
};
export default afterFormRender;
