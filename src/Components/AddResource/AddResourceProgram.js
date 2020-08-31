import React, {useState,useEffect} from "react";
import AddResourceFormProgram from "./AddResourceFormProgram";
import { useHistory } from "react-router-dom";
import {addResources} from "../../Services/AddResourceServices";


const AddResourceProgram = (props) => {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization:"Bearer " + token, 'Content-type': 'application/json'}};


    //méthode utilisée si on crée un auteur en meme temps qu'on crée la ressource
    const axiosAddResourceInput = (e) => {
        setIsLoading(true);
        setData({
            name : e.target.elements.name.value,
            url : e.target.elements.url.value,
            //ici on crée un nouvel auteur, il faut donc créé un nouvel objet JSON, avec le champs name.
            //c'est pourquoi name:e.target.elements.author.value est entre accolade
            author : {name:e.target.elements.author.value},
            language : e.target.elements.language.value,
            level : e.target.elements.level.value,
            topic : e.target.elements.program.value
        });
        e.preventDefault();
    
        };

        // méthode utilisée si on selectionne un auteur existant lors de la création de la ressource
        const axiosAddResource = (e) => {
            setIsLoading(true);
            setData({
                name : e.target.elements.name.value,
                url : e.target.elements.url.value,
                author : e.target.elements.author.value,
                language : e.target.elements.language.value,
                level : e.target.elements.level.value,
                topic : e.target.elements.program.value
            });
            e.preventDefault();
            
        };

    useEffect(() => {
        addResources(data, config, history, setIsLoading)
    }, [data, config, history]);


    return (
    <>
        <AddResourceFormProgram getAddedResource={axiosAddResource} isLoading={isLoading} getAddedResourceInput={axiosAddResourceInput}/>
    </>
    );
};
export default AddResourceProgram;