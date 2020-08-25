import React, { Component } from 'react';
import "./Nav.scss";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "../../Constants/constants";
import logo from './../../Images/logo.PNG';
import {TEAM} from "../../Constants/constants";
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
              <Link className="text-dark font-weight-bold pr-5 about_link" to={TEAM}>Team</Link>
              <Link className="text-dark font-weight-bold pr-5 contact_link" to={CONTACT}>Contact</Link>
            </ul>
        </div>

      </>
    );
  }
  
  export default Nav;