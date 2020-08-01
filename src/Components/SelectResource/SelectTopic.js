import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectTopic = () => {
    const [topics, setTopics] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
        const fetchTopicData = async () => {
            const response = await axios.get(CONSTANTS.ENDPOINT_SELECT_TOPIC, config);
            setTopics(response.data);
            console.log(response.data);
        }
    fetchTopicData();
    }, []);
        
    return (

        <Select placeholder="Topic..." variant="outline" type="text" name="topic" id="topic" className="form-control">
                {topics.map(topic => (
                    <option value = {topic.id}>{topic.name}</option>))
                })
        </Select>
    );
}


export default SelectTopic;

