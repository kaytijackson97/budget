import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance size="small" textAlign="center" title="Your Balance" value="2,550.53" />
      <DisplayBalances />

      <MainHeader title="History" type="h3"/>
      <EntryLines color="red" title="Something" value="$10.00" />
      <EntryLines color="red" title="Something else" value="$100.00" />
      <EntryLines color="green" title="New Object" value="$20.00" />

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryForm />

    </Container>
  );
}

export default App;
