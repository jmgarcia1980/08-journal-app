import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';


export const startLoginEmPw = ( email, password )=>{
    return (dispatch)=> {

        setTimeout(() => {
            dispatch(login( 1235, 'carlos') )
        }, 3500);
    }
}

export const startGoogleLogin = () =>{
    return() =>{
        
        firebase.auth().signInWithPopup(googleAuthProvider) //retorna unapromesa
        .then( userCred => {
            console.log(userCred );
        })
    }
}

export const login = (uid, displayName) =>{
    return {
        type: types.login,
        payload: {
            uid, 
            displayName
        }
    }
}

