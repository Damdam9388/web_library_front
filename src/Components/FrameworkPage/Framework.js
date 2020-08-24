import React from "react";
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";

const Framework = ({framework}) => {

    return (
        <div className="col-md-4 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{framework.frameworkName}</h5>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <a href={framework.docUrl}  className="btn btn-danger">Link to the doc</a><br></br>
                    <Link className="btn btn-danger" to={`${CONSTANTS.FRAMEWORK_SINGLE}${framework['@id']}`}>
                        Go inside the framework
                    </Link><br></br>
                    <Link className="btn btn-danger" to={CONSTANTS.ADD_RESOURCE_FRAMEWORK}>Add resource</Link>
                </div>
            </div>
        </div>
    );
};
export default Framework;