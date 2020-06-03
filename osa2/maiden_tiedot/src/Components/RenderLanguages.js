import React from 'react'
 const RenderLanguages = ({country}) => {
    return(
        <ul>
            {country.languages.map(language =>
                <li>
                    {language}
                </li> )}
        </ul>
        
    )
 }

 export default RenderLanguages