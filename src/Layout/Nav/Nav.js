import React, { Component } from 'react';
import "./Nav.scss";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "../../Constants/constants";
import logo from './../../Images/logo.PNG';
import {ABOUT} from "../../Constants/constants";
import {CONTACT} from "../../Constants/constants";


class Nav extends Component {
    render = () => (
      <>
        <div className="navbar navbar-md d-none d-lg-flex p-4 ">
          <div className="navbar-brand">
            <Link className="navbar-brand-link pl-5" to={CONSTANTS.LANDINGPAGE}>
              <img src={logo} alt="logo" width="40%"/>
            </Link>
          </div>
            <ul className="nav">
              <Link className="text-dark font-weight-bold pr-5 about_link" to={ABOUT}>About</Link>
              <Link className="text-dark font-weight-bold pr-5 contact_link" to={CONTACT}>Contact</Link>
            </ul>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none d-sm-inline">
          <div className="navbar-brand">

                  <Link className="d-flex flex-column justify-content-center align-items-center navbar-brand-link pl-2" to={CONSTANTS.LANDINGPAGE}>
                          <img src={logo} alt="logo" width="70%"/>
                  </Link>
          </div>

            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center pt-3">
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>


          <div className="collapse navbar-collapse d-sm-inline" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="text-dark font-weight-bold pr-5 about_link" to={ABOUT}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="text-dark font-weight-bold pr-5 contact_link" to={CONTACT}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link type="button" className="text-dark font-weight-bold pr-5 contact_link" to={CONSTANTS.LOGIN}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link type="button" className="text-dark font-weight-bold pr-5 contact_link" to="#">Register</Link>
              </li>

            </ul>
          </div>
        </nav>
      </>
    );
  }
  
  export default Nav;