import Button from '@mui/material/Button';
import ClipboardJS from 'clipboard';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import secureLocalStorage from 'react-secure-storage';
import Notification from 'src/component/shared/message/notification.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useSchemaStore} from 'src/store/schema-store';

import 'react-json-view-lite/dist/index.css';
import BasicModal from './_components/BasicModal';
import CopyJSONButton from './_components/CopyJSONButton';
import builderSettings from './builderSettings';
import formioWebFormBuilder from './formioWebformBuilder';

interface BuilderProps {
  defaultComponents: any;
  onCopy: (data: string) => void;
}

function Builder({defaultComponents, onCopy}: BuilderProps) {
  formioWebFormBuilder();
  const defaultComp = defaultComponents.components;
  // eslint-disable-next-line no-unused-vars
  const {schema, setSchema} = useSchemaStore();

  const [showCopied, setShowCopied] = useState(false);
  const [showPasted, setShowPasted] = useState(false);
  const [showRefresh, setShowRefresh] = useState(false);

  const [copiedJSON, setCopiedJSON] = useState<string>('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSchemaChange = () => {
    setSchema(defaultComponents.components);
  };

  useEffect(() => {
    const handleLoad = () => {
      import('bcformiojs').then((module) => {
        const Formio = module.Formio;
        const _builder = document.getElementById('builder') as HTMLElement;
        const jsonElement = document.getElementById('json') as HTMLElement;
        const formElement = document.getElementById('formio') as HTMLElement;
        const subJSON = document.getElementById('subjson') as HTMLElement;
        const components = defaultComponents.components;

        builderSettings(
          _builder,
          Formio,
          components,
          'form',
          defaultComp,
          subJSON,
          jsonElement,
          formElement,
          schema,
          onSchemaChange
        );
      });
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('load', handleLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultComp, defaultComponents]);
  useEffect(() => {
    const clipboard = new ClipboardJS('#copyJSON');

    clipboard.on('success', function () {
      setShowCopied(true);
    });
    clipboard.on('error', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
    });
    return () => {
      clipboard.destroy();
    };
  }, [onCopy]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setCopiedJSON(newValue);
  };

  const handlePasteBtnClick = () => {
    onCopy(copiedJSON);
    setShowPasted(true);
  };

  const navigateToFormRenderer = (e: any) => {
    secureLocalStorage.setItem('formSchema', JSON.stringify({components: defaultComp}));
    if (typeof window !== 'undefined') {
      window.open(`/${RoutesEnum.FormRenderer}`, '_blank');
    }

    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'block';
  };

  const updateSchemaForFormRenderer = () => {
    return new Promise<void>((resolve, reject) => {
      try {
        secureLocalStorage.setItem('formSchema', JSON.stringify({components: defaultComp}));
        localStorage.setItem('updatedSchema', 'true');
        resolve();
      } catch (error) {
        reject(error);
      }
    }).then(() => {
      setShowRefresh(true);
    });
  };

  useEffect(() => {
    const builderTab = document.querySelector('#builderTabs') as HTMLElement;
    const listElements = builderTab.querySelectorAll('li');
    Array.from(listElements).map((elem, index) => {
      if (index === 1) {
        elem.style.display = 'none';
      }
    });

    return () => {
      Array.from(listElements).map((elem) => {
        elem.style.display = 'block';
      });
    };
  }, []);

  return (
    <>
      <div style={{marginBottom: '16px'}}>
        <Button variant='contained' onClick={navigateToFormRenderer}>
          Preview
        </Button>
        <Button variant='contained' style={{display: 'none'}} onClick={updateSchemaForFormRenderer}>
          Update
        </Button>
      </div>

      <Tabs defaultActiveKey='edit' id='builderTabs' className='mb-3'>
        <Tab eventKey='edit' title='Edit' className='builder-tab'>
          <div id='builder'></div>
          <div id='subjson' className='hidden'></div>
        </Tab>
        <Tab eventKey='view' title='View' className='builder-tab'>
          <BasicModal />
          <div id='formio'></div>
        </Tab>
        <Tab eventKey='json' title='Export/Import JSON' className='builder-tab'>
          <Tabs defaultActiveKey='jsonData' id='formContent' className='mb-3'>
            <Tab eventKey='jsonData' title='Copy Json'>
              <CopyJSONButton targetId='#json' onClick={() => {}}>
                Copy JSON
              </CopyJSONButton>
              <div id='json'></div>
            </Tab>
            <Tab eventKey='placeJson' title='Paste Json'>
              <FloatingLabel controlId='floatingTextarea2' label='' className='mb-12'>
                <Form.Control
                  as='textarea'
                  placeholder='Paste JSON here'
                  style={{height: '300px', width: '800px'}}
                  value={copiedJSON}
                  onChange={handleTextareaChange}
                />
                <button className='btn btn-primary' onClick={handlePasteBtnClick}>
                  Paste
                </button>
              </FloatingLabel>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>

      <Notification message='JSON copied' open={showCopied} onClose={() => setShowCopied(false)} />
      <Notification message='Pasted JSON' open={showPasted} onClose={() => setShowPasted(false)} />
      <Notification
        message='Form view is updated. Please view the Form Preview.'
        open={showRefresh}
        onClose={() => setShowRefresh(false)}
      />
    </>
  );
}

Builder.propTypes = {
  defaultComponents: PropTypes.object.isRequired,
};

export default Builder;
