import React,{useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Student from './student'
function App() {
  const [name,setName] = useState("Chanchal")
  return (
    <div className="App">
     <Student  name = {name} email = 'chanchal@gmail.com' other = {{address:'delhi',mobile:"000"}}/>
     <button onClick = {()=>{setName("Verma")}}>Update name</button>
     {/* <Student  name = {"Nisha"} email = 'nisha@gmail.com' other = {{address:'noida',mobile:"001"}} />
     <Student  name = {"Afrin"} email = 'afrin@gmail.com' other = {{address:'gurgao',mobile:"002"}}/> */}
    </div>
  );
}

export default App;
