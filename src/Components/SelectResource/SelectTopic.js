import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";
import { Select } from "@chakra-ui/core";

const SelectTopic = () => {
    const [topics, setTopics] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
        
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(CONSTANTS.ENDPOINT_SELECT_TOPIC, config);
            setTopics(response.data);
            console.log(response.data);
        }
    fetchData();
    }, []);
        
    return (

        <Select placeholder="Topic..." variant="outline" type="text" name="topic" id="topic" className="form-control">
                {topics.map(topic => (
                    <option value = {topic.id}>{topic.name}</option>))
                })
        </Select>
    );
}





// class SelectTopic extends Component {

//     //State will apply to the po sts object 
//     //We can pass data or functions down into components through props
//     constructor(props){
//         super(props);
//         //Set initial state
//         this.state={
//             topic:[]
//         };
//     }

//     componentDidMount() {
//         //axios will perform a Http request to the api
//         //Data is hosted in an endpoint
//         axios.get(CONSTANTS.ENDPOINT_SELECT_TOPIC)
//         //get the response and store the data
//             .then(response => {
//                 console.log(respone);
//                 this.setState({topics: response.data});
//             })
//             .catch(error => console.log(error));
//     }

//     //render the data
//     render(){
//         return (
//                 <div className="container">
//                     {this.state.topics.map(topic => (<ul key={topic.id}>{topic.discr}</ul>))}
//                 </div>
//         )
//     }
// }


export default SelectTopic;

