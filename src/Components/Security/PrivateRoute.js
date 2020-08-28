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
                isLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect
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