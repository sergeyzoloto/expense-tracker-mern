import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpenses } from './components/IncomeExpenses./IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddNewTransaction } from './components/AddNewTransaction/AddNewTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
