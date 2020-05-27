import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Nav from "./Layout/Nav/Nav.js";
import Footer from "./Layout/Footer/ConditionGeneral.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import * as CONSTANTS from "./contants";

class App extends Component {
  render = () => {
    return (
      <>
      <Nav logoTitle="Webster"/>
        <div>
          <Router>
            <div className>
              <Switch>
                  <Route path={CONSTANTS.LANDINGPAGE} component ={LandingPage}/>
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </>
    );
  };
}

export default App;