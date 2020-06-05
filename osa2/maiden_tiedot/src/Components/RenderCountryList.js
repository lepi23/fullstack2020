import React from 'react'

const RenderCountryList = ({countries}) => {
    return(
        <div>
            {countries.map(country =>
                <p key = {country.name}>
                    {country.name}
                </p>
            )} 
        </div>
    )
}

export default RenderCountryList