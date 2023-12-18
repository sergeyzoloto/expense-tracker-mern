import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { numberWithCommas } from '../../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const calculateTotal = () => {
    if (transactions && transactions.amount > 0) {
      const amounts = transactions.map((transaction) => transaction.amount);
      return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    } else {
      return 0;
    }
  };
  const total = calculateTotal();

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  );
};
