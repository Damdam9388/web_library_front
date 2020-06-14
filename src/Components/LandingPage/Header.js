import React from 'react';
import './Header.scss'
import * as CONSTANTS from "../../Constants/constants";
import {Link} from 'react-router-dom';
import Nav from "../../Layout/Nav/Nav.js";
const Header = () => {
    return(
        <>
            <div className="header row">
                    <div className="col-12 mt-5">
                        <h1 className="text-center mt-5  animate__animated animate__heartBeat">YOUR STUDY PARTNER</h1>
                        <p className=" animate__animated animate__heartBeat">Learn to code in Java, Symfony, React...</p>
                        <Link to={CONSTANTS.LOGIN} className="btn btn-md text-center">GET STARTED</Link>
                    </div>
            </div>
            </>
        );
};
export default Header;
