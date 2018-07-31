import React, {Component} from 'react';
import './landing.css'

import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import SignupPage from './signup';
import LoginPage from './signin';

class Landing extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Switch>
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={SignupPage} />
            </Switch >
        )
    }
}

export default connect(null, {})(Landing);