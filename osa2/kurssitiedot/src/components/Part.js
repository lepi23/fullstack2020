import React from 'react'
const Part = ( { part } ) => {
    // renderöi yhden osan nimen ja tehtävämäärän
    return(
  
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }

  export default Part