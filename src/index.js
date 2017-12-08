import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

let store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enable chrome redux tool
);
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
// registerServiceWorker();
