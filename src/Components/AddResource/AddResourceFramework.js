import React, {useState} from "react";
import AddResourceFormFramework from "./AddResourceFormFramework";
import { useHistory } from "react-router-dom";
import {addResources} from "../../Services/AddResourceServices";

const AddResourceFramework = (props) => {

    let history = useHistory();
    const [authorInput, setAuthorInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization:"Bearer " + token, 'Content-type': 'application/json'}};

    // méthode utilisée si on crée un auteur en meme temps qu'on crée la ressource
    const axiosAddResource = (e) => {
    setIsLoading(true);
    e.preventDefault();
    let author = authorInput ? {name:e.target.elements.author.value} : e.target.elements.author.value;
    const data = {
        name : e.target.elements.name.value,
        url : e.target.elements.url.value,
        //ici on crée un nouvel auteur, il faut donc créé un nouvel objet JSON
        //c'est pourquoi name:e.target.elements.author.value est entre accolade
        author : author,
        language : e.target.elements.language.value,
        level : e.target.elements.level.value,
        topic : e.target.elements.framework.value
    };
        addResources(data, config, history, setIsLoading);
    };
    
    return (
    <>
        <AddResourceFormFramework getAddedResource={axiosAddResource} isLoading={isLoading} isInput={authorInput} setInput={setAuthorInput}/>
    </>
    );
};
export default AddResourceFramework;