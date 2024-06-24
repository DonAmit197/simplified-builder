import {useSchemaStore} from 'src/store/schema-store';
import {useEffect} from 'react';
import gds from '@ukhomeoffice/formio-gds-template';
import {Formio} from 'formiojs';
import Button from '@mui/material/Button';
import FormRendererFooter from './FormRendererFooter';
import './form-renderer.css';
import './form-gds.css';

const FormRenderer = () => {
  const {schema} = useSchemaStore();

  console.log('Schema', schema);

  useEffect(() => {
    const formioElem = document.getElementById('formio2') as HTMLElement;

    const renderForm = () => {
      try {
        if (schema) {
          const globalFormio = (Formio as any).GlobalFormio;
          Formio.use(gds);

          globalFormio.createForm(formioElem, schema);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderForm();
  }, [schema]);

  return (
    <>
      <div className='sticky-button form-view-btn'>
        <div className='sticky-button_inner'>
          <h5 className='sticky-button_header'>Form Preview</h5>
          <Button
            variant='contained'
            onClick={() => {
              window.history.go(0);
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
