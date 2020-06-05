import React from 'react'
 const RenderLanguages = ({country}) => {

    const languageList = country.languages.map(language => <li key = {language.name}> {language.name} </li> )
    return(
    <ul>{languageList}</ul>
    )                      
 }
 export default RenderLanguages