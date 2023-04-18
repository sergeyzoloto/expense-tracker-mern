import { Balance } from '../components/Balance/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses./IncomeExpenses';
import { TransactionList } from '../components/TransactionList/TransactionList';
import { AddNewTransaction } from '../components/AddNewTransaction/AddNewTransaction';

function Home() {
  return (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddNewTransaction />
    </div>
  );
}

export default Home;
