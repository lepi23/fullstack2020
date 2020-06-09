import React, { useState, useEffect }from 'react'
import axios from 'axios'

const RenderWeather = ( { city } ) => {

    const [weather, setWeather] = useState([])
    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: {city}
      }
    useEffect(() => {
      axios
        .get('http://api.weatherstack.com/current',{params}
        ) 
        .then(response => {
          //console.log('promise fulfilled')
          setWeather(response.data)
        })
    },[])
    if (weather.length < 1 )
    {
        return(
            <p>
                weather not found
            </p>
        )
    }
    else 
    {
        return(  
        <div>
            <p>
                temperature: {weather.current.temperature} Celsius
             </p> 
             <img 
                 src={weather.current.weather_icons[0]} width="200" height="200">
             </img>
             <p>
                 wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}
             </p>
         </div>
    )
    }
    
}

export default RenderWeather
/*
        <div>
           <p>
               {weather.current.temperature}
            </p> 
            <img 
                src={weather.current.weather_icons[0]} width="500" height="300">
            </img>
        </div>
*/