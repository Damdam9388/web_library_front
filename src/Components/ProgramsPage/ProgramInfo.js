import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import {Circle} from "better-react-spinkit";
import Resource from "../ResourcesPage/Resource";
import Framework from "../ResourcesPage/Framework";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "./../../Constants/constants";
import logo from './../../Images/logo.PNG';
import { CONNECTED_USER } from "./../../Constants/constants";

const ProgramInfo = ({match}) => {
    const [resources, setResources] = useState();
    const [frameworks, setFramework] = useState();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const [loading, setLoading] = useState(true);
    const idProgram = match.params.id;
    const {username} = useContext(UserContext);

    useEffect(() => {
        getProgramInfo(idProgram, config)
            .then((res) => {
                const resourcesList = res.data.topic.ressources;
                const frameworkList = res.data.frameworks;
                setResources(resourcesList);
                setFramework(frameworkList);
                console.log("les resources :",resourcesList);
                console.log("les frameworks :",frameworkList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div style={{height:"200vh"}}>

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
                        <li className="nav-item active">
                            <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.PROGRAMS}>Programs</Link>
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
            
            <div className="card-deck" style={{marginTop:"20px"}}>

                {loading ? (
                    <Circle />
                ) : (
                    frameworks.map((framework) => {
                        return (
                            <div className="col-md-12">
                                <Framework key ={framework['@id']} framework={framework} />
                            </div>
                        );
                    })
                )};
                {loading ? (
                    <Circle />
                ) : (
                    resources.map((resource) => {
                        return (
                            <div className="col-md-12">
                                <Resource  key={resource['@id']} resource={resource} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default ProgramInfo;