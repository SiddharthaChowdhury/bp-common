import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import Store from './store';

import Landing from '../components/landing/landing';


const App = () => (
    <div>
        <Landing/>
    </div>
)

ReactDOM.render(
<Provider store={Store}> 
    <App/>
</Provider>
, document.getElementById('root'));