import React from 'react';
import {Link} from "react-router-dom";

const UpdateItem = ({item, endpoint}) => {
    return (
        <Link className="btn btn-outline-danger" to={`${endpoint}${item['@id']}`}>Update</Link>
    );
};

export default UpdateItem;