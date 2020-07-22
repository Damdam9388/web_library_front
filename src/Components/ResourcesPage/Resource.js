import React from "react";

const Resource = ({resource}) => {
    return (
        <>
        <div className="col-md-4 card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title text-center">{resource.resourceName}</h5>
                    <p className="pt-2">Langue : {resource.language}</p>
                    <p className="pt-2">Auteur : {resource.author.authorName}</p>
                    <p className="pt-2">Niveau : {resource.level.levelName}</p>
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <a href={resource.url}  className="btn btn-primary">Lien vers le tutoriel</a>
                    </div>
                    <span className="float-right mt-3">publié par : {resource.publisher.login}</span>


                </div>
        </div>

            </>

    );
};
export default Resource;