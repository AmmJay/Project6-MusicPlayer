import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className = "App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div> 
    </>
  );
}

export default App;
