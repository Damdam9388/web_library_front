import React, { Component } from "react";
import Programs from "./Programs.js";
import Goals from "./Goals.js";
import Header from "./Header.js";

class LandingPage extends Component {
  render = () => {
    return (
        <>
            <Header />
            <Goals />
            <Programs/>
            
        </>
    );
  };
}

export default LandingPage;