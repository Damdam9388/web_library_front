import React from 'react'

export default React.createContext({
    isLogged: "",
    updateLogged: name => {},
    username:"",
    hasUsername: name => {}
});