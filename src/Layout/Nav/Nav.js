import React, { Component } from 'react';
import "./Nav.scss";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "../../constants";


class Nav extends Component {
    render = () => (
      <div className="container-fluid banner navbar-fixed-top">
        <div className="row">
            <div className="col-md-12 background">
              <div className="navbar navbar-md">
                <div className="navbar-brand">
                  <Link className="navbar-brand-link" to={CONSTANTS.LANDINGPAGE}>WEBSTER</Link>
                </div>
                  <ul className="nav">
                    <li className="nav-item dropdown">
                      
                      <Link className="nav-link dropdown-toggle" to={CONSTANTS.PROGRAMMINGLANGUAGE} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROGRAMMING LANGUAGE
                      </Link>
                      
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Java</a>
                        <a className="dropdown-item" href="#">PHP</a>
                        <a className="dropdown-item" href="#">JavaScript</a>
                        <a className="dropdown-item" href="#">HTML/CSS/Bootstrap</a>
                        <a className="dropdown-item" href="#">JavaScript</a>
                        <a className="dropdown-item" href="#">MySQL</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown menu">
                      <Link className="nav-link dropdown-toggle" to={CONSTANTS.FRAMEWORK} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      FRAMEWORKS
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Spring</a>
                        <a className="dropdown-item" href="#">Symfony</a>
                        <a className="dropdown-item" href="#">React</a>
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
            </div>
          </div>
      </div>
    );
  }
  
  export default Nav;