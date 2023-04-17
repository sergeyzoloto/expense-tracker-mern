import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useAuthContext } from '../../hooks/useAuthContext';

export const AddNewTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const newTransaction = { text, amount: +amount };

    addTransaction(newTransaction, user);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};
