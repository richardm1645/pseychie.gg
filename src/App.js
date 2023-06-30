import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom'; 

import Home from './components/Home'
import ItemDescription from './components/item-description/ItemDescription';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemDescription />} />
    </Routes>
  );
}

export default App;
