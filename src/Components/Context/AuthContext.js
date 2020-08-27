import React from 'react'

//context qui permet de retrouver une valeur de ce context dans l'ensemble des composants react
//qui sont englobés dans ce context
//c'est pourquoi on initialise le context dans App.js au dessus des autres composants
//ce context là permet de créer un context pour savoir si l'utilisateur est login successfully
//ainsi, dans un composant, si "isLogged" est à true alors l'utilisateur est login successfully
export default React.createContext({
    isLogged: "",
    updateLogged: name => {},
    username:"",
    hasUsername: name => {}
});