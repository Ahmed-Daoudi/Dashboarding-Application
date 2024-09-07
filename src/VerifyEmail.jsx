import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VerifyEmail.css'; // Import the CSS file

const VerifyEmail = () => {
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const token = query.get('token');
    
        if (!token) {
            setStatus('No verification token provided.');
            return;
        }
    
        axios.get(`${process.env.REACT_APP_API_URL}/verify-email?token=${token}`)
            .then(response => {
                setStatus('Email verified successfully! You can now log in.');
            })
            .catch(error => {
                console.error('Verification error:', error);
                setStatus('Verification failed. Please try again later.');
            });
    }, []);
    
    return (
        <div className="verify-email-page">
            <div className="card-container">
                <div className="login-card">
                    <h1>{status}</h1>
                    <a href="/login" className="btn-primary">Go to Login</a>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
