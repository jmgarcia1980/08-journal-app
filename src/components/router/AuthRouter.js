import React from 'react';
// import { Redirect, Route, Switch } from 'react-router';
import {
    Switch,
    Route,
    Redirect
    } from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component= { LoginScreen }
                    />
                    <Route
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    />

                    <Route>
                        <Redirect to="/auth/login" />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
