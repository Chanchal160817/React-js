// import logo from './logo.svg';
import './App.css';
import Student from './Student'
import React from 'react';
class App extends React.Component  {
  constructor(){
    super()
    this.state={
      name:"Chanchal"
    }
  }
  render(){
    return (
      <div className="App">
        <h1> Props Class</h1>
        <Student name = {this.state.name} email = "chanchal@gmail.com"/>
        <button onClick={()=>this.setState({name:"verma"})}>Update Name</button>
        {/* <Student name = "Nisha" email = "Nisha@gmail.com"/> */}
      </div>
    );
  }
}

export default App;
