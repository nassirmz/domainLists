import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Wrap outer react component with ReactRecux Provider and render to the DOM
ReactDOM.render(
  <Provider>
    <div>Domain Lists</div>
  </Provider>,
  document.getElementById('app'),
);