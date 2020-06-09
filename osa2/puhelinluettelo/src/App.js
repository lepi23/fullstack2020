import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RenderPeople from './components/RenderPeople'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')
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
        window.alert(`${newName} is already added to phonebook`)
    }
    else{

      const personObject = {
      name : newName,
      id : persons.length,
      number : newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }  
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