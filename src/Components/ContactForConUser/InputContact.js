import React from "react";

const InputContact = ({nameId, label, id, placeholder}) => {
    return <>
        <label className="font-weight-bold">{label}</label>
        <input className="form-control rounded-0 border-left-0 border-right-0 border-top-0 bg-transparent border-dark" name={nameId} id={id} placeholder={placeholder} type="text" required/>

    </>;
}
export default InputContact;