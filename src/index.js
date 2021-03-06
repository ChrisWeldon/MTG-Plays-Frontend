import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'

import { addCard, fetchCard, fetchSearch } from './actions'

const loggerMiddleware = createLogger()
const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

//const unsubscribe = store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
