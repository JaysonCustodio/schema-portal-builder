import React from 'react';
import  Dashboard  from './components/dashboard/Dashboard'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import store from "./redux/store"
import './style.scss'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Dashboard/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
