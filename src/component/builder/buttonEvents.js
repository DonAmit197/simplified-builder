import _ from 'lodash';

const config = {
  moveDwn: {
    move: 'down',
    customCSS: 'moveDn',
  },

  moveUp: {
    move: 'up',
    customCSS: 'move-up',
  },
};

function addFormActionEvent(btn, component, builderComponent) {
  component.addEventListener(btn, 'keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      const getRef = event.target.getAttribute('ref');
      if (builderComponent !== undefined) {
        builderComponent.selectedComponent = component;
        if (getRef === 'down') {
          builderComponent.updateComponentPlacement(false);
        } else if (getRef === 'up') {
          builderComponent.updateComponentPlacement(true);
        }

        builderComponent.emit('change', builderComponent.form);
      }
    }
  });
}

function buttonMovement(move, parentElem, component, builderComponent) {
  const btnElem = document.createElement('a');
  _.forEach(config, (btnConfig) => {
    if (btnConfig.move === move) {
      btnElem.classList.add(btnConfig.customCSS);
      btnElem.classList.add('btn-move');
      btnElem.setAttribute('ref', btnConfig.move);
    }
    if (move === 'up') {
      btnElem.textContent = 'Up';
    }
    if (move === 'down') {
      btnElem.textContent = 'Down';
    }
    addFormActionEvent(btnElem, component, builderComponent);
  });

  parentElem.appendChild(btnElem);
}

export default buttonMovement;
