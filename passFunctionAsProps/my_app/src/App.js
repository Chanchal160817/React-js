// import logo from './logo.svg';
import './App.css';
import User from './User'
import Members from './Members'
function App() {
  function getData(){
    alert("hello from app")
  }
  return (
    <div className="App">
      {/* <h1>Pass Function as Props</h1> */}
      <User data={getData}/>
      <div style={{float:'right'}}>
        <Members data= {getData}/>
      </div>
    </div>
  );
}

export default App;
