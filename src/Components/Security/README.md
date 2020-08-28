### AdminRoute.js

Il s'agit d'un composant qui privatise les routes pour les admin.

```php
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
```

### PrivateRoute.js

Il s'agit du composant qui privatise les routes pour les users connectés.

```php
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
```

