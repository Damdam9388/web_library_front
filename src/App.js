import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from "./Layout/Nav/Nav.js";
import Footer from "./Layout/Footer/ConditionGeneral.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import * as CONSTANTS from "./constants";
import Login from "./Components/Login/Login.js";
import History from "./Components/Utils/History.js";
import Header from "./Components/Header/Header.js";

class App extends Component {
  render = () => {
    return (
      <>
      
        <div>
          <Router history={History}>
              <Nav logoTitle="WEBSTER"/>
              <div>
                <Switch>
                    <Route path={CONSTANTS.LOGIN} component={Login}/>
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