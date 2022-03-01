
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import About from './pages/about'

function App() {
  return (
    <Router>
      <Navbar></Navbar>  
      <Routes>
        <Route path ='/about' element={<About/>} />
        <Route path ='/' element={<Home/>} />
        </Routes>  
      </Router>
  );
}

export default App;
