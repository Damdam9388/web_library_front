import React, { Component } from "react";
import Header from "./Header.js";
import Programs from "./Programs.js";
import Goals from "./Goals.js";



class LandingPage extends Component {
  render = () => {
    return (
        <>
            <Header title="Your online study partner" button="Register for free"/>
            <Programs/>
            <Goals />
        </>
    );
  };
}

export default LandingPage;