
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import './App.css';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  const PersonName = {
    first: 'David',
    last: 'Letterman'
  }

  const PersonListArray = [
    {
      first: 'Alan',
      last: 'Walker'
    },
    {
      first: 'Skyle',
      last: 'Gray'
    },
    {
      first: 'Jessica',
      last: 'Hardman'
    }
  ]

  return (
    <div className="App">
        <Greet name='Jessie' messageCount={20} isLoggedIn={true}/>
        <Person name={PersonName}/>
        <PersonList names={PersonListArray}/> 
        <Status status='success'/>
        <Heading>This is a child prop</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicaprio</Heading>
        </Oscar>
        <Greet name='Mike' isLoggedIn={true} />
        <Button handleClick={(event, id) => console.log('Button has been clicked', event, id)}/>
        <Input value='' handleChange={event => console.log(event)} />
        <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
