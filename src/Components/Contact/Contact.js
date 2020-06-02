import React, {Component}from 'react';
import './Contact.scss'
import Nav from '../../Layout/Nav/Nav.js';

const Contact = () => {
    return(
        <>
        <Nav />
                <div className="contact">
                    <h1>CONTACT US</h1>
                    <div class="container">
                        <h4>We'd love to hear from you!</h4>
                        
                        <div class="row input-container">
                                <div class="col-xs-12">
                                    <div class="styled-input wide">
                                        <input type="text" required />
                                        <label>Name</label> 
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="styled-input">
                                        <input type="text" required />
                                        <label>Email</label> 
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="styled-input" style= {{float:'right'}}>
                                        <input type="text" required />
                                        <label>Subject</label> 
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="styled-input wide">
                                        <textarea required></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="btn-lrg submit-btn">Send Message</div>
                                </div>
                        </div>
                    </div>
                </div>
        </>
        );
};
export default Contact;
