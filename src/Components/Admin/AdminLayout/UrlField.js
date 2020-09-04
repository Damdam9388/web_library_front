import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const UrlField = (props) => {
    return (
        <InputFormControl
            name="url"
            id="url"
            placeholder={props.resource.url}
            label="url"
        />
    );
};

export default UrlField;