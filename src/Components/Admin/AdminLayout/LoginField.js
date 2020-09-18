import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const LoginField = (props) => {
    return (
        <InputFormControl
            name="login"
            id="login"
            label="login"
            placeholder={props.user.login}
        />
    );
};

export default LoginField;