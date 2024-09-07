import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import custom CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from './images/logo.jpg'; // Import the logo image
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Email validation: restrict to @gmail.com domain
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(values.email)) {
            toast.error("Email must be in the format *@gmail.com");
            return;
        }
    
        // Password validation (example with basic rules)
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(values.password)) {
            toast.error("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
            return;
        }
        //axios.post(`/api/register`, values)
        axios.post(`${process.env.REACT_APP_API_URL}/register`, values)
            .then(res => {
                if(res.data.Status === 'Success'){
                    navigate('/login');
                } else {
                    toast.error("Error");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 409) {
                    toast.error('Email already exists');
                } else {
                    toast.error('An error occurred during registration');
                }
                console.log(err);
            });
    };
    
    

    return (
        <div className="register-page d-flex flex-column justify-content-between align-items-center vh-100">
            <header className="text-center my-4">
                <img src={logo} alt="Blauwtrust Logo" className="logo" />
                <h5 className="mt-2">Blauwtrust</h5>
            </header>

            <div className="card p-4 shadow-lg register-card">
                <h2 className="card-title text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            name="name"
                            className="form-control rounded-0"
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
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
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="terms" 
                        />
                        <label className="form-check-label" htmlFor="terms">
                            I agree to the terms and conditions
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary rounded-0 w-100 mb-3">Sign Up</button>
                    
                </form>
                <p className="text-center mt-3">
                     Already have an account? <a href="/login">Login</a>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
