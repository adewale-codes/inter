import React from 'react';
import TransactionsList from '../components/Transactions/TransactionsList';

const TransactionsListPage = () => {
  return (
    <div className="transactions-list-page text-black p-5">
      <TransactionsList />
    </div>
  );
};

export default TransactionsListPage;
