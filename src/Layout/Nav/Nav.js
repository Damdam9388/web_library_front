import React, { Component } from 'react';
import "./Nav.scss";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "../../Constants/constants";
import logo from './../../Images/logo-via-logohub.png';
import {ABOUT} from "../../Constants/constants";
import {CONTACT} from "../../Constants/constants";


class Nav extends Component {
    render = () => (
              <div className="navbar navbar-md p-4">
                <div className="navbar-brand">
                  <Link className="navbar-brand-link pl-5" to={CONSTANTS.LANDINGPAGE}>
                    <img src={logo} alt="logo" width="40%"/>
                  </Link>
                </div>
                  <ul className="nav">
                    <li className="nav-item dropdown">
                      
                      <Link className="nav-link dropdown-toggle" to={CONSTANTS.PROGRAMMINGLANGUAGE} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROGRAMMING LANGUAGE
                      </Link>
                      
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/">Java</a>
                        <a className="dropdown-item" href="/">PHP</a>
                        <a className="dropdown-item" href="/">JavaScript</a>
                        <a className="dropdown-item" href="/">HTML/CSS/Bootstrap</a>
                        <a className="dropdown-item" href="/">JavaScript</a>
                        <a className="dropdown-item" href="/">MySQL</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown menu">
                      <Link className="nav-link dropdown-toggle" to={CONSTANTS.FRAMEWORK} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      FRAMEWORK
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/">Spring</a>
                        <a className="dropdown-item" href="/">Symfony</a>
                        <a className="dropdown-item" href="/">React</a>
                      </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={CONSTANTS.CONTACT}>CONTACT</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to={CONSTANTS.ABOUT}>ABOUT</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to={CONSTANTS.LOGIN}>LOGIN</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={CONSTANTS.SIGNUP}>SIGNUP</Link>
                    </li>
                  </ul>
                </div>

    );
  }
  
  export default Nav;