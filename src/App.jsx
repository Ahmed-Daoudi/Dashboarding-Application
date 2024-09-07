// src/App.jsx

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import DashboardDisplay from './DashboardDisplay';
import VerifyEmail from './VerifyEmail'; // Import the new component

function App() {
  const [selectedDashboard, setSelectedDashboard] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setSelectedDashboard={setSelectedDashboard} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardDisplay selectedDashboard={selectedDashboard} />} />
        <Route path='/verify-email' element={<VerifyEmail />} /> {/* Add this line */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
