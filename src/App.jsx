import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Home from './pages/Home';;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductPage from './pages/ProductPage';
import Address from './pages/Address';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />   {/* Home page route */}
        <Route path="/add" element={<Address />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* About page route */}

      </Routes>
    </Router>
  );
}

export default App;
