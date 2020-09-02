import React from 'react';
import UpdateResource from "./UpdateResource";
import {ENDPOINT_ADD_RESOURCE} from "../../../../Constants/UrlConstants";
import DeleteItem from "../DeleteItem";

const ResourceTable = ({resource}) => {
    return (
        <>
            {console.log(resource)}
            <tr>
                <th scope="row">{resource.id}</th>
                <td>{resource.resourceName}</td>
                <td>{resource.url}</td>
                <td>{resource.author.authorName}</td>
                <td>{resource.language}</td>
                <td>{resource.level.levelName}</td>
                <td>{resource.publisher.login}</td>
                <td><UpdateResource resource={resource} /> </td>
                <td> <DeleteItem item={resource} endpoint={ENDPOINT_ADD_RESOURCE}/> </td>
            </tr>
        </>
    );
};

export default ResourceTable;
