import React, { Component } from "react";
import Programs from "./Programs.js";
import Goals from "./Goals.js";
import Header from "./Header.js";
import Nav from "../../Layout/Nav/Nav.js";
class LandingPage extends Component {
  render = () => {
    return (
        <>
        <Nav />
            <Header />
            <Goals />
            <Programs />
        </>
    );
  };
}

export default LandingPage;