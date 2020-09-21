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
            <div style={{background:"linear-gradient(to right, #457fca, #5691c8)", width:"100%"}}>
                <div className="row text-center" >
                    <div className="col-md-3 pt-5 px-0">
                        <h3 className="text-white font-weight-bold px-0">Webster</h3>
                        <span className="text-white-50 px-0">We create possibilities <br/> for everyone</span>
                    </div>

                    <div className="col-md-3 text-white pt-5 px-0">
                        <h3 className="text-white mb-3 h5 px-0">Explore</h3>
                        <Link to={CONSTANTS.LANDINGPAGE} className="text-white-50">Landing Page</Link> <br/>
                    </div>

                    <div className="col-md-3 pt-5 px-0">
                        <h3 className="mb-3 text-white h5 px-0">Visit</h3>
                        <address className="text-white-50 px-0">
                            Groupe 5 HOC <br/>
                            Le CNAM <br/>
                            4, rue Ravier <br/>
                            69007 LYON
                        </address>
                    </div>

                    <div className="col-md-3 pt-5 px-0">
                        <h3 className="mb-3 text-white h5 px-0">Legal</h3>
                            <a href="https://www.termsfeed.com/blog/privacy-policies-vs-terms-conditions/" className="text-white-50 px-0">Terms</a> <br/>
                            <a href="https://www.freeprivacypolicy.com/blog/privacy-policy-vs-terms-conditions/" className="text-white-50 px-0">Privacy</a>
                    </div>
                </div>

                <div className="row follow_links pt-5 px-0">
                    <div className="col-md-12 text-center px-0">
                        <a href="http://facebook.com"><img src={facebook} alt="facebook_link" className="facebook_link px-0"/></a>
                        <a href="http://instagram.com"><img src={instagram} alt="instagram_link" className="instagram_link px-0"/></a>
                        <a href="http://twitter.com"><img src={twitter} alt="twitter_link" className="twitter_link px-0"/></a>
                    </div>
                </div>

                <div className="row condition pb-2 pt-3 pb-3 px-0">
                    <div className="col-md-12 text-center px-0">
                        <span className="general-condition text-white px-0">© 2020 Webster Inc. All rights reserved.</span>
                    </div>
                </div>
            </div>

        );
    };
}

export default Footer;