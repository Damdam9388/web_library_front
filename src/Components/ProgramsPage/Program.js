import React, {useState, useEffect} from "react";

const Program = ({program}) => {
    return(

        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title text-center">{program.programName}</h5>
                <a href="/" className="btn btn-primary">
                    Go inside the program
                </a>
            </div>
        </div>
    );
}
export default Program;