import Button from '@mui/material/Button';
import gds from '@ukhomeoffice/formio-gds-template';
import {Formio} from 'formiojs';
import {useEffect} from 'react';
import {useSchemaStore} from 'src/store/schema-store';
import afterFormRender from './afterFormRender/afterFormRender';
import FormRendererFooter from './FormRendererFooter';
import './form-renderer.css';
import './form-gds.css';

const FormRenderer = () => {
  const {schema} = useSchemaStore();

  useEffect(() => {
    const formioElem = document.getElementById('formio2') as HTMLElement;

    try {
      if (schema) {
        const globalFormio = (Formio as any).GlobalFormio;
        Formio.use(gds);

        globalFormio.createForm(formioElem, schema).then((form: any) => {
          afterFormRender.hideReCapthaComponentfromUI(form);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [schema]);

  return (
    <>
      <div className='sticky-button form-view-btn'>
        <div className='sticky-button_inner'>
          <h5 className='sticky-button_header'>Form Preview</h5>
          <Button
            variant='contained'
            onClick={() => {
              location.replace(location.href);
            }}
            className='btn btn-primary'>
            Refresh
          </Button>
        </div>
      </div>
      <div className='form-wrapper'>
        <div id='formio2'></div>
      </div>
      <FormRendererFooter />
    </>
  );
};
export default FormRenderer;
