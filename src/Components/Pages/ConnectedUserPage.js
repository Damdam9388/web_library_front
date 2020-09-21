import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import './ConnectedUserPage.scss';
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import img1 from "../../Images/dev9.jpg";


const ConnectedUserPage = ()=>{
    //Récupération du nom du user connecté
    const {username} = useContext(UserContext);

    return(
        <div className="wrap" style={{height:"100vh"}}>
            <ConnectedUserNav username={username} />
            <img src={img1} alt="img1"/>
            <h2 className="text-uppercase d-inline-block mt-lg-5">Welcome back, We're glad your here !</h2>
        </div>
        
    );
}
    


export default ConnectedUserPage;