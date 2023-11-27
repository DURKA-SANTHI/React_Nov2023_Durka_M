//import Layout from './components/Layout/Layout';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Book from './Pages/Book';
import PageNotFound from './Pages/PageNotFound';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Registration/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/book" element={<Book />}  />
        <Route path="*" element={<PageNotFound />}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
