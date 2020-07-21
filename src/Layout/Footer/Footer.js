import React, { Component } from 'react';
import './Footer.scss';
import facebook from './../../Images/facebook-round-color.png';
import instagram from './../../Images/instagram-round-color.png';
import twitter from './../../Images/twitter-round-color.png';
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";

class Footer extends Component{
    render = ()=> {
        return(
            <div>
                <div className="row text-center">
                    <div className="col-md-3 pt-5" style={{backgroundColor: "#263246"}}>
                        <h3 className="text-white font-weight-bold">Webster</h3>
                        <span className="text-white-50">We create possibilities <br/> for everyone</span>
                    </div>

                    <div className="col-md-3 text-white pt-5" style={{backgroundColor: "#263246"}}>
                        <h3 className="text-white mb-3 h5">Explore</h3>
                        <Link to={CONSTANTS.LANDINGPAGE} className="text-white-50">Landing Page</Link> <br/>
                        <Link to="#" className="text-white-50">About</Link>
                    </div>

                    <div className="col-md-3 pt-5" style={{backgroundColor: "#263246"}}>
                        <h3 className="mb-3 text-white h5">Visit</h3>
                        <address className="text-white-50">
                            Groupe 5 HOC <br/>
                            Le CNAM <br/>
                            4, rue Ravier <br/>
                            69007 LYON
                        </address>
                    </div>

                    <div className="col-md-3 pt-5" style={{backgroundColor: "#263246"}}>
                        <h3 className="mb-3 text-white h5">Legal</h3>
                            <a href="#" className="text-white-50">Terms</a> <br/>
                            <a href="#" className="text-white-50">Privacy</a>
                    </div>
                </div>

                <div className="row follow_links pt-5" style={{backgroundColor: "#263246"}}>
                    <div className="col-md-12 text-center">
                        <a href="http://facebook.com"><img src={facebook} alt="facebook_link" className="facebook_link"/></a>
                        <a href="http://instagram.com"><img src={instagram} alt="instagram_link" className="instagram_link"/></a>
                        <a href="http://twitter.com"><img src={twitter} alt="twitter_link" className="twitter_link"/></a>
                    </div>
                </div>

                <div className="row condition pb-2 pt-3 pb-3" style={{backgroundColor: "#263246"}}>
                    <div className="col-md-12 text-center">
                        <span className="general-condition text-white">© 2020 Webster Inc. All rights reserved.</span>
                    </div>
                </div>
            </div>

        );
    };
}

export default Footer;