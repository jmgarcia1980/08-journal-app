import React from 'react';
import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { setError } from '../../actions/ui';


export const RegisterScreen = () => {

    // es el hook que permite ejecutar el dispatch de acciones
    const dispatch = useDispatch();

    const [ values, handleImputChange ] = useForm ({
        name: 'Juan',
        email: 'mail',
        password: '123',
        password1: '123'
    });
    const { name, email, password, password1 } = values;

    const handleRegister =(e)=>{
        e.preventDefault()
        
        dispatch ( setError('nombre invalido') );

        if ( formValid() ){
            console.log('formulario OK')
        }
    }

    const formValid = ()=>{
        console.log(name.trim().length)
        if(name.trim().length === 0){
            // console.log('nombre invalido');
            // dispatch ( setError('nombre invalido') );
            return false;
        }else if( !validator.isEmail( email ) ) {
            // console.log('Mail invalido');
            // dispatch ( setError('Mail invalido') );
            return false;
        }else if( password !== password1 || password.length <=2 ){
            // console.log('el PW debe ser igual a Pw1 y debe ser mas de 2 caracteres');
            // dispatch ( setError('el PW debe ser igual a Pw1 y debe ser mas de 2 caracteres') );
            return false;
        }else {
            // dispatch ( removeError() );
            return true;
        }
    }

    return (
        <>
            <h3 className="auth__title">
                Registrar
            </h3>
            <form 
                onSubmit={ handleRegister }
            >

                <div className="auth__alert-error">
                    errorMessaje
                </div>

                <input
                    type="text"
                    placeholder="JuanM"
                    name="name" 
                    className="auth__input"
                    value={ name }
                    onChange= { handleImputChange }
                />

                <input
                    type="text"
                    placeholder="mail.jgarcia@gmail.com"
                    name="email"
                    className="auth__input"
                    value={ email }
                    onChange= { handleImputChange }
                />

                <input
                    type="password"
                    placeholder="123"
                    name="password" 
                    className="auth__input"
                    value={ password }
                    onChange= { handleImputChange }
                />

                <input
                    type="password"
                    placeholder="123"
                    name="password1"
                    className="auth__input"
                    value={ password1 }
                    onChange= { handleImputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Ingresar
                </button>
                <hr></hr>
                
                <Link
                    to="/auth/login" 
                    className="link"
                >
                    Ya tienes cuenta?
                </Link>
            </form>
        </>
    )
}
