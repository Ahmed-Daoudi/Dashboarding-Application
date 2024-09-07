import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Import custom CSS for dashboards
import logo from './images/logo.jpg'; // Import the logo image


function DashboardDisplay({ selectedDashboard }) {
    const navigate = useNavigate();

    const dashboardUrls = {
        dashboard1: "https://app.powerbi.com/view?r=eyJrIjoiYjI2MzFiNjUtY...",
        dashboard2: "https://app.powerbi.com/view?r=eyJrIjoiZTU4ZjFiNjUtY...",
        dashboard3: "https://app.powerbi.com/view?r=eyJrIjoiYzEzMzFiNjUtY..."
    };

    return (
        <div className="dashboard-page">
            <header className="header d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center">
                <img src={logo} alt="Blauwtrust Logo" className="logo" />
                <h5 className="mt-2">Blauwtrust</h5>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-secondary ms-3" onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </header>
            <main className="main-content container mt-5">
                <h2 className="text-center mb-4">{`My Dashboard`}</h2>
                <div className="dashboard-embed">
                    <iframe
                        title={`Dashboard ${selectedDashboard.slice(-1)}`}
                        width="100%"
                        height="600px"
                        src={dashboardUrls[selectedDashboard]}
                        frameBorder="0"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </main>
            <footer className="text-center p-3">
                <p>All rights reserved 2024-2025</p>
            </footer>
        </div>
    );
}

export default DashboardDisplay;
