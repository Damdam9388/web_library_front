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

    useEffect(() => {
        console.log("Hi, AUTHOR");
        //we send a GET request using axios
            axios.get(CONSTANTS.ENDPOINT_SELECT_AUTHOR, config)
                .then(response => {
                    const selectAuthor = response.data['hydra:member'];
                    setAuthors(selectAuthor);
                }, (error) => {
                    console.log(error);
                });
    }, []);
        
    return (
        <div> 
            <Select placeholder="Author..." variant="outline" type="text" name="author" id="author" className="form-control">
                    {authors.map(author => (
                        <option key={author.id}>{author.name}</option>))
                    })
            </Select>
        </div>
    );
}

//     //State will apply to the po sts object 
//     //We can pass data or functions down into components through props
//     constructor(props){
//         super(props);
//         //Set initial state
//         this.state={
//             authors:[]
//         };
//     }

//     componentDidMount() {
//         //axios will perform a Http request to the api
//         //Data is hosted in an endpoint
//         useEffect(async () => {
//              await axios.get(CONSTANTS.ENDPOINT_SELECT_AUTHOR)
//         //get the response and store the data
//             .then(response => {
//                 console.log(respone);
//                 this.setState({authors: response.data});
//             })
//             .catch(error => console.log(error));
//     },[]);

//     //render the data
//     render(){
//         return (
//                 <div className="container">
//                     {this.state.authors.map(author => (<ul key={author.id}>{author.name}</ul>))}
//                 </div>
//         )
//     }
// }


export default SelectAuthor;

