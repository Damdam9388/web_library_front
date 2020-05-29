import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from "./Layout/Nav/Nav.js";
import Footer from "./Layout/Footer/Footer.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import * as CONSTANTS from "./constants";
import Login from "./Components/Login/Login.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import History from "./Components/Utils/History.js";
import AuthContext from "./Components/Context/AuthContext";
import UserContext from "./Components/Context/UserContext";

const App = () => {
    const [isLogged, setLogged] = useState(localStorage.getItem('tokenUser') !== null);
    const [username, setUsername] = useState(localStorage.getItem('username') !== null);
    const contextValue = {
        isLogged:isLogged,
        updateLogged:setLogged
    };

    const userValue = {
        username:username,
        updateUsername:setUsername
    };

    return (
        <AuthContext.Provider value={contextValue}>
            <UserContext.Provider value={userValue}>
            <Router history={History}>
                <Nav logoTitle="WEBSTER"/>
                <div>
                    <Switch>
                        <Route path={CONSTANTS.LOGIN} component={Login}/>
                        <Route path={CONSTANTS.ABOUT} component={About}/>
                        <Route path={CONSTANTS.CONTACT} component={Contact}/>
                        <Route path={CONSTANTS.LANDINGPAGE} component ={LandingPage}/>
                    </Switch>
                </div>
            </Router>
            <Footer/>
            </UserContext.Provider>
        </AuthContext.Provider>

    );

};

export default App;