export default function AppReducer(state, action) {
  /* Reducer is just a way to change your state
  and send it down to your application. */
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload,
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'GET_TRANSACTIONS':
      return { ...state, loading: false, transactions: action.payload };
    case 'CLEAR_TRANSACTIONS':
      return { ...state, loading: false, transactions: [] };

    case 'TRANSACTION_ERROR':
      return { ...state, loading: false, transactions: action.payload };

    default:
      return state;
  }
}
