import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom';
import { CONNECTED_USER } from "../../Constants/constants";
import './ConnectedUserPage.scss';
import * as CONSTANTS from "../../Constants/constants";
import logo from './../../Images/logo.PNG';

const ConnectedUserPage = ()=>{
    //Récupération du nom du user connecté
    const {username} = useContext(UserContext);

    return(
        <div> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className= "pr-5" src={logo} alt="logo" width="15%"/>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONNECTED_USER}>Home</Link>
                    </li>
                    <li className="nav-item dropdown pr-5 text-dark font-weight-bold">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Programs
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>JavaScript</Link>
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>Java</Link>
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>PHP</Link>
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>Symfony</Link>
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>Laravel</Link>
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>Spring</Link>
                            <Link className="text-dark font-weight-bold nav-link" to={CONNECTED_USER}>React</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.LOGIN}>Logout</Link>
                    </li>
                </ul>
                    <span className="navbar-text font-weight-bold">
                        Welcome {username}
                    </span>
                </div>
            </nav>
            <h2 className="text-uppercase">Welcome back! We're glad your here.</h2>
            <p className="lead">You have recently consulted the followings programs : </p>

            {/* <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap">
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap">
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p claclassNamess="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap">
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            </div> */}
        </div>
        
    );
}
    


export default ConnectedUserPage;