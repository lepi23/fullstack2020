import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './Components/SearchForm'
import RenderPage from './Components/RenderPage'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        //console.log('promise fulfilled')
        setCountries(response.data)
      })
  },[])

  const [selectedCountries, setSelectedCountries] = useState(countries)

  //console.log('render', countries.length, 'countries')
  const [searchWord, setSearchWord] = useState('')

  const handleSearchWordChange = (event ) => {
    //käsittelee tapahtumat hakusanan muutoksen tapahtuessa eli vaihtaa hakusanan ja löytyneiden maiden tilan
    setSearchWord(event.target.value)
    const newCountries = countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setSelectedCountries(newCountries)
  }

  return (
    <div className="App">
      <SearchForm searchWord = {searchWord} handleSearchWord = {handleSearchWordChange}/>
      <RenderPage countries = {selectedCountries}/>
    </div>  
  );
}

export default App;
