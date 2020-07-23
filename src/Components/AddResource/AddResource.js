import React, { useState } from "react";
import AddResourceForm from "./AddResourceForm";
import { useHistory } from "react-router-dom";
import {addResource} from "../../Services/AddResourceServices";
import * as CONSTANTS from "../../Constants/constants";


const AddResource = (props) => {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization:"Bearer" + token}};

    const axiosAddResource = (e) => {
    setIsLoading(true);
    // const name = e.target.elements.name.value;
    // const url = e.target.elements.url.value;
    // const author = e.target.elements.author.value;
    // const language = e.target.elements.language.value;
    // const level = e.target.elements.level.value;
    // const topic = e.target.elements.topic.value;
    setData({
        name : e.target.elements.name.value,
        url : e.target.elements.url.value,
        author : e.target.elements.author.value,
        language : e.target.elements.language.value,
        level : e.target.elements.level.value,
        topic : e.target.elements.topic.value
    })
    console.log("name = " + name + "url = " + url + " author = " + author + " language = " + language + " level = " + level + " topic = " + topic);
    e.preventDefault();
    addResource(data, config)
        .then((res) => {
            console.log(res);
            history.push(CONSTANTS.PROGRAMS);
        })
        .catch((error) => {
        console.log(error);
        })
        .finally(() => setIsLoading(false));
    };


    return (
    <>
        <AddResourceForm getAddedResource={axiosAddResource} isLoading={isLoading} />
    </>
    );
};
export default AddResource;