import React from 'react'

const Person = ( { person, handleClick } ) =>
{
return(
    <tr>
        <td>
            {person.name}
        </td>
        <td>
            {person.number}
        </td>
        <td>
            <button onClick = {handleClick} name = {person.name} id = {person.id}>
                delete
            </button>
        </td>
    </tr>
    )   
}

export default Person