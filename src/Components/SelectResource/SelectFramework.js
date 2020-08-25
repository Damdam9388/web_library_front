import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectFramework = () => {
    const [frameworks, setFrameworks] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
            axios.get(CONSTANTS.ENDPOINT_SELECT_FRAMEWORK, config)
                .then(response => {
                    const selectFramework = response.data['hydra:member'];
                    setFrameworks(selectFramework);
                    console.log("******FRAMEWORK*****")
                    console.log(selectFramework)
                }, (error) => {
                    console.log(error);
                });
    }, []);
        
    return (
        <div> 
            <Select placeholder="Framework..." variant="outline" type="text" name="framework" id="framework" className="form-control">
                    {frameworks.map(framework => (
                        <option key={framework["@id"]} value={framework["@id"]}>{framework.framework}</option>))
                    })
            </Select>
        </div>
    );
}


export default SelectFramework;

