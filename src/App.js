import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Clock from './components/Clock/appClock.js';
import Home from './Pages/Home';
import Radius from './components/Circul/Radius';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>      
      <Route path="/Radius" element={<Radius/>}/>    
      <Route path="/appClock" element={<Clock/>}/>     
    </Routes>
  );
}

export default App;
