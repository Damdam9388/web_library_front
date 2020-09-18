import React from 'react';
import DisplayItemInTable from "./DisplayItemInTable";

const Item = ({items, attributeskey, endpoint, endpointDelete}) => {
    return (
        <tbody>
        {
            items ? items.map(item =>
                <DisplayItemInTable
                    key={item['@id']}
                    item={item}
                    attributesKey={attributeskey}
                    endpoint={endpoint}
                    endpointDelete={endpointDelete}
                />)
                :
                <div/>
        }
        </tbody>
    );
};

export default Item;