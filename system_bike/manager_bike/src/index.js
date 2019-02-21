import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index'
import * as serviceWorker from './serviceWorker';

// 建立数据源
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
