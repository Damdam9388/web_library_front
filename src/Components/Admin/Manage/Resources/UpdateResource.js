import React from 'react';
import {Link} from "react-router-dom";
import {ADMIN_UPDATE_RESOURCE} from "../../../../Constants/constants";

const UpdateResource = ({resource}) => {
    return (
        <Link className="btn btn-outline-danger" to={`${ADMIN_UPDATE_RESOURCE}${resource['@id']}`}>Update</Link>
    );
};
export default UpdateResource;