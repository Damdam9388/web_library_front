import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const IdField = ({item}) => (
    <InputFormControl
        id="id"
        name="id"
        label="id"
        placeholder={item['@id']}
        isDisabled={true}
    />
);

export default IdField;