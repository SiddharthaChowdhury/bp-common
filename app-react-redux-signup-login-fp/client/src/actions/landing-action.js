import {SIGNUP, LOGIN} from './CONST';

// export const SignUp = (data) =>{
//     // Signup logic comes
//     return {msg: "User created!"}
// }

export const _createUser = () => ((dispatch)=>{
    dispatch({
        type: SIGNUP,
        payload: {
            msg: "User successfully registered!"
        }
    })
})

export const _loginUser = () => ((dispatch)=>{
    dispatch({
        type: LOGIN,
        payload:{
            msg: "Login Successful!"
        }
    })
})