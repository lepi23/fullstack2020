import React, { useState, useEffect } from 'react'
import RenderPeople from './components/RenderPeople'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  
  useEffect(() => {
      personService
        .getAll()
          .then(initialPersons => {
            setPersons(initialPersons)
          })
  }, [])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterWord, setFilterWord] = useState('')
  const [showAll, setShowAll] = useState(false)

  // Henkilön lisäys puhelinluetteloon
  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map((person) => person.name)
    if (names.indexOf(newName) >= 0)
    {
      if (window.confirm(`${newName} is already on the phonebook. Do you want to add a new number?`)) { 
          const person = persons.find(n => n.name === newName)
          const changedPerson = { ...person, number : newNumber }

        personService
          .update(changedPerson.id, changedPerson)
            .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
          })
      }
      else{
        window.alert(`${newName}'s number was not changed`)
      }
          
    }
    else{

      const personObject = {
      id : persons.length +1,  
      name : newName,
      number : newNumber
      }
      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          })
          .catch(error => {
            alert(
              `person '${personObject.name}' was not added succesfully
              ${error}`
            )
          })
    }
    setNewName('')
    setNewNumber('') 
  }
  // nimen muutoksen tapahtumakäsittelijä
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event ) => {
    setFilterWord(event.target.value)
  }

const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filterWord.toLowerCase())) //.toLowerCase().includes(filterWord.toLowerCase))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filterWord = {filterWord} handleFilterChange = {handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm handleNameChange ={handleNameChange} handleNumberChange ={handleNumberChange} addPerson = {addPerson} newName = {newName} newNumber = {newNumber} />
      <h2>Numbers</h2>
      <table>
        <RenderPeople numbers={personsToShow} />
      </table> 
    </div>
    
  )

}

export default App