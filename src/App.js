import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from "./Layout/Footer/Footer.js";
import LandingPage from "./Components/LandingPage/LandingPage";
import * as CONSTANTS from "./Constants/constants";
import SignUp from "./Components/SignUp/SignUp.js";
import Login from "./Components/Login/Login.js";
import Contact from "./Components/Contact/Contact.js";
import Team from "./Components/Team/Team.js";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ChangeForgotPassword from "./Components/Login/ChangeForgotPassword";
import History from "./Components/Utils/History.js";
import AuthContext from "./Components/Context/AuthContext";
import UserContext from "./Components/Context/UserContext";
import Nav from "./Layout/Nav/Nav";
import Programs from "./Components/ProgramsPage/Programs";
import ConnectedUserPage from "./Components/Pages/ConnectedUserPage";
import ConfirmAccount from "./Components/SignUp/ConfirmAccount";
import ProgramInfo from "./Components/ProgramsPage/ProgramInfo";
import ContactConfirmationPage from "./Components/Pages/ContactConfirmationPage";
import FrameworkInfo from "./Components/FrameworkPage/FrameworkInfo";
import AddResourceProgram from "./Components/AddResource/AddResourceProgram";
import AddResourceFramework from "./Components/AddResource/AddResourceFramework";
import Dashboard from "./Components/Admin/Dashboard";
import UsersContainer from "./Components/Admin/Manage/Users/UsersContainer";
import ResourcesContainer from "./Components/Admin/Manage/ResourcesContainer";
import ProgramsContainer from "./Components/Admin/Manage/ProgramsContainer";
import UpdateUserForm from "./Components/Admin/Manage/Users/UpdateUserForm";
import PrivateRoute from "./Components/Security/PrivateRoute";

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

    useEffect(() => {
        console.log(isLogged);
    })

    const landing = () => {
        return(
            <>
                <Nav />
                <Switch>
                    <Route path={CONSTANTS.TEAM} component={Team}/>
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

                            <PrivateRoute path={CONSTANTS.CONNECTED_USER} component ={ConnectedUserPage}/>
                            <PrivateRoute path={CONSTANTS.ADD_RESOURCE_PROGRAM} component ={AddResourceProgram}/>
                            <PrivateRoute path={CONSTANTS.ADD_RESOURCE_FRAMEWORK} component ={AddResourceFramework}/>
                            <PrivateRoute path={CONSTANTS.FRAMEWORK_SINGLE + "/:id+"} component={FrameworkInfo} />
                            <PrivateRoute path={CONSTANTS.PROGRAM_SINGLE + "/:id+"} component={ProgramInfo} />
                            <PrivateRoute path={CONSTANTS.PROGRAMS} component={Programs} />

                            <Route path={CONSTANTS.ADMIN_DASHBOARD} component ={Dashboard}/>
                            <Route path={CONSTANTS.ADMIN_USERS} component ={UsersContainer}/>
                            <Route path={CONSTANTS.ADMIN_UPDATE + "/:id+/:login/:email"} component ={UpdateUserForm}/>
                            <Route path={CONSTANTS.ADMIN_RESOURCES} component ={ResourcesContainer}/>
                            <Route path={CONSTANTS.ADMIN_PROGRAMS} component ={ProgramsContainer}/>

                            <Route path={CONSTANTS.CONTACT_CONFIRMATION} component ={ContactConfirmationPage}/>
                            <Route path={CONSTANTS.CHANGE_PASSWORD + "/:token"} component={ChangeForgotPassword} />
                            <Route path={CONSTANTS.CONFIRM_ACCOUNT + "/:token"} component={ConfirmAccount} />
                            <Route path={CONSTANTS.FORGOT_PASSWORD} component={ForgotPassword}/>
                            <Route path={CONSTANTS.SIGNUP} component={SignUp}/>
                            <Route path={CONSTANTS.LOGIN} component={Login}/>
                            <Route component ={landing} />

                        </Switch>
                    <Footer/>
                </Router>

                </UserContext.Provider>
            </AuthContext.Provider>
        </div>
    );

};

export default App;