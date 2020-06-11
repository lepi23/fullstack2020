import React, { useState, useEffect } from 'react'
import RenderPeople from './components/RenderPeople'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import personService from './services/persons'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'

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
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
            handleSuccessMessage(`${newName} succesfully changed`)
          })
          .catch(error =>{
            console.log(error)
            handleErrorMessage(`Information of ${newName} has already been removed from the server`)
          })         
      }
      else{
        handleSuccessMessage(`${newName} was not changed`)
      }
          
    }
    else{

      const personObject = { 
      name : newName,
      number : newNumber
      }
      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          handleSuccessMessage(`${newName} was added to the book`)
          })
          .catch(error => {
            handleErrorMessage(`person '${personObject.name}' was not added succesfully
              ${error}`)
          })
    }
    setNewName('')
    setNewNumber('') 
  }
  //henkilön poisto luettelosta
  const removePerson = (event) => {
    event.preventDefault()
    const RName = event.target.name
    const RId = event.target.id
    
    if (window.confirm(`Delete ${RName}?`)) { 
      personService.remove(RId)
      const newPersons = persons.filter(person => person.id.toString() !== RId)
      setPersons(newPersons) } 
      handleSuccessMessage(`${RName} succesfully removed`)
      
  }
  const handleSuccessMessage = (message) =>{
    setSuccessMessage(message)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 1000)
  }
  const handleErrorMessage = (message) =>{
    setErrorMessage(message)
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
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
  : persons.filter(person => person.name.toLowerCase().includes(filterWord.toLowerCase()))


  return (
    <div>
      <SuccessNotification message = {successMessage}/>
      <ErrorNotification message = {errorMessage}/>
      <h2>Phonebook</h2>
      <FilterForm filterWord = {filterWord} handleFilterChange = {handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm handleNameChange ={handleNameChange} handleNumberChange ={handleNumberChange} addPerson = {addPerson} newName = {newName} newNumber = {newNumber} />
      <h2>Numbers</h2>
      <table>
        <RenderPeople numbers={personsToShow} handleClick = {removePerson} />
      </table> 
    </div>
    
  )

}

export default App