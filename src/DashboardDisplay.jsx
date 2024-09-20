import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Import custom CSS for dashboards
import logo from './images/logo.jpg'; // Import the logo image

function DashboardDisplay({ selectedDashboard }) {
    const navigate = useNavigate();

    // Updated dashboard URLs with the new third dashboard
    const dashboardUrls = {
        dashboard1: "https://app.powerbi.com/reportEmbed?reportId=fc66fbed-1eb0-48ca-a4ba-0ba92a46400d&autoAuth=true&ctid=53b0da51-f10c-4e0a-8700-da86cb1d5e6a", // NightRun Dashboard
        dashboard2: "https://app.powerbi.com/reportEmbed?reportId=9afafd58-eff0-4152-87f6-a5d8047f5201&autoAuth=true&ctid=53b0da51-f10c-4e0a-8700-da86cb1d5e6a", // Activitie Dashboard
        dashboard3: "https://app.powerbi.com/reportEmbed?reportId=3a33b729-ac58-4afe-9090-5098b5bc8c5b&autoAuth=true&ctid=53b0da51-f10c-4e0a-8700-da86cb1d5e6a"  // Pipeline Dashboard
    };

    return (
        <div className="dashboard-page">
            <header className="header">
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
                        width="1400" // Adjusted width
                        height="820" // Adjusted height
                        src={dashboardUrls[selectedDashboard]}
                        frameBorder="0"
                        allowFullScreen
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
