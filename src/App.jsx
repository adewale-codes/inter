import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Topbar from './components/Layout/Topbar';
import Content from './components/Layout/Content';
import SigninPage from './pages/SigninPage';
import OverviewPage from './pages/OverviewPage'; 

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => {
    setAuthenticated(true);
  };

  return (
    <Router>
      <div className='bg-neutral-100 overflow-hidden flex text-black flex-row'>
        <Routes>
          {!authenticated && (
            <Route path="/" element={<SigninPage onSignIn={handleSignIn} />} />
          )}
          {authenticated && (
            <>
              <Route element={<Sidebar />} />
              <div className='flex flex-col flex-1'>
                <Route element={<Topbar />} />
                <div className="flex flex-col flex-1">
                  <Route path="/" element={<OverviewPage />} />
                </div>
              </div>
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
