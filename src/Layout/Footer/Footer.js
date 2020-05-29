import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component{
    render = ()=> {
        return(
            <div className="footer">
                <div className="condition">
                    <span className="general-condition">© 2020 Webster Inc. All rights reserved.</span>
                </div>
            </div>

        );
    };
}

export default Footer;