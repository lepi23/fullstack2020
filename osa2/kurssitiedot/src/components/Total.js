import React from 'react'

const Total = ( {parts} ) => {
    // tehtävien yhteismäärä
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
        <b>
          Total of {total} exercises
        </b>
    )
  }
  
  export default Total