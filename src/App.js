import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Nav from "./Layout/Nav/Nav.js";
import Header from "./Layout/Header/Header.js";
import Programs from "./Layout/Programs/Programs.js";
import Footer from "./Layout/Footer/ConditionGeneral.js";
import Goals from "./Layout/Goals/Goals.js";

class App extends Component {
  render = () => {
    return (
      <>
        <Nav logoTitle="Webster"/>
        <Header title="Your online study partner" button="Register for free"/>
        <Programs />
        <Goals />
        <Footer />
        
      </>
    );
  };
}

export default App;