import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    })
}

registerServiceWorker();
