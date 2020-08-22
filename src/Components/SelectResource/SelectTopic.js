import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectTopic = () => {
    const [topics, setTopics] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
        console.log("Hi, TOPIC");
            axios.get(CONSTANTS.ENDPOINT_SELECT_TOPIC, config)
                .then(response => {
                    const selectTopic = response.data['hydra:member'];
                    setTopics(selectTopic);
                    console.log("******TOPIC*****")
                    console.log(selectTopic)
                }, (error) => {
                    console.log(error);
                });
    }, []);
        
    return (
        <div> 
            <Select placeholder="Topic..." variant="outline" type="text" name="topic" id="topic" className="form-control">
                    {topics.map(topic => (
                        <option key={topic.id}>{topic.programmingLanguage}</option>))
                    })
            </Select>
        </div>
    );
}


export default SelectTopic;

