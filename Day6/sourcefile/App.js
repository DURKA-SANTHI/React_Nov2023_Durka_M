
import './App.css';
import Person1 from './component/Person1.js';
import Person2 from './component/Person2.js';
import HOC from './component/HOC.js';
import PureComponent from './component/PureComponent.js';
function App() {
  return (
    <div className="App">
      <Person1/>
      <Person2/>
      <HOC/>
      <PureComponent/>
    </div>
  );
}

export default App;
