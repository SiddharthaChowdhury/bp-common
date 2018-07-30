import {SIGNUP} from './CONST';

// export const SignUp = (data) =>{
//     // Signup logic comes
//     return {msg: "User created!"}
// }

export const SignUp = () => ((dispatch)=>{
    dispatch({
        type: SIGNUP,
        payload: {
            msg: "User successfully registered!"
        }
    })
})