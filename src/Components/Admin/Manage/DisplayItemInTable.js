import React from 'react';
import UpdateItem from './UpdateItem';
import DeleteItem from "./DeleteItem";

const DisplayItemInTable = ({item, attributesKey, endpoint, endpointDelete}) => {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            {attributesKey ? attributesKey.map((attribute, index) => {
                return (
                    <td key={index}>{item[attribute]}</td>
                );
            })
            :
                <td/>
            }

            <td><UpdateItem item={item} endpoint={endpoint}/> </td>
            <td> <DeleteItem item={item} endpoint={endpointDelete}/> </td>
        </tr>
    );
};

export default DisplayItemInTable;