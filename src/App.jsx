// import Routers from "./Routers/Routers"
import './App.css';
// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Table } from "./Components/Home";
import { City } from "./Components/Cities";
import { Country } from "./Components/Countries";
import { Nav } from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add-city" element={<City />} />
        <Route path="/add-country" element={<Country />} />

      </Routes>
    </div>
  );
}

export default App;
