import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthenticatedLayout from './components/Authentication/AuthenticatedLayout';
import UnauthenticatedLayout from './components/Authentication/UnauthenticatedLayout';
import SigninPage from './pages/SigninPage';
import OverviewPage from './pages/OverviewPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const sessionToken = localStorage.getItem('token');
        if (sessionToken) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <AuthenticatedLayout isAuthenticated={isAuthenticated} />
            ) : (
              <UnauthenticatedLayout />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
