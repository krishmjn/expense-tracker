import './App.css';
import Header from './Components/Header';
import Balance from "./Components/Balance"
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import {GlobalProvider} from "./Context/Globalstate"
function App() {
  return (
   <GlobalProvider>
    <Header />
    <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
