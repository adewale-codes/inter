import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninPage from '../../pages/SigninPage';
import OverviewPage from '../../pages/OverviewPage';
import UsersListPage from '../../pages/UsersListPage';
import UserDetailsPage from '../../pages/UserDetailsPage';
import TransactionsListPage from '../../pages/TransactionsListPage';
import TransactionDetailPage from '../../pages/TransactionDetailPage';
import ChangeTransactionStatusPage from '../../pages/ChangeTransactionStatusPage';
import ChangeUserAccountStatusPage from '../../pages/ChangeUserAccountStatusPage';
import AdminDashboardSummaryPage from '../../pages/AdminDashboardSummaryPage';

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
        <Route path="/transactions" element={<TransactionsListPage />} />
        <Route path="/transaction-details/:id" element={<TransactionDetailPage />} />
        <Route path="/change-transaction-status" element={<ChangeTransactionStatusPage />} />
        <Route path="/change-user-account-status" element={<ChangeUserAccountStatusPage />} />
        <Route path="/admin-dashboard-summary" element={<AdminDashboardSummaryPage />} />
      </Routes>
    </div>
  );
};

export default Content;
