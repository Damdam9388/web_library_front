import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import './ConnectedUserPage.scss';
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";

const ConnectedUserPage = ()=>{
    //Récupération du nom du user connecté
    const {username} = useContext(UserContext);

    return(
        <div className="wrap" style={{height:"100vh"}}>

            <ConnectedUserNav username={username} />
            <h2 className="text-uppercase">Welcome back! We're glad your here.</h2>
            <p className="lead">You have recently consulted the followings programs : </p>

        </div>
        
    );
}
    


export default ConnectedUserPage;