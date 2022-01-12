import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Product from './components/Product'
import PageNotFound from './components/PageNotFound'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:post_id" element={<Post />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;