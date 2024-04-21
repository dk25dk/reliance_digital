
import React from "react";
import { Home } from './home/Home'
import { CategoriesBar } from './components/CategoriesBar'
// import { SingleProductCart } from './home/SingleProductCart'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from '@mui/icons-material';
import { Login } from './home/Login'
import { Cart } from './home/Cart'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <CategoriesBar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
