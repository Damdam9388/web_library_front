import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectAuthor = () => {
    //Déclarer une variable d'état "authors"
    const [authors, setAuthors] = useState([]);
    //Bearer Token" est un JSON Web Token dont le rôle est d'indiquer 
    //que l'utilisateur qui accède aux ressources est bien authentifié.
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    //We want to do some side of effect whenever something happens
    //It will be executed each time our application renders
    useEffect(() => {
        console.log("Hi, AUTHOR");
        //axios will perform a Http request to the api
        //Data is hosted in an endpoint
            axios.get(CONSTANTS.ENDPOINT_SELECT_AUTHOR, config)
            //get the response and store the data
                .then(response => {
                    //hydra:member : sert à récupérer les éléments (objets JSON) contenu dans la reponse
                    const selectAuthor = response.data['hydra:member'];
                    setAuthors(selectAuthor);
                    console.log("******AUHTOR*****")
                    console.log(selectAuthor)
                    
                }, (error) => {
                    console.log(error);
                });
    //This "[]" array never actually changes between diffrent renders
    }, []);
        
    return (
        <div> 
            <Select placeholder="Author..." variant="outline" type="text" name="author" id="author" className="form-control">
                    {authors.map(author => (
                        <option key={author.id}>{author.authorName}</option>))
                    })
            </Select>
        </div>
    );
}


export default SelectAuthor;

