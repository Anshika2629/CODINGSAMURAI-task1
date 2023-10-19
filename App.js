// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Fashion from './components/Fashion';
import Beauty from './components/Beauty';
import Living from './components/Living';

import Contact from './components/Contact';






function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route element={<Home/>} path='/'/>
     <Route element={<About/>} path='/About'/>
     <Route element={<Fashion/>} path='/Fashion'/>
     <Route element={<Beauty/>} path='/Beauty'/>
     <Route element={<Living/>} path='/Living'/>
    
     <Route element={<Contact/>} path='/Contact'/>
     
      </Routes>

      
     
      </BrowserRouter>
    

         
       
      </div>
  );
}

export default App;
