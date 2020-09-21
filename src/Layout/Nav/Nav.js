import React, { Component } from 'react';
import "./Nav.scss";
import { Link } from 'react-router-dom';
import * as CONSTANTS from "../../Constants/constants";
import logo from './../../Images/logo-via-logohub(1).png';
import { TEAM } from "../../Constants/constants";
import { CONTACT } from "../../Constants/constants";

class Nav extends Component {
  render = () => (


      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{minHeight: "5rem", background:"linear-gradient(to right, #457fca, #5691c8)"}}>
        <div className="navbar-brand">
            <Link className="navbar-brand-link pl-5" to={CONSTANTS.LANDINGPAGE}>
               <img src={logo} alt="logo" width="25%" />
             </Link>
            <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
        </div>


        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item mr-3">
              <Link className="nav-link text-white font-weight-bold" to={TEAM}>Team</Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link text-white font-weight-bold" to={CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;