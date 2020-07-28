import React, {Component} from 'react';
import axios from 'axios';
import * as CONSTANTS from "../../Constants/UrlConstants";

class SelectLevel extends Component {

    //State will apply to the po sts object 
    //We can pass data or functions down into components through props
    constructor(props){
        super(props);
        //Set initial state
        this.state={
            levels:[]
        };
    }

    componentDidMount() {
        //axios will perform a Http request to the api
        //Data is hosted in an endpoint
        axios.get(CONSTANTS.ENDPOINT_SELECT_LEVEL)
        //get the response and store the data
            .then(response => {
                console.log(respone);
                this.setState({levels: response.data});
            })
            .catch(error => console.log(error));
    }

    //render the data
    render(){
        return (
                <div className="container">
                    {this.state.levels.map(level => (<ul key={level.id}>{level.name}</ul>))}
                </div>
        )
    }
}


export default SelectLevel;

