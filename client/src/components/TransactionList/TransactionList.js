import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../../context/GlobalContext';
import { useAuthContext } from '../../hooks/useAuthContext';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getTransactions(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Create a helper function to render transactions
  const renderTransactions = (transactions) => {
    if (transactions && transactions.length > 0) {
      return transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction._id} />
      ));
    } else {
      return <p>No transactions</p>;
    }
  };

  return (
    <>
      <div className="list">
        <h3>History</h3>
        {renderTransactions(transactions)}
      </div>
    </>
  );
};
