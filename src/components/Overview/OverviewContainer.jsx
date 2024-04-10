import React, { useState, useEffect } from 'react';
import TransactionsList from '../Transactions/TransactionsList';
import { api } from '../../services/api';

const OverviewContainer = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.listAllTransactions();
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="overview-container">
      {/* <TransactionsTable transactions={transactions} /> */}
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default OverviewContainer;
