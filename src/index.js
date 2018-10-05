//Basic React import
import React from 'react';
import ReactDOM from 'react-dom';

// Add Redux
import {createStore} from 'redux';
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';

// Add Router
import {BrowserRouter as Router} from 'react-router-dom';

// Include styles
import './main.css';

//Custom imports
import reducers from './reducers';
import routes from './routes';

import * as serviceWorker from './serviceWorker';

// create REDUX storage
const STORE = createStore(reducers, composeWithDevTools());

ReactDOM.render(
    <Provider store={STORE}>
        <Router>
            {routes}
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
