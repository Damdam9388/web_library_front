import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectLevel = () => {
    const [levels, setLevels] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
        const fetchLevelData = async () => {
            const response = await axios.get(CONSTANTS.ENDPOINT_SELECT_LEVEL, config);
            setLevels(response.data);
            console.log(response.data);
        }
    fetchLevelData();
    }, []);
        
    return (

        <Select placeholder="Level..." variant="outline" type="text" name="level" id="level" className="form-control">
                {levels.map(level => (
                    <option value = {level.id}>{level.name}</option>))
                })
        </Select>
    );
}


export default SelectLevel;

