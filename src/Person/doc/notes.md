## Stateless component

This is called as stateless/dummy component since there are no states handled in this component 

- **Why we need Stateless components?**
    It is good to have as many as stateless components in an application for easy maintenance



### Learning Notes:
1. Passing method with arguments ref btw components can be handled.
- `bind function`- mostly preferable, which takes the first argument as 'this' which refers to a function while second argument takes list of values

`example: With in`

`parentComponent: <Person clickFunction={switchNameHandler.bind(this, 'Naruto Uzumaki')} />`

`childComponent: <p onClick={props.clickFunction}>`

- `arrow function`- most unlikely to use and inefficient, which that acts as normal arrow function call

`example: With in`

`parentComponent: <Person clickFunction={() => switchNameHandler('Sasuke')} />`

`childComponent: <p onClick={props.clickFunction}>`
