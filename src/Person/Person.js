import React from 'react'

// Its a stateless component since it don't have any state
// it is good practice to have as many stateless components in project.
const person = (props) => {
    return (
        <div>
            <p onClick={props.clickFunction}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};


export default person;