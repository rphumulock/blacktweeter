import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './style/style.css';

import App from './components/App';
import reducers from './reducers';

console.log(process.env.NODE_ENV);

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <App />
    </Provider>
    , document.querySelector('.container')
);
