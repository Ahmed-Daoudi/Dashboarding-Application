import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import custom CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import logo from './images/logo.jpg'; // Import the logo image
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/login`, values)
            .then(res => {
                if (res.data.Status === 'Success') {
                    navigate('/');
                } else {
                    toast.error("Error: " + res.data.Error || "An error occurred");
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("An error occurred");
            });
    };

    return (
        <div className="login-page d-flex flex-column justify-content-between align-items-center vh-100">
            <header className="text-center my-4">
                <img src={logo} alt="Blauwtrust Logo" className="logo" />
                <h5 className="mt-2">Blauwtrust</h5>
            </header>

            <div className="card p-4 shadow-lg login-card">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Username or Email</strong></label>
                        <input 
                            type="text" 
                            placeholder="Enter Username or Email" 
                            name="email"
                            className="form-control rounded-0"
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            className="form-control rounded-0"
                            onChange={e => setValues({ ...values, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-0 w-100 mb-3">Login</button>
                </form>
                <p className="text-center mt-3">
                    <a href="/register">Create Account</a>
                </p>
            </div>

            
                <p>All rights reserved 2024-2025</p>
            
            <ToastContainer />
        </div>
    );
}

export default Login;
