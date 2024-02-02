
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import urls from '../../utils/url';
export function Logout() {
  const HOSTED_SERVER_URL=urls()
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${HOSTED_SERVER_URL}/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log('Logout successful');
          localStorage.removeItem('token');
          console.log('Token after removal:', localStorage.getItem('token'));
          navigate('/');
        } else {
          console.error('Logout failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
    };

    handleLogout();
  }, [navigate]); // Include navigate in the dependencies array if it's used inside the effect
  useEffect(() => {
    const handleBeforeUnload = () => {
      history.replaceState(null, document.title, window.location.href);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <div>Logging out...</div>; // You can render something while the logout is in progress
}
