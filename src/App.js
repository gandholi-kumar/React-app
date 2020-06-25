import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Use capital letter(App) since we are using hook ie. "useState".
// these are stateful components
const App = props => {
  // useState return array of 2 values i.e. initial value and reset value.
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Mathew', age: 27 }
    ]
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 34 },
        { name: 'Mathew', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>This is a react app!!</h1>
      <button onClick={() => switchNameHandler('Itachi')}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
        clickFunction={() => switchNameHandler('Sasuke')}>My Hobbies: Racing</Person>
    </div>
  );
}

export default App;
