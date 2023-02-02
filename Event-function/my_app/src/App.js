import logo from './logo.svg';
import './App.css';

alert("Hello")
function App() {
  let data = "chanchal verma"
  function apple(){
    data = "Peter"
    alert("function Called")
    alert(data)

  }
  return (
    <div className="App">
      <h1>{data} </h1>
      {/* Incorrect way to call by this way alert invoke before click a button.*/}
      {/* <button onClick={apple()} >Click me</button> */}
      {/* Correct way to call  */}
      <button onClick={apple} >Click me</button>
      {/* Alert will generate automatically when we use alert by this way */}
      {/* <button onClick={alert("hello chanchal")}>hello chanchal</button> */}
      {/* if you want direct function call then use arrow function */}
      {/* for avoiding this we have to use arrow function */}
      <button onClick={()=>alert("hello alert")}> Click Me </button>

    </div>
  );
}

export default App;
