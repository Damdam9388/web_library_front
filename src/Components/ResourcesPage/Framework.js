import React from "react";

const Framework = ({resource, index}) => {
    return (
        <div className="col-md-4 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title text-center">{resource.topic.programmingLanguage.frameworks[index]['frameworkName']}</h5>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <a href={resource
                        .topic.programmingLanguage.frameworks[index]['docUrl']}  className="btn btn-primary">Lien vers la doc</a>
                </div>
            </div>
        </div>
    );
}
export default Framework;