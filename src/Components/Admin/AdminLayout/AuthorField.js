import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const AuthorField = (props) => {
    return (
        <InputFormControl
            name="author"
            id="author"
            placeholder={props.resource["author"]}
            label="author"
            isDisabled={true}
        />
    );
};

export default AuthorField;