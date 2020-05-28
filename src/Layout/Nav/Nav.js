import React, { Component } from 'react';
import "./Nav.scss";

class Nav extends Component {
    render = () => (
      <div className="container-fluid banner">
        <div className="row">
            <div className="col-md-12">
              <div className="navbar navbar-md">
                <div className="navbar-brand">WEBSTER</div>
                  <ul className="nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROGRAMMING LANGUAGE
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Java</a>
                        <a className="dropdown-item" href="#">PHP</a>
                        <a className="dropdown-item" href="#">JavaScript</a>
                        <a className="dropdown-item" href="#">HTML/CSS/Bootstrap</a>
                        <a className="dropdown-item" href="#">JavaScript</a>
                        <a className="dropdown-item" href="#">MySQL</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      FRAMEWORKS
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Spring</a>
                        <a className="dropdown-item" href="#">Symfony</a>
                        <a className="dropdown-item" href="#">React</a>
                      </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">LOGIN</a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="col-md-6 offset-md-3 info">
                <h1 className="text-center">Your study partner</h1>
                <p>Learn to code in Java, Symfony, React...</p>
                <a href="#" className="btn btn-md text-center">GET STARTED</a>
            </div>
          </div>
      </div>
    );
  }
  
  export default Nav;