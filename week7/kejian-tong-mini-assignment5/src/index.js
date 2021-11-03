import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers/reducers';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


