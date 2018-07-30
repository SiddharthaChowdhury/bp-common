import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import Store from './store';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Landing from '../components/landing/landing';


const App = () => (
    <Landing/>
)

ReactDOM.render(
<Provider store={Store}> 
    <App/>
</Provider>
, document.getElementById('root'));