import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="list">
        <h3>History</h3>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </div>
    </>
  );
};
