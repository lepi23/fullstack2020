import React from 'react'
import RenderLanguages from './RenderLanguages'
import RenderWeather from './RenderWeather'

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
            <h1>
                Weather in {country.capital}
            </h1>
            <RenderWeather city = {country.capital} />          
    </div>
    )
}

export default RenderCountryInfo