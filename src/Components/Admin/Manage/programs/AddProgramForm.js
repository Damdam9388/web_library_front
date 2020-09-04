import React from 'react';
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import ButtonSubmit from "../../../Utils/ButtonSubmit";
import InputFormControl from "../../../Utils/Form/InputFormControl";
import axiosInstance from "../../../../AxiosInstance";
import {ENDPOINT_TOPIC_PROGRAMMING} from "../../../../Constants/UrlConstants";
import * as CONSTANTS from "../../../../Constants/constants";
import {useHistory} from "react-router-dom";

const AddProgramForm = () => {
    let history = useHistory();

    const addNewProgram = (e) => {
        e.preventDefault();
        axiosInstance.post(ENDPOINT_TOPIC_PROGRAMMING, {programmingLanguage:{name:e.target.elements.name.value}} )
            .then((res) => {
                console.log(res);
                history.push(CONSTANTS.ADMIN_PROGRAMS);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
            <>
                <ConnectedUserNav />
                <div  className="row" style={{height:"95vh"}}>

                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="jumbotron" style={{width:"70%"}} >
                            <form onSubmit={addNewProgram}>
                                    <h3 className="text-center">Add a new program</h3>
                                    <InputFormControl label="name" placeholder="Enter the program name" id="name" name="name"/>

                                    <ButtonSubmit title="Add new program"/>


                            </form>
                        </div>
                    </div>
                </div>
            </>

    );
};

export default AddProgramForm;