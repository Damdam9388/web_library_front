import React, {useContext} from "react";
import { Route, Redirect} from "react-router-dom";
import AuthContext from "../Context/AuthContext";
//il s'agit du composant qui privatise les routes pour les users connectés
const PrivateRoute = ({ component: Component, ...rest }) => {
    const {isLogged}= useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                //si isLogged = true alors on à accès aux routes définies comme PrivateRoute
                isLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        //sinon on est redirigé sur la page de login
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;