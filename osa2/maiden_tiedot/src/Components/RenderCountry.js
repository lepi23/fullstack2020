import React, { useState } from 'react'
import RenderCountryInfo from './RenderCountryInfo'


const RenderCountry = ({ country }) => {
    const [showInfo, setShowInfo] = useState(false)
    const handleButton = () => setShowInfo(true)

    return( showInfo ? <RenderCountryInfo country = {country}/> : 
                        <div>
                            <p>{country.name}</p> 
                            <button onClick = {handleButton}>show</button>
                        </div>
    )
}

export default RenderCountry