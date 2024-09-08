import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout({ setAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/logout`)
      .then(() => {
        setAuth(false);
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
        navigate('/login');
      });
  }, [navigate, setAuth]);

  return (
    <div>Logging out...</div>
  );
}

export default Logout;
