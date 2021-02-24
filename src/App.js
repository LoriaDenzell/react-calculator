import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

const title = "Denzell's Calculator";

class App extends Component { 

  componentDidMount(){
    document.title = "Denzell's Calculator"
  }
  
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      expression: "",
      operator: ""
    };
  }

  addToInput = val => {
    console.log(val)
    this.setState({ 
      input: this.state.input + val,
      expression: this.state.expression += val
    });
  };

  addZeroToInput = val =>{
    if(this.state.input !== ""){
      this.setState({ 
        input: this.state.input + val, 
        expression: this.state.expression += val
      });
    }
  };

  addDecimal = val =>{
    if(this.state.input.indexOf(".") === -1){
      this.setState({ 
        input: this.state.input + val,
        expression: this.state.expression += val
      });
    }
  };

  clearInput = () => {
    this.setState({ input: ""});
    this.setState({ expression: ""});
  };
  
  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input:""});
    this.state.operator = "plus";
    this.state.expression += '+';
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input:""});
    this.state.operator = "subtract";
    this.state.expression += '-';
  }

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input:""});
    this.state.operator = "multiply";
    this.state.expression += '*';
  }

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input:""});
    this.state.operator = "divide";
    this.state.expression += '/';
  }

  evaluation = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator == "plus"){
      this.setState({ 
        input: parseFloat(this.state.previousNumber) + 
        parseFloat(this.state.currentNumber),
        expression: this.state.previousNumber + "+" + this.state.currentNumber
      });
    }else if(this.state.operator == "subtract"){
      this.setState({ 
        input: parseFloat(this.state.previousNumber) - 
        parseFloat(this.state.currentNumber),
        expression: this.state.previousNumber + "-" + this.state.currentNumber
      });
    }else if(this.state.operator == "multiply"){
      this.setState({ 
        input: parseFloat(this.state.previousNumber) * 
        parseFloat(this.state.currentNumber),
        expression: this.state.previousNumber + "*" + this.state.currentNumber
      });
    }else if(this.state.operator == "divide"){
      if(this.state.previousNumber != 0 && this.state.currentNumber != 0){
        this.setState({ 
          input: parseFloat(this.state.previousNumber) / 
          parseFloat(this.state.currentNumber),
          expression: this.state.previousNumber + "/" + this.state.currentNumber
        });
      }else{
        this.setState({ 
          input: "",
          expression: this.state.previousNumber + "/" + this.state.currentNumber
        });
      }
    }
  };
  
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Header></Header>
          </div>
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Summary>{this.state.expression}</Summary>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluation}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
