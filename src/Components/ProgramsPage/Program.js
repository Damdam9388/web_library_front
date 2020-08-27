import React from "react";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "./../../Constants/constants";
// affiche chaque program individuellement en récupérant les données de chaque program de la liste programs
const Program = ({program}) => {

    return(
        
        <div className="col-md-4 card" style={{ width: "18rem", marginTop:"250px", height:"150px"}}>
            <div className="card-body">
                {/*on affiche le nom du program*/}
                <h5 className="card-title text-center">{program.programName}</h5>
                <div className="text-center">
                {/*
                on place un lien qui va pointer sur un composant qui affiche les ressources(tutoriels et framework
                du program. Pour ce faire la route vers ce composant implique une url qui contient l'id Hydra (donc unique d'un objet JSON-LD)
                du program en question et pointe vers le composant ProgramInfo
                */}
                <Link className="btn btn-primary" to={`${CONSTANTS.PROGRAM_SINGLE}${program["@id"]}`}>
                    Go inside the program
                </Link>
                </div>
            </div>
        </div>
    );
}
export default Program;