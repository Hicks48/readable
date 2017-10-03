import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import App from './components/App'

import initializeStore from './store'

ReactDOM.render(
    <Provider store={initializeStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
