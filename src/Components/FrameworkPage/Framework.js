import React, {useState} from "react";
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";
//affiche les framework individuellement en recupérant le state frameworks de ProgramInfo.js
const Framework = ({framework}) => {


    return (
        <div className="col-md-4 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{framework.frameworkName}</h5>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <a href={framework.docUrl}  className="btn btn-primary" target="blank">Link to the doc</a><br/>
                    {/*
                    on pointe a la manière program.js vers le composant frameworkInfo.js en passant
                    l'id hydra dans l'url pour récupérer les ressources du framework
                    */}
                    <Link className="btn btn-primary" to={`${CONSTANTS.FRAMEWORK_SINGLE}${framework['@id']}`}>
                        Go inside the framework
                    </Link><br/>
                    <Link className="btn btn-primary" to={`${CONSTANTS.ADD_RESOURCE_FRAMEWORK}/${true}`}>Add resource</Link>
                </div>
            </div>
        </div>
    );
};
export default Framework;