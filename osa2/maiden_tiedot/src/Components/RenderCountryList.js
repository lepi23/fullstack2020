import React from 'react'

const RenderCountryList = ({countries}) => {
    return(
        <div>
            {countries.map(country =>
                <p>
                    {country.name}
                </p>
            )} 
        </div>
    )
}

export default RenderCountryList