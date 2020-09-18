import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const EmailField = (props) => {
    return (
        <InputFormControl
            name="email"
            id="email"
            label="email"
            placeholder={props.user.email}
            isDisabled={true}
        />
    );
};

export default EmailField;