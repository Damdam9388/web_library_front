import React, { Component } from 'react';

class Nav extends Component {
    render = () => (
        <nav id="menu" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">WEBSTER</a>
        <div id="items" class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PROGRAMS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Java</a>
                <a class="dropdown-item" href="#">PHP</a>
                <a class="dropdown-item" href="#">JavaScript</a>
                <a class="dropdown-item" href="#">HTML/CSS/Bootstrap</a>
                <a class="dropdown-item" href="#">JavaScript</a>
                <a class="dropdown-item" href="#">MySQL</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                FRAMEWORKS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Spring</a>
                <a class="dropdown-item" href="#">Symfony</a>
                <a class="dropdown-item" href="#">React</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LOGIN</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;