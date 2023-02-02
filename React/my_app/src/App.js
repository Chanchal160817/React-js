
import './App.css';
import User from './User'
import Users from './Users'
function App() {
  function Apple(){
    return( <div>Apple Component </div>)
  }
  return (
    <div className="App">
      {/* <h1>Hello REact</h1> */}
      <User/>
      {/* <Users/> */}
      {/* First way to call */}
      {/* {Apple()}; */}
      {/* second way to call */}
      {/* <Apple/> */}
    </div>
  );
}

export default App;
