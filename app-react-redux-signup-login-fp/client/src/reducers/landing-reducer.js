import {SIGNUP, LOGIN} from '../actions/CONST';

const initialState = {
    signupData: {},
    loginData: {}
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case SIGNUP:
            return Object.assign({}, state, {signupData: payload})
        case LOGIN: 
            return Object.assign({}, state, {loginData: payload})
        default:
            return state;
    }
}