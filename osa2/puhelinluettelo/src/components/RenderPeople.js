import React from 'react'
import Person from './Person'
const RenderPeople = ( { numbers, handleClick } ) =>{
  return(
    <tbody>
      {numbers.map(person =>
      <Person  person = {person} key = {person.id} handleClick = {handleClick}/>)
      }      
    </tbody>
  )
}
export default RenderPeople