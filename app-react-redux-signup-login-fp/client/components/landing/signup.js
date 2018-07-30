import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {_createUser} from '../../src/actions/landing-action';

class Signup extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props._createUser();
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center align-items-center css-form-cont">
                    <div className="col-md-6">
                        <h4 className="text-center">Create account</h4>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="name">Name</label><span/>
                            <input type="text" className="form-control" name="name" id="name"/>
                        </div>
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
                                <b>Note:</b> By creating account you agree to our <a href="#">tems and conditions</a> &nbsp; | &nbsp; <b><a href="/login">Login?</a></b>
                            </div>
                            <button className="btn btn-primary">Create account</button>
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
        )
    }
}

Signup.propTypes = {
    _createUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    regisAck : state.Landing.signupData
})

export default connect(mapStateToProps, {_createUser})(Signup)

