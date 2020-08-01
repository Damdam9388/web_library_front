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

// class SelectLevel extends Component {

//     //State will apply to the po sts object 
//     //We can pass data or functions down into components through props
//     constructor(props){
//         super(props);
//         //Set initial state
//         this.state={
//             levels:[]
//         };
//     }

//     componentDidMount() {
//         //axios will perform a Http request to the api
//         //Data is hosted in an endpoint
//         axios.get(CONSTANTS.ENDPOINT_SELECT_LEVEL)
//         //get the response and store the data
//             .then(response => {
//                 console.log(respone);
//                 this.setState({levels: response.data});
//             })
//             .catch(error => console.log(error));
//     }

//     //render the data
//     render(){
//         return (
//                 <div className="container">
//                     {this.state.levels.map(level => (<ul key={level.id}>{level.name}</ul>))}
//                 </div>
//         )
//     }
// }


export default SelectLevel;

