import React from 'react';
import {Link} from "react-router-dom";
import {ADMIN_UPDATE_PROGRAM} from "../../../../Constants/constants";

const UpdateProgram = ({program}) => {

    return (
        <Link className="btn btn-outline-danger" to={`${ADMIN_UPDATE_PROGRAM}${program['@id']}/${program.programName}`}>Update</Link>
    );
};

export default UpdateProgram;