import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Card from 'react-bootstrap/Card';
import builderSettings from './builderSettings';
import formioWebFormBuilder from './formioWebformBuilder';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import {JsonView, allExpanded, defaultStyles} from 'react-json-view-lite';
import CopyJSONButton from './_components/CopyJSONButton';
import ClipboardJS from 'clipboard';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import 'react-json-view-lite/dist/index.css';

interface Component {
  label: string;
  tableView: boolean;
  key: string;
  input: boolean;
  showSidebar: boolean;
  html?: string;
}
interface BuilderProps {
  defaultComponents: any;
  onCopy: (data: string) => void;
}
function Builder({defaultComponents, onCopy}: BuilderProps) {
  formioWebFormBuilder();
  const defaultComp = defaultComponents.components;
  // eslint-disable-next-line no-unused-vars
  const [schema, setSchema] = useState<Component[]>(defaultComp);
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
      //console.info('Action:', e.action);
      //console.info('Text:', e.text);
      //console.info('Trigger:', e.trigger);
      try {
        Toastify({
          text: 'Copied JSON',
          position: 'right',
        }).showToast();
      } catch (error) {
        console.error(error);
      }
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
    try {
      Toastify({
        text: 'Pasted JSON',
        position: 'right',
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Tabs defaultActiveKey='edit' id='builderTabs' className='mb-3'>
        <Tab eventKey='edit' title='Edit' className='builder-tab'>
          <div id='builder'></div>
          <div id='subjson' className='hidden'></div>
        </Tab>
        <Tab eventKey='view' title='View' className='builder-tab'>
          <div id='formio'></div>
        </Tab>
        <Tab eventKey='json' title='Export/Import JSON' className='builder-tab'>
          {/* <JsonView data={schema} shouldExpandNode={allExpanded} style={defaultStyles} /> */}
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
    </>
  );
}
Builder.propTypes = {
  defaultComponents: PropTypes.object.isRequired,
};

export default Builder;
