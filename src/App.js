import { useState } from 'react';
import './App.css';
import data from './data'
import List from './List'
function App() {
  const [people, SetPeople] = useState(data)
  return (
    <>
      <section className='container'>
        <h3>{people.length} Birthday</h3>
        <List people={people}/>
        <button onClick={() => SetPeople([])}> Clear Me</button>
      </section>
      
    </>
  );
}

export default App;
