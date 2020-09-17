import React from "react";
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";

const Resource = ({resource}) => {

    return (
        <div className="col-md-4 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{resource.resourceName}</h5>
                <p className="pt-2">Language : {resource.language}</p>
                <p className="pt-2">Author : {resource.author}</p>
                <p className="pt-2">Level : {resource.level}</p>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <a href={resource.url}  className="btn btn-primary" target="blank">Link to the tutorial </a>
                </div><br/>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <Link className="btn btn-primary" to={`${CONSTANTS.ADD_RESOURCE_PROGRAM}/${false}`}>Add resource</Link>
                </div><br/>
                <span className="float-right mt-3">published by : {resource.publisher}</span>
            </div>
        </div>


    );
};
export default Resource;