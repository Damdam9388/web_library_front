import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectProgram = () => {
    const [programs, setPrograms] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
            axios.get(CONSTANTS.ENDPOINT_SELECT_PROGRAM, config)
                .then(response => {
                    const selectProgram = response.data['hydra:member'];
                    setPrograms(selectProgram);
                    console.log("******PROGRAM*****")
                    console.log(selectProgram)
                }, (error) => {
                    console.log(error);
                });
    }, []);
        
    return (
        <div> 
            <Select placeholder="Program..." variant="outline" type="text" name="program" id="program" className="form-control">
                    {programs.map(program => (
                        <option key={program["@id"]} value={program["@id"]}>{program.programmingLanguage.programName}</option>))
                    })
            </Select>
        </div>
    );
}


export default SelectProgram;

