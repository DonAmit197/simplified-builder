import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import builderSettings from './builderSettings';
import formioWebFormBuilder from './formioWebformBuilder';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function Builder({ defaultComponents }) {
  formioWebFormBuilder();
  const defaultComp = defaultComponents.components;
  // eslint-disable-next-line no-unused-vars
  const [schema, setSchema] = useState(defaultComp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSchemaChange = () => {
    setSchema(defaultComponents.components);
    // console.log('1 SC', schema);
    // document.getElementById('json').innerHTML = JSON.stringify(schema, null, 4);
  };
  useEffect(() => {
    const handleLoad = () => {
      import('bcformiojs').then((module) => {
        const Formio = module.Formio;
        const _builder = document.getElementById('builder');
        const jsonElement = document.getElementById('json');
        const formElement = document.getElementById('formio');
        const subJSON = document.getElementById('subjson');
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
  }, [defaultComp, defaultComponents, onSchemaChange]);

  return (
    <>
      <Tabs defaultActiveKey="edit" id="builderTabs" className="mb-3">
        <Tab eventKey="edit" title="Edit">
          <div id="builder"></div>
          <div id="subjson" className="hidden"></div>
        </Tab>
        <Tab eventKey="view" title="View">
          <div id="formio"></div>
        </Tab>
        <Tab eventKey="json" title="Json">
          <JsonView
            data={schema}
            shouldExpandNode={allExpanded}
            style={defaultStyles}
          />
          <div id="json"></div>
        </Tab>
      </Tabs>
    </>
  );
}
Builder.propTypes = {
  defaultComponents: PropTypes.object.isRequired,
};

export default Builder;
