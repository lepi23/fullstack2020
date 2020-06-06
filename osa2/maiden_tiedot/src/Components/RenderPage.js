import React from 'react'
import RenderCountryInfo from './RenderCountryInfo'
import RenderCountryList from './RenderCountryList'

// renderöi informaatiota hausta tai maista hakuparametrien mukaan
const RenderPage = ({countries}) => {
    if (countries.length < 1)
    {
        return(
            <p>
                No countries found
            </p>
        )
    }
    else if (countries.length < 10)   
    {
        if (countries.length ===1)
        {
            return(
                <div>
                <RenderCountryInfo country = {countries[0]} />
                </div>
            )
           
        }
        else
        {
            return(
                <RenderCountryList countries = {countries}/>
            )
            
        }
    }
    else
    {
        return(
            <p>
            Too many matches, specify another filter
            </p>
        )
        
    }
    
}

export default RenderPage