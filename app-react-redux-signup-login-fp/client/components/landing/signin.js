import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {_loginUser} from '../../src/actions/landing-action';

class Login extends Component {
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center css-form-cont">
                    <div className="col-md-6">
                        <h4 className="text-center">Sign in</h4>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><span data-name="email"/>
                            <input type="email" className="form-control" name="email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label><span/>
                            <input type="password" className="form-control" name="password" id="password"/>
                        </div>
                        <div className="text-center">
                            <div className="css-bottom-label">
                                <a href="#">Reset password ?</a>  &nbsp; | &nbsp;  <b><a href="/signup">New account ?</a></b>
                            </div>
                            <button className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <footer>
                    <div className="css-copyright">
                        BySomeone &copy; 2018. &nbsp; | &nbsp; <a href="#">Contact us for query</a>
                    </div>
                </footer>
            </div>
        );
    }
}

Login.propTypes = {
    _loginUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    loginAck: state.Landing.loginData
})

export default connect(mapStateToProps, {_loginUser})(Login);