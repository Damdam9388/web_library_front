import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from "./Layout/Footer/Footer.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import * as CONSTANTS from "./Constants/constants";
import SignUp from "./Components/SignUp/SignUp.js";
import Login from "./Components/Login/Login.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ChangeForgotPassword from "./Components/Login/ChangeForgotPassword";
import History from "./Components/Utils/History.js";
import AuthContext from "./Components/Context/AuthContext";
import UserContext from "./Components/Context/UserContext";
import Nav from "./Layout/Nav/Nav";
import Programs from "./Components/ProgramsPage/Programs";
import ConnectedUserPage from "./Components/Pages/ConnectedUserPage";
import ConfirmAccount from "./Components/SignUp/ConfirmAccount";
import ProgramResources from "./Components/ProgramsPage/ProgramResources";
import ContactConfirmationPage from "./Components/Pages/ContactConfirmationPage";


const App = () => {
    const [isLogged, setLogged] = useState(localStorage.getItem('tokenUser') !== null);
    const [username, setUsername] = useState(localStorage.getItem('userLogin') !== null);
    const contextValue = {
        isLogged:isLogged,
        updateLogged:setLogged
    };

    const userValue = {
        username:username,
        updateUsername:setUsername
    };

    const landing = () => {
        return(
            <>
                <Nav />
                <Switch>
                    <Route path={CONSTANTS.ABOUT} component={About}/>
                    <Route path={CONSTANTS.CONTACT} component={Contact}/>
                    <Route path={CONSTANTS.LANDINGPAGE} component ={LandingPage}/>
                </Switch>
            </>
        )
    };

    return (
        <div className="container">
            <AuthContext.Provider value={contextValue}>
                <UserContext.Provider value={userValue}>
                <Router history={History}>

                        <Switch>
                            <Route path = {CONSTANTS.PROGRAM_SINGLE + "/:id+"} component={ProgramResources}/>
                            <Route path = {CONSTANTS.PROGRAMS} component={Programs}/>
                            <Route path={CONSTANTS.CHANGE_PASSWORD + "/:token"} component={ChangeForgotPassword}/>
                            <Route path={CONSTANTS.CONFIRM_ACCOUNT + "/:token"} component={ConfirmAccount} />
                            <Route path={CONSTANTS.FORGOT_PASSWORD} component={ForgotPassword}/>
                            <Route path={CONSTANTS.SIGNUP} component={SignUp}/>
                            <Route path={CONSTANTS.LOGIN} component={Login}/>
                            <Route path={CONSTANTS.CONNECTED_USER} component ={ConnectedUserPage}/>
                            <Route path={CONSTANTS.CONTACT_CONFIRMATION} component ={ContactConfirmationPage}/>
                            <Route path={CONSTANTS.ADD_RESOURCE} component ={ContactConfirmationPage}/>
                            <Route component ={landing}/>
                        </Switch>
                    <Footer/>
                </Router>

                </UserContext.Provider>
            </AuthContext.Provider>
        </div>
    );

};

export default App;