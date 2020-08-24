import React, {useState,useEffect} from "react";
import AddResourceFormFramework from "./AddResourceFormFramework";
import { useHistory } from "react-router-dom";
import {addResource} from "../../Services/AddResourceServices";
import * as CONSTANTS from "../../Constants/constants";


const AddResourceFramework = (props) => {
    //L'objet history permet d'interagir avec l'historique du navigateur.
    //C'est grâce à cet objet que l'on peut envoyer une URL dans l'historique du 
    //navigateur pour revenir en arrière. 
    //On peut utiliser "history" depuis n'importe quel fichier du projet.
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    //Bearer Token" est un JSON Web Token dont le rôle est d'indiquer 
    //que l'utilisateur qui accède aux ressources est bien authentifié.
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization:"Bearer " + token, 'Content-type': 'application/json'}};

    //Récupération des valeurs du formulaire
    const axiosAddResource = (e) => {
    setIsLoading(true);
    setData({
        name : e.target.elements.name.value,
        url : e.target.elements.url.value,
        author : e.target.elements.author.value,
        language : e.target.elements.language.value,
        level : e.target.elements.level.value,
        topic : e.target.elements.framework.value
    });
    // PreventDefault indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, 
    // son action par défaut ne doit pas être prise en compte comme elle le serait normalement. 
    // L'événement continue à se propager comme d'habitude, 
    e.preventDefault();

    };
    //Envoyer la requête à Symfony using React Hook `useEffect`
    useEffect(() => {
        console.log(data)
        addResource(data, config)
            .then((res) => {
                console.log(res);
                history.push(CONSTANTS.PROGRAMS);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    //Whenever the data inside of our array [data] changes, we gonna re-run this hook, 
    //otherwise we'll not re-run it
    }, [data]);


    return (
    <>
        <AddResourceFormFramework getAddedResource={axiosAddResource} isLoading={isLoading} />
    </>
    );
};
export default AddResourceFramework;