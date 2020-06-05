import React, { Component } from 'react';
import './Goals.scss';

class Goals extends Component{
    render = () =>{
        return(

            <div className="goals">
                <h1>REACH YOUR GOALS WITH WEBSTER</h1>
                <div className="row">
                    <div><span><ion-icon name="ribbon-outline"/></span><h4>Skills</h4></div>
                    <div><span><ion-icon name="briefcase-outline"/></span><h4>New career</h4></div>
                    <div><span><ion-icon name="trending-up-outline"/></span><h4>Evolution</h4></div>
                    <div><span><ion-icon name="laptop-outline"/></span><h4>Training</h4></div>
                </div>
            </div>

        );
    };
}

export default Goals;