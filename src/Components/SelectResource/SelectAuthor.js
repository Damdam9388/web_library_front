import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectAuthor = () => {
    const [authors, setAuthors] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = { headers: { Authorization: "Bearer " + token } };

    useEffect(() => {
        axios.get(CONSTANTS.ENDPOINT_SELECT_AUTHOR, config)
            .then(response => {
                const selectAuthor = response.data['hydra:member'];
                setAuthors(selectAuthor);
                console.log("******AUHTOR*****")
                console.log(selectAuthor)

            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <Select name="author" placeholder="Author..." items={authors} lblAttributeKey="authorName"/>
    );
}


export default SelectAuthor;

