import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const NameField = ({item, attribute}) => (
    <InputFormControl
        name="name"
        id="name"
        label="name"
        placeholder={item[attribute]}
    />
);


export default NameField;