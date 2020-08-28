import React from 'react';
import UpdateResource from "./UpdateResource";
import DeleteResource from "./DeleteResource";

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
                <td><UpdateResource resource={resource} /> </td>
                <td> <DeleteResource resource={resource} /> </td>
                <td>{resource.publisher.login}</td>
            </tr>
        </>
    );
};

export default ResourceTable;
