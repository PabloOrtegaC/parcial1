import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/menu/Menu'
import Stores from './components/stores/Stores'
import Cart from './components/cart/Cart'
import Login from './components/Login/Login';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />}></Route>
        <Route path="menu" element={<Menu />} />
        <Route path="stores" element={<Stores />} />
        <Route path="cart" element={<Cart />} />
       

    </Routes>
  );
}

export default App;
