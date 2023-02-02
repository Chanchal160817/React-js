// For defining react firstly we have to import them.
import React from "react"
import logo from './logo.svg';
import './App.css';
// Use state ia a hook which allow us to maintain and update hook
import { useState } from 'react'
function App() {
  const [data, setData] = useState('chanchal')
  const [count, setCount] = useState(0)
  // Unable to render if we use variable
  // let data ="chanchal"
  function updatedata() {
    //  data = "verma"
    //  alert(data)
    setData("verma")

  }
  function updateCount() {
    setCount(count + 1)
  }
  console.warn("____________")
  return (
    <div className="App">
      <h1>{data}</h1>
      <h1>{count}</h1>
      {/* <h1>Chanchal</h1> */}
      <button onClick={updatedata}>Update Data</button>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
}

export default App;
