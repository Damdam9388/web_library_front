### SelectResource 

C'est des composant qui vont nous permettre de récupéter tous les levels, les authors, les programs et les framworks dans la base grâce à la méthode Get.

#### SelectAuthor.js

```php
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
                        //["@id"] pour chercher l'IRI
                        //Avec un IRI c impossible d'avoir les mêmes identifiants
                        //on utilise du JSON ld et pas du JSON
                        //ça permet de donner des identifiants uniques pour chaque objet que tu as 
                        //Le key sert à React pour la gestion du VirtualDOM
                        //La value sert au formulaire pour la valeur de l'option séléctionnée l'option 
                        <option key={author["@id"]} value={author["@id"]}>{author.authorName}</option>))
                    })
            </Select>
        </div>
    );
}
```

**==>Même concept pour les autre composants.**

Dans le but de la refacto, on avait regroupé tout ces composants en un seul composant `Select.js` pour éviter la répétition du même code. 

```php
import React, { useState, useEffect } from "react";
import axiosInstance from "../../AxiosInstance";

// on a définit des props général à qui vont être remplacé dans nos composants AddResourceFormFramework.js
// et AddResourceFormProgram.js par les valeurs volu
const Select = ({ name, endpoint, placeholder, lblAttributeKey }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosInstance.get(endpoint)
        .then((response) => {
        const selectItems = response.data["hydra:member"];
        setItems(selectItems);
        },(error) => {
        console.log(error);
      });
      //on passe un tableau endpoint car le useEffect il a besoin de savoir sur quel changement il doit s'appliquer
      //en gros on dit que le useEffect doit s'executer à chaque fois que le endpoint va changer, c'est ce qu'on appelle par les dépendances
  }, [endpoint]);

  return (
    <div>
      <select
        name={name}
        id={name}
        className="form-control"
      >
        <option value={placeholder}>{placeholder}</option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item[lblAttributeKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
```