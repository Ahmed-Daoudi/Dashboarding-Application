import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthContext'; 
import logo from './images/logo.jpg'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({ setSelectedDashboard }) {
  const {  logout } = useAuth();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');

  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/logout`)
      .then(res => {
        if (res.data.Status === "Success") {
          logout(); // Call the logout method from useAuth to clear user context
          navigate('/login');
        }
      }).catch(err => console.log(err));
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/user`, { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
      });
  },); 

  const viewDashboard = (dashboard) => {
    if (!auth) {
      toast.error('You must be logged in first');
      return;
    }
    setSelectedDashboard(dashboard);
    navigate('/dashboard');
  };

  return (
    <div className="home-page">
      <header className="header d-flex justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Blauwtrust Logo" className="logo" />
          <h5 className="mt-2">Blauwtrust</h5>
        </div>
        <div className="d-flex align-items-center">
          <span className="username">Welcome {auth ? name : ''}</span>
          {auth ? (
            <button className="btn btn-secondary ms-3" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn btn-secondary ms-3" onClick={handleLoginRedirect}>Login</button>
          )}
        </div>
      </header>
      <main className="main-content container mt-5">
        <h2 className="text-center mb-4">Monitoring Dashboards</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">SSIS Dashboard</h5>
                <p className="card-text">This Shows the SSIS Monitoring Dashboard</p>
                <button className="btn btn-primary" onClick={() => viewDashboard('dashboard1')}>View Dashboard</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Activity Dashboard</h5>
                <p className="card-text">This Shows the Activity Monitoring Dashboard</p>
                <button className="btn btn-primary" onClick={() => viewDashboard('dashboard2')}>View Dashboard</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Pipeline Dashboard</h5>
                <p className="card-text">This Shows the Pipeline Monitoring Dashboard</p>
                <button className="btn btn-primary" onClick={() => viewDashboard('dashboard3')}>View Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center p-3">
        <p>All rights reserved 2024-2025</p>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Home;
