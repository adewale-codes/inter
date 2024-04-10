import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SigninPage from '../../pages/SigninPage';

function UnauthenticatedLayout() {
  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default UnauthenticatedLayout;
