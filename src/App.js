import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultComponent from './componentes/ResultComponent';
import KeypadComponent from './componentes/KeypadComponent';

class App extends Component {
  constructor(){
    super();
      this.state = {
        result: ""
      }
    }

  onClick = button => {
    if(button === "=") {
      this.calculate()
    }else if(button === "C"){
      this.reset()
    }else if(button === "CE"){
      this.backspace()
    }else{
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  render(){
    return(
      <div className="container-lg">
        <div className="card col-4 mx-auto">
          <div className="calculator-body">
            <h2>Simple Calculator</h2>
            <ResultComponent result={ this.state.result }/>
            <KeypadComponent onClick={ this.onClick }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;