### Contexte

Le contexte de React permet de partager des informations avec n'importe quel composant, en le stockant dans un endroit central et en permettant l'accès à n'importe quel composant qui le demande.


==> Il qui permet de retrouver une valeur de ce context dans l'ensemble des composants react, qui sont englobés dans ce context.
==> C'est pourquoi on initialise le context dans App.js au dessus des autres composants

#### AuthContext.js

Il permet de créer un context pour savoir si l'utilisateur est login successfully, si "isLogged" est à true alors l'utilisateur est login successfully.

```php
export default React.createContext({
    isLogged: "",
    updateLogged: name => {},
    username:"",
    hasUsername: name => {}
});
```

#### RoleContext.js

Ce context là permet de créer un context pour savoir quel est le rôle de l'utilisateur connecté.
Ainsi, dans un composant, si on veut connaitre le role de l'utilisateur, on peut donc soit faire appel, au context via ce dernier, soit faire appel au localStorage.

```php
export default React.createContext({
    role:"",
    updateRole: name => {}
});
```

#### UserContext.js

Ce context là permet de créer un context pour savoir quel est le login de l'utilisateur connecté.
Ainsi, dans un composant, si on veut connaitre le login de l'utilisateur, on peut donc soit faire appel au context via ce context, soit faire appel au localStorage.
