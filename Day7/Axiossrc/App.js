
import './App.css';
import AxiosGet from './component/AxiosGet';
import AxiosPost from './component/AxiosPost';
import AxiosPut from './component/AxiosPut';
import AxiosDelete from './component/AxiosDelete';

function App() {
  return (
    <div className="App">
     <AxiosGet/>
     <AxiosPost/>
     <AxiosPut/>
     <AxiosDelete/>
    </div>
  );
}

export default App;
