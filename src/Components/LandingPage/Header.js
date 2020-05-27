import React, {Component}from 'react';
import "./Header.scss";
import Background from '../../Images/img2.jpg';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height : '55vh',
    backgroundSize: 'cover',
}
class Header extends Component {

    
    render(){
        return(
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>Learn to code in Java, HTML, Symfony...</p>
                <a href="#">{this.props.button}</a>
            </header>
        );
    }
};

export default Header;