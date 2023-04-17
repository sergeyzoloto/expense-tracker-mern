import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';
import { useAuthContext } from '../../hooks/useAuthContext';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { user } = useAuthContext();

  const handleClick = (event) => {
    event.preventDefault();
    if (!user) return;
    deleteTransaction(transaction._id, user);
  };

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>
          {sign}${numberWithCommas(Math.abs(transaction.amount))}
        </span>
        <button onClick={handleClick} className="delete-btn">
          x
        </button>
      </li>
    </>
  );
};
