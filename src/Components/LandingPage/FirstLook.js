import devImg from "../../Images/developer.png";
import {Link} from "react-router-dom";
import * as CONSTANTS from "../../Constants/constants";
import React from "react";

const FirstLook = () => {
return <div className="row" style={{height: "100vh"}}>
      <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid pl-lg-5"
            style={{marginTop: "5%", marginBottom: "12%", marginRight: "30%", position: "relative"}} src={devImg}
            alt="cover" width="70%"/>
      </div>
      <span className="display-4 font-weight-bold"
            style={{position: "absolute", top: "400px", left: "800px", color: "#263246"}}>Your study partner</span>
      <Link type="button" className="buttons_landing" to={CONSTANTS.LOGIN}
            style={{position: "absolute", top: "550px", left: "830px"}}>Sign in</Link>
      <Link type="button" className="buttons_landing" to="#"
            style={{position: "absolute", top: "550px", left: "1080px"}}>Register</Link>

</div>;
};

export default FirstLook;