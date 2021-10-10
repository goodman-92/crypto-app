import React from 'react'
import ReactDOM from 'react-dom';

import  App from './App';
import {HashRouter} from "react-router-dom";
import 'antd/dist/antd.css';

import {Provider} from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>
  , document.querySelector('#root'))