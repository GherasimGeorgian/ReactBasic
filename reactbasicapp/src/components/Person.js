import React from 'react'

function Person({person,key}) {
    return (
        <div>
               <h2>I am {person.name}, I am {person.age} and i like {person.skill}</h2>
        </div>
    )
}

export default Person
