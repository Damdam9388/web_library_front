import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";


//PrivateRoute sert à vérifier si l'utilisateur est bien connecté qd il veut accéder aux programmes, si il est pas connecté il l'envoit à la page de login pour se connecter
function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
            }
        />
    );
}

export default PrivateRoute;