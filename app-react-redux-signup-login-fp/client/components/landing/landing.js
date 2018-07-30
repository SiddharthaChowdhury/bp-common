import React, {Component} from 'react';
import './landing.css'

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SignUp} from '../../src/actions/landing-action';

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {users: []}
    }
    componentDidMount(){
        this.props.SignUp();
    }
    render(){
        return(
            <div className="container">
                {this.props.regAck.msg}
            </div>
        )
    }
}

Landing.propTypes = {
    SignUp : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    regAck : state.Landing.signupData // responce : state.(in index reducer).(landing reducer)
})

export default connect(mapStateToProps, {SignUp})(Landing);