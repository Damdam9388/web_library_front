import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectLevel = () => {
    const [levels, setLevels] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
        console.log("Hi, LEVEL");
        axios.get(CONSTANTS.ENDPOINT_SELECT_LEVEL, config)
            .then(response => {
                const selectLevel = response.data['hydra:member'];
                setLevels(selectLevel);
                console.log("******LEVEL*****")
                console.log(selectLevel)
                
            }, (error) => {
                console.log(error);
            });
    }, []);
        
    return (
        <div> 
            <Select placeholder="Level..." variant="outline" type="level" name="level" id="level" className="form-control">
                    {levels.map(level => (
                        <option key={level.id}>{level.levelName}</option>))
                    })
            </Select>
        </div>
    );
}


export default SelectLevel;

