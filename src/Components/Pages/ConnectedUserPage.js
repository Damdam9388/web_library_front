import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom';
import { CONNECTED_USER } from "../../Constants/constants";
import './ConnectedUserPage.scss';
import * as CONSTANTS from "../../Constants/constants";
import logo from './../../Images/logo.PNG';

const ConnectedUserPage = ()=>{
    //Récupération du nom du user connecté
    const {username} = useContext(UserContext);

    return(
        <div className="wrap" style={{height:"100vh"}}>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className= "pr-5" src={logo} alt="logo" width="15%"/>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONNECTED_USER}>Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONNECTED_USER}>Programs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.LOGIN}>Logout</Link>
                    </li>
                </ul>
                    <span className="navbar-text font-weight-bold">
                        Welcome {username}
                    </span>
                </div>
            </nav>
            <h2 className="text-uppercase">Welcome back! We're glad your here.</h2>
            <p className="lead">You have recently consulted the followings programs : </p>

        </div>
        
    );
}
    


export default ConnectedUserPage;