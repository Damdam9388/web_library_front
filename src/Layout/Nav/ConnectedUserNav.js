import React, {useState} from 'react';
import "./Nav.scss";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "./../../Constants/constants";
import logo from './../../Images/logo.PNG';
import { CONNECTED_USER } from "../../Constants/constants";

const ConnectedUserNav = () => {

    const [username] = useState(localStorage.getItem('userLogin'));


    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className= "pr-5" src={logo} alt="logo" width="15%"/>    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONNECTED_USER}>Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.PROGRAMS}>Programs</Link>
                </li>
                <li className="nav-item active">
                    <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.CONTACT}>Contact us</Link>
                </li>
                <li className="nav-item">
                    <Link className="text-dark font-weight-bold pr-5 nav-link" onClick={() => localStorage.clear()}  to={CONSTANTS.LOGIN}>Logout</Link>
                </li>
            </ul>
                <span className="navbar-text font-weight-bold">
                    Welcome {username}
                </span>
            </div>
        </nav>
    </>
    );
}

export default ConnectedUserNav;