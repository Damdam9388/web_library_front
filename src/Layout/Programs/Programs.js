import React, { Component } from 'react';
import './Programs.scss';

class Programs extends Component{
    render(){
        return(

            <div className="programs">
                <h1>Programs</h1>
                <div className="row">

                    <div><span><img src="https://img.icons8.com/officel/60/000000/php-logo.png"/></span><h4 className='title'>PHP</h4></div>
                    <div><span><img src="https://img.icons8.com/windows/60/000000/symfony.png"/></span><h4 className='title'>Symfony</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/javascript.png"/></span><h4 className='title'>JavaScript</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/react-native.png"/></span><h4 className='title'>React</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png"/></span><h4 className='title'>Java</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/spring-logo.png"/></span><h4 className='title'>Spring</h4></div>
                 
                </div>
            </div>

        );
    }
}

export default Programs;