import React from 'react'
import Person from "./Person";
function NameList() {
    const names = ['Bruce','Clark','Diana','Diana']
    const nameList = names.map((name,index) => <h2 key={index}> {index}  {name}</h2>)
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:31,
            skill:'Jasva'
        },
        {
            id:3,
            name:'Diana',
            age:13,
            skill:'Go'
        }
    ]
const personList = persons.map(person => (
        <Person key={person.name} person={person}></Person>
       ))


 return (
        <div>
           {/*  <h2>{names[0]}</h2>            
            <h2>{names[1]}</h2>            
            <h2>{names[2]}</h2>   */}    
          {/*   {names.map(name => <h2>{name}</h2>)}  */}    
          {nameList} 

         {/* {personList} */}
        </div>
    )
}

export default NameList
