import { Container } from 'semantic-ui-react';
import './App.css';
import { useEffect, useState } from 'react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [entryId, setEntryId] = useState();
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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
  }, [entries]);

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const editEntry = (id) => {
    if(id){
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];

      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const addEntry = () => {
    const result = entries.concat({
      id:entries.length + 1, 
      description,
      value,
      isExpense
    });

    setEntries(result);
    resetEntry();
  }

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance size="small" textAlign="center" title="Your Balance" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

      <MainHeader title="History" type="h3"/>
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryForm 
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        />
    </Container>
  );
}

export default App;

let initialEntries = [
  {
    id:1,
    description:"Work Income",
    value:1000.00,
    isExpense:false
  },
  {
    id:2,
    description:"Water Bill",
    value:20.00,
    isExpense:true
  },
  {
    id:3,
    description:"Rent",
    value: 300.00,
    isExpense:true
  },
  {
    id:4,
    description:"Power Bill",
    value:50.00,
    isExpense:true
  }
]
