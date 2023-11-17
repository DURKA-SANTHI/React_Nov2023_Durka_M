import './App.css';
import ListItems from "./components/List/ListItems";
import Emp from "./components/List/Emp";
import MaterialUi from "./components1/MaterialUi";
import MaterialuiButton from "./components1/MaterialuiButton";

function App() {
  return (
    <div className="App">
      
      <MaterialUi/>
      <hr></hr>
      <br></br>
      <MaterialuiButton/>
      <ListItems/>
      <Emp/>
      
    </div>
  );
}

export default App;
