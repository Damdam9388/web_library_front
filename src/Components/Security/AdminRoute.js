import React, {useContext} from "react";
import { Route, Redirect} from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
    const {isLogged}= useContext(AuthContext);
    const role = localStorage.getItem('userRole');

    return (
        <Route
            {...rest}
            render={(props) =>
                isLogged && role === 'ROLE_ADMIN' ? (
                    <Component {...props} />
                ) : (
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