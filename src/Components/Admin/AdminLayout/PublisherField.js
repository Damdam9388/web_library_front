import React from 'react';
import InputFormControl from "../../Utils/Form/InputFormControl";

const PublisherField = (props) => {
    return (
        <InputFormControl
            name="publisher"
            id="publisher"
            placeholder={props.resource["publisher"]}
            label="publisher"
            isDisabled={true}
        />
    );
};

export default PublisherField;