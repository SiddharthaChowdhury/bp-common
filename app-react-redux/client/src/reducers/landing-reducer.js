import {SIGNUP} from '../actions/CONST';

const initialState = {
    signupData: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case SIGNUP:
            return Object.assign({}, state, {signupData: action.payload})
        default:
            return state;
    }
}