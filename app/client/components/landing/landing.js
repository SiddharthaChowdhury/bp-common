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
        // fetch('http://localhost:1337/api/users')
        // .then(resp => resp.json())
        // .then(data => {
        //     this.setState({users:data})
        // })
        this.props.SignUp();
    }
    render(){
        const users = this.state.users.map(usr => (
            <div key={usr.id}>{usr.name}</div>
        ))
        return(
            <div>
                {this.props.regAck.msg}
                {users}
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