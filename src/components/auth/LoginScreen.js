import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmPw } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    // es el hook que permite ejecutar el dispatch de acciones
    const dispatch = useDispatch();

    const [ values, handleImputChange ] = useForm ({
        email: 'jm@gmail.com',
        password: '123'
    });
    const { email, password } = values;

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(email, password);
        // dispatch( login( 1212, 'jmg') );
        dispatch(startLoginEmPw( email, password ));
        
    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">
                Login
            </h3>
            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    placeholder="email"
                    name="email"                
                    className="auth__input"
                    value={ email }
                    onChange= { handleImputChange }
                />

                <input
                    type="password"
                    placeholder="password"
                    name="password" 
                    className="auth__input"
                    value={ password }
                    onChange= { handleImputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Ingresar
                </button>
                <hr></hr>
                
                <div className="auth__social_networks">
                    <p>Login con Redes solciales</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register" 
                    className="link"
                >
                    Crear nueva cuenta
                </Link>
            </form>
        </>
    )
}
