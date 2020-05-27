import React, {Component}from 'react';
import './Header.scss'
import Background from '../../Images/img1.jpg';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height : '70vh',
    backgroundSize: 'cover',
}
class Header extends Component {

    
    render(){
        return(
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>Upgrade your skills and progress in your life.</p>
                <a href="#button">{this.props.button}</a>
            </header>
       
        );
    }
 
};

export default Header;