import React, { Component } from "react";
import Programs from "./Programs.js";
import Goals from "./Goals.js";



class LandingPage extends Component {
  render = () => {
    return (
        <>
            <Programs/>
            <Goals />
        </>
    );
  };
}

export default LandingPage;