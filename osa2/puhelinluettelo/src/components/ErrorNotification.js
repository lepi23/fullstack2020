import React from 'react'
//virheilmoitus komponentti
const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
      
    )
  }
  
  export default ErrorNotification
  