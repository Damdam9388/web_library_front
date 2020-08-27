import React, {useContext} from "react";
import { Route, Redirect} from "react-router-dom";
import AuthContext from "../Context/AuthContext";

//il s'agit du composant qui privatise les routes pour les admin
const AdminRoute = ({ component: Component, ...rest }) => {
    const {isLogged}= useContext(AuthContext);
    const role = localStorage.getItem('userRole');

    return (
        <Route
            {...rest}
            render={(props) =>
                //si isLogged = true et que la variable role du localeStorage affiche ROLE_ADMIN
                //alors on peut accéder aux composants définis par les routes nommées AdminRoute
                isLogged && role === 'ROLE_ADMIN' ? (
                    <Component {...props} />
                ) : (
                    //si isLogged = false (par cascade si isLogged = false on est renvoyé à la page de Login)
                    // ou si role != ROLE_ADMIN alors on est redirigé sur la connectedUserPage
                    <Redirect
                        to={{
                            pathname: "/Logged-In",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
export default AdminRoute;