import React from 'react';
import UpdateItem from './UpdateItem';
import DeleteItem from "./DeleteItem";
import {ENDPOINT_ALL_USERS} from "../../../Constants/UrlConstants";

const DisplayItemInTable = ({item, attributesKey, endpoint}) => {
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
            <td> <DeleteItem item={item} endpoint={ENDPOINT_ALL_USERS}/> </td>
        </tr>
    );
};

export default DisplayItemInTable;