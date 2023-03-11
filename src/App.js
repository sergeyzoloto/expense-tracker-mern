import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpenses } from './components/IncomeExpenses./IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddNewTransaction } from './components/AddNewTransaction/AddNewTransaction';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
