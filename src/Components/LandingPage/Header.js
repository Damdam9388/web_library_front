import React, {Component}from 'react';
import './Header.scss'

const Header = () => {
    return(
            <div className="header row">
                    <div className="col-12 mt-5">
                        <h1 className="text-center mt-5">YOUR STUDY PARTNER</h1>
                        <p>Learn to code in Java, Symfony, React...</p>
                        <a href="#" className="btn btn-md text-center">GET STARTED</a>
                    </div>
            </div>
        );
};
export default Header;
