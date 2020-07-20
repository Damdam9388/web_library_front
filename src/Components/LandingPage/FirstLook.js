import devImg from "../../Images/developer.png";
import {Link} from "react-router-dom";
import * as CONSTANTS from "../../Constants/constants";
import React from "react";

const FirstLook = () => {

    return (
        <>
            <div className="row d-lg-none d-sm-block">
                <div className="col-sm-12">
                    <img className="img-fluid pl-lg-5"
                        src={devImg}
                        alt="cover"/>
                </div>
            </div>


            <div className="row d-none d-lg-inline-flex" style={{height: "100vh"}}>
                <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
                    <img className="img-fluid pl-lg-5"
                        src={devImg}
                        alt="cover"/>
                </div>

                <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                    <span className="font-weight-bold mb-5" style={{fontSize:"3rem", color:"#263246"}}>Your study partner</span>
                    <div className="btn-group d-inline-block mt-lg-5">
                        <Link type="button" className="buttons_landing mr-5" to={CONSTANTS.LOGIN}>Sign in</Link>
                        <Link type="button" className="buttons_landing" to="#">Register</Link>
                    </div>
                </div>

            </div>
        </>
    );

};

export default FirstLook;