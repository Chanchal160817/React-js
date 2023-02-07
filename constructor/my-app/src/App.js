import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    // to call parent constructor we call super()
    super()
    this.state={
      data:"Anil"
    }
// console.log('Constructor');
  }
  render(){
    console.log('render');
    return(
      <h1>Hello World {this.state.data}</h1>
    )
  }
}

export default App;
