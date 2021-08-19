import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">
                Registrar
            </h3>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"           
                    className="auth__input"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"                
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Passwod"
                    name="password" 
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm Pw"
                    name="password2" 
                    className="auth__input"
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
