import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/menu/Menu'
import Stores from './components/stores/Stores'
import Cart from './components/cart/Cart'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="stores" element={<Stores />} />
        <Route path="cart" element={<Cart />} />
       

    </Routes>
  );
}

export default App;
