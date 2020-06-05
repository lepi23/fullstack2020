import React from 'react'
import RenderLanguages from './RenderLanguages'

const RenderCountryInfo = ({country}) => {
    return(
        <div>
            <h1>
                {country.name}
            </h1>
            <div>
                <p>
                    capital {country.capital}
                </p>
                <p>
                    population {country.population}
                </p>
            </div>    
            <h2>
                languages
            </h2>
            <RenderLanguages country = {country}/>
            <img 
                src={country.flag} width="500" height="300">
            </img>
            
    </div>
    )
    
}

export default RenderCountryInfo