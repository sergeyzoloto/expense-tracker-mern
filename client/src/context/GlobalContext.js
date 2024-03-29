import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions(user) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const response = await axios.get('/api/v1/transactions', config);

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.error,
      });
    }
  }
  async function clearTransactions() {
    try {
      dispatch({
        type: 'CLEAR_TRANSACTIONS',
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data,
      });
    }
  }

  async function deleteTransaction(id, user) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      };
      await axios.delete(`/api/v1/transactions/${id}`, config);
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data,
      });
    }
  }

  async function addTransaction(transaction, user) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        '/api/v1/transactions',
        transaction,
        config,
      );

      dispatch({ type: 'ADD_TRANSACTION', payload: response.data.data });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
        clearTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
