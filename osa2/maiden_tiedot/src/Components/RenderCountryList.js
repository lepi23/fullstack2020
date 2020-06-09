import React from 'react'
import RenderCountry from './RenderCountry'

const RenderCountryList = ({countries}) => {
    return(
        <div>
            {countries.map(country =>
                <RenderCountry key = {country.name} country = {country}/>
            )} 
        </div>
    )
}

export default RenderCountryList