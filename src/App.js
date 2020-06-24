import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Mathew', age: 27 }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // V1
    setPersonsState({
      persons: [
        { name: 'taylor', age: 34 },
        { name: 'Mathew', age: 27 }
      ]
    });

    // V2
    // setPersonsState(this.setState(this.state.persons.reverse()));
  };

  return (
    <div className="App">
      <h1>This is a react app!!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
    </div>
  );
}

export default app;
