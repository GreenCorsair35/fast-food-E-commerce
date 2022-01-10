import React from 'react';
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Post from './components/Post'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;