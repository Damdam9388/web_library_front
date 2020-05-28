import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from "./Layout/Nav/Nav.js";
import Footer from "./Layout/Footer/ConditionGeneral.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import * as CONSTANTS from "./contants";
import Login from "../Components/Login/Login.js";
import History from "../Components/Utils/History.js";

class App extends Component {
  render = () => {
    return (
      <>
      <Nav logoTitle="WEBSTER"/>
        <div>
          <Router history={History}>
              <div className>
                <Switch>
                    <Route path={CONSTANTS.LANDINGPAGE} component ={LandingPage}/>
                    <Route path={CONSTANTS.LOGIN} component={Login}/>
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