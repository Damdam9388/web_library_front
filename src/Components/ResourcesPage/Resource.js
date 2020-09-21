import React from "react";
import "./resource.scss";

const Resource = ({resource}) => {

    return (
        <div className="shadow card p-0 col-md-3 mx-5 mb-5">
            <img className="card-img-top img-fluid" src="https://source.unsplash.com/random/100x70/?programer" alt="random image"/>
            <div className="card-body">
                <span className="badge badge-pill badge-info">{resource.language}</span>
                <span className="badge badge-pill badge-success">{resource.level}</span>
                <br/>
                <p className="card-title text-center h6 pt-4">{resource.resourceName}</p>
                <span className="badge badge-pill badge-primary float-right">by {resource.author}</span>



                <div className="col-md-12 d-flex justify-content-center">
                <a href={resource.url}  className="btn btn-default btn-lg mt-5" target="blank">Link to the tutorial </a>
                </div>

            </div>
        </div>


    );
};
export default Resource;