import React, {useState, useEffect, useContext} from "react";
import {getPrograms} from "../../Services/ProgramsServices";
import Program from "./Program";
import {Circle} from "better-react-spinkit";
import { CONNECTED_USER } from "./../../Constants/constants";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "./../../Constants/constants";
import logo from './../../Images/logo.PNG';

const Programs = () => {
    const [programs, setPrograms] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const {username} = useContext(UserContext);

    useEffect(() => {
        getPrograms(config)
            .then((res) => {
                const programsList = res.data["hydra:member"];
                setPrograms(programsList);
                console.log(programsList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div style={{height:"100vh"}}> 
            
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
            
                <div className="card-deck">
                    {loading ? (
                        <Circle />
                    ) : (
                        programs.map((program, index) => {
                            return (
                                <Program key={index} program={program} />
                            );
                        })
                    )}
                </div>
        </div>
    );
};

export default Programs;