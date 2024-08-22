// src/App.js
import React from 'react';
import './App.css'; 
import MiniMap from './components/maps';
import MainPage from './pages/mainPage';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
    <Routes>
      <Route path="/landshaft" element={ <MiniMap/> }/>
    </Routes>

    </div>
  );
}

export default App;