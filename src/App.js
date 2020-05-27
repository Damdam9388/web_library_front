import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Nav from "./Layout/Nav/Nav.js";
import Header from "./Layout/Header/Header.js";


class App extends Component {
  render = () => {
    return (
      <>
        <Nav />
        <Header />
        
      </>
    );
  };
}

export default App;