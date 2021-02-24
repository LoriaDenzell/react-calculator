import React, {Component} from 'react';
import './Summary.css';

class Input extends Component{
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=";
    }

    render() {
        return (
            <div className="summary">
                {this.props.children === "" ? 0 : this.props.children}
            </div>
        );
    }
}

export default Input;
