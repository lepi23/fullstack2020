import React from 'react'
import RenderLanguages from './RenderLanguages'

const RenderCountryInfo = ({country}) => {
    return(
        <div>
            <h1>
                {country.name}
            </h1>
            <p>
                capital: {country.capital}
            </p>
            <h2>
                languages
            </h2>
            
            <img 
                src={country.flag} width="500" height="300">
            </img>
    </div>
    )
    
}

export default RenderCountryInfo
//<RenderLanguages country = {country}/>