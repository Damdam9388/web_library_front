import React from "react";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "./../../Constants/constants";

// affiche chaque program individuellement en récupérant les données de chaque program de la liste programs
const Program = ({program}) => {

    return(

        <div className="col-md-4">
            <div className="card" style={{width:"18rem", margin:"0 3rem", height:"150px", marginBottom:"1rem"}}>
                <div className="card-body">

                    <h5 className="card-title text-center">{program.programName}</h5>
                    <div className="text-center">
                        <Link className="btn btn-primary" to={`${CONSTANTS.PROGRAM_SINGLE}${program["@id"]}`}>
                            Go inside the program
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Program;