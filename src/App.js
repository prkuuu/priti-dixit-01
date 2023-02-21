import "./styles.css";
import React, { useState, Suspence, lazy } from "react";

import Modal from "./components/modal";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import ProductDetails from "./components/product-details";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Link to="/about"> About </Link>
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Routes>
        <Route path="/about" element={<About prg="hhh" />} />
        <Route exact path="/" element={<Home pro="ppp" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails {...props} />} />
      </Routes>
    </Router>
  );
}

export default App;
