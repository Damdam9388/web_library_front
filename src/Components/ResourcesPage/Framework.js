import React from "react";
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";

const Framework = ({resource, index}) => {

    return (
        <div className="col-md-4 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{resource.topic.programmingLanguage.frameworks[index]['frameworkName']}</h5>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <a href={resource.topic.programmingLanguage.frameworks[index]['docUrl']}  className="btn btn-primary">Link to the doc</a><br></br>
                    <Link className="btn btn-primary" to={`${CONSTANTS.FRAMEWORK_SINGLE}${resource.topic.programmingLanguage.frameworks[index].topic['@id']}`}>
                        Go inside the framework
                    </Link><br></br>
                    <Link className="btn btn-primary" to={CONSTANTS.ADD_RESOURCE}>Add resource</Link>
                </div>
            </div>
        </div>
    );
};
export default Framework;