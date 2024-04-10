import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../Layout/Sidebar';
import Topbar from '../Layout/Topbar';
import Content from '../Layout/Content';
import OverviewPage from '../../pages/OverviewPage';
import AuthenticatedRoute from './AuthenticatedRoute';

function AuthenticatedLayout({ isAuthenticated }) {
  return (
    <>
      {isAuthenticated && (
        <>
          <div className="bg-neutral-100 overflow-hidden flex flex-row">
            <Sidebar />
            <div className='flex flex-col flex-1 w-full'>
              <Topbar />
              <Content>
                <Routes>
                  <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/overview" element={<OverviewPage />} />
                </Routes>
              </Content>
            </div>
          </div>
        </>
      )}
      {!isAuthenticated && <Navigate to="/signin" replace />}
    </>
  );
}

export default AuthenticatedLayout;
