import React from 'react'
import Person from './Person'
const RenderPeople = ( { numbers } ) =>{
  return(
    <tbody>
      {numbers.map(person =>
      <Person  person = {person} key = {person.id}/>)
      }      
    </tbody>
  )
}
export default RenderPeople