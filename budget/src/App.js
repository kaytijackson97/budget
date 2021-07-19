import { Container } from 'semantic-ui-react';
import './App.css';
import { useEffect, useState } from 'react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  //runs effect every time isOpen, id, or entires changes
  useEffect(() => {
    const index = entries.findIndex((e) => e.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    
    entries.map(entry => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }

      return (totalIncome += Number(entry.value));
    });
    setTotal(totalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome);
  }, [isOpen, entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance size="small" textAlign="center" title="Your Balance" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

      <MainHeader title="History" type="h3"/>
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;