import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> */
    </Routes>
  );
}

export default App;
