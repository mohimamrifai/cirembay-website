import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Menus from './components/Menus';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className="container">
            <Navbar/>
            <Home />
          </div>} />
        <Route path='/menus' element={<div className="container">
            <Navbar />
            <Menus />
          </div>}/>
        <Route path='/contact' element={<div className="container">
          <Navbar />
          <Contact />
        </div> }/>
      </Routes>
    </BrowserRouter>
    
  );
}




export default App;
