import React from 'react'
import Part from './Part'
const Content = ( { parts } ) => {
    // osat ja niiden tehtävämäärät
    return(
      <div>
          {parts.map(part =>
            <Part key = {part.id} part ={part} />
          )} 
      </div>)
  }
export default Content