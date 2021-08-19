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
    return( dispatch ) =>{
        
        firebase.auth().signInWithPopup(googleAuthProvider) //retorna unapromesa
        .then( ({ user }) => {
            // console.log(user);
            dispatch(
                login( user.uid, user.displayName )
            )
        })
        .catch('error...')
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
