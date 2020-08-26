import React from 'react';
import {Link} from "react-router-dom";
import {ADMIN_UPDATE} from "../../../../Constants/constants";

const UpdateUser = ({user}) => {

    return (
        <Link className="btn btn-outline-danger" to={`${ADMIN_UPDATE}${user['@id']}/${user.login}/${user.email}`}>Update</Link>
    );
};
export default UpdateUser;