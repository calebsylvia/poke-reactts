import React from 'react';
import './App.css';
import PokeSearch from './Components/PokeSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokeSearch/>}/>
          </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
