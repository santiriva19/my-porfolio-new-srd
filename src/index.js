import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './store/Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import work_reducer from './store/reducers/work-reducer';

const store= createStore(work_reducer);

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
        <Router/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
