import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=";
    }

    render() {
        return (
            <div className="header">
                Denzell's Calculator
            </div>
        );
    }
}

export default Header;
