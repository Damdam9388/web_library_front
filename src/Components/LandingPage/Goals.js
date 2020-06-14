import React, { Component } from 'react';
import './Goals.scss';

class Goals extends Component{
    render = () =>{
        return(

            <div className="goals">
                <h1>REACH YOUR GOALS WITH WEBSTER</h1>
                <div className="row">
                    <div><span><ion-icon name="ribbon-outline"/></span><h3>Skills</h3></div>
                    <div><span><ion-icon name="briefcase-outline"/></span><h3>New career</h3></div>
                    <div><span><ion-icon name="trending-up-outline"/></span><h3>Evolution</h3></div>
                    <div><span><ion-icon name="laptop-outline"/></span><h3>Training</h3></div>
                </div>
            </div>

        );
    };
}

export default Goals;