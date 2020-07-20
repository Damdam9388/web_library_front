import React from 'react';
import './ContactForm.scss'
import Nav from '../../Layout/Nav/Nav.js';

const Contact = ({sendMessage}) => {
    return(
        <>
                <div className="contact">
                    <h1>CONTACT US</h1>
                    <div className="container">
                        <h4>We'd love to hear from you!</h4>
                        <form onSubmit={sendMessage}>
                        <div className="row input-container">
                                <div className="col-xs-12">
                                    <div className="styled-input wide">
                                        <input name ="name" id ="name" type="text" required />
                                        <label>Name</label> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="styled-input">
                                        <input name ="email" id ="email" type="text" required />
                                        <label>Email</label> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="styled-input" style= {{float:'right'}}>
                                        <input name ="subject" id ="subject" type="text" required />
                                        <label>Subject</label> 
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="styled-input wide">
                                        <textarea required name ="message" id ="message"/>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <button className="col-xs-12">
                                    <div className="btn-lrg submit-btn" type="submit">Send Message</div>
                                </button>
                        </div>
                        </form>
                    </div>
                </div>
        </>
    );
};
export default Contact;
