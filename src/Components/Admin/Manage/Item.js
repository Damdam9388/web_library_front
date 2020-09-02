import React from 'react';
import DisplayItemInTable from "./DisplayItemInTable";

const Item = ({items, attributeskey, endpoint, isLoading}) => {
    return (
        <tbody>
        {
            items ? items.map(item =>
                <DisplayItemInTable
                    key={item['@id']}
                    item={item}
                    attributesKey={attributeskey}
                    endpoint={endpoint}
                />)
                :
                <div/>
        }
        </tbody>
    );
};

export default Item;