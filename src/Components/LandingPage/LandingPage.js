import React, { Component } from "react";
import "./landing.scss";
import FirstLook from "./FirstLook";
import Presentation from "./Presentation";
import CarousselPrograms from "./CarousselPrograms";

const LandingPage = () => {

    return (
        <>
            <div className="wrap">
                <FirstLook/>

                <Presentation/>

                <CarousselPrograms/>
            </div>
        </>
    );
}

export default LandingPage;