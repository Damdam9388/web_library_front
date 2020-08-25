import React from "react";

const InputContact = ({nameId}, {label}) => {
    return <>
        <input name={nameId} id={nameId} type="text" required placeholder={nameId}/>
        <label>{label}</label>
    </>;
}
export default InputContact;