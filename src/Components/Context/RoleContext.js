import React from 'react'

//context qui permet de retrouver une valeur de ce context dans l'ensemble des composants react
//qui sont englobés dans ce context
//c'est pourquoi on initialise le context dans App.js au dessus des autres composants
//ce context là permet de créer un context pour savoir quel est le rôle de l'utilisateur connecté
//ainsi, dans un composant, si on veut connaitre le role de l'utilisateur, on peut donc soit faire appel
//au context via ce context, soit faire appel au localStorage
export default React.createContext({
    role:"",
    updateRole: name => {}
});