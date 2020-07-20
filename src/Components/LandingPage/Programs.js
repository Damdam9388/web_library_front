import React, { Component } from 'react';
import './Programs.scss';

class Programs extends Component{
    render(){
        return(

            <div className="programs">
                <h1>PROGRAMS</h1>
                <div className="row">

                    <div><span><img src="https://img.icons8.com/officel/60/000000/php-logo.png" alt="php-logo"/></span><h4 className='title shake-crazy shake-freeze'>PHP</h4></div>
                    <div><span><img src="https://img.icons8.com/windows/60/000000/symfony.png" alt="symfony"/></span><h4 className='title shake-crazy shake-freeze'>Symfony</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/javascript.png" alt="javascript"/></span><h4 className='title shake-crazy shake-freeze'>JavaScript</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/react-native.png" alt="react"/></span><h4 className='title shake-crazy shake-freeze'>React</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png" alt="java"/></span><h4 className='title shake-crazy shake-freeze'>Java</h4></div>
                    <div><span><img src="https://img.icons8.com/color/60/000000/spring-logo.png" alt="spring"/></span><h4 className='title shake-crazy shake-freeze'>Spring</h4></div>
        
                </div>
            </div>

        );
    }
}

export default Programs;