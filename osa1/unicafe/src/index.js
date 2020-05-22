import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//näyttää arvostelun nimen ja sen määrän
const TextDisplay = (props) => {
  return(
    <p>
      {props.text}
    </p>
  )
}

const StatisticLine = (props) => {
  //.toFixed(2)
  return(
    <tbody>
      <tr>  
        <td>{props.text} </td>
        <td>{props.value} {props.ending}</td>
      </tr>
    </tbody>
  )
}

//näyttää kaikki tilastot
const Statistics = (props) => {
  return(
  <div>
    <table>
        <StatisticLine text = 'good' value = {props.stats.good}/>
        <StatisticLine text = 'neutral' value = {props.stats.neutral}/>
        <StatisticLine text = 'bad' value = {props.stats.bad}/>
        <StatisticLine text = 'all' value = {props.stats.all}/>
        <StatisticLine text = 'average' value ={props.stats.average}/>
        <StatisticLine text = 'positive' value ={props.stats.positivePercentage} ending = ' %'/>
    </table>  
  </div>
  )
}

const HeadingDisplay = (props) => {
  return(
    <div>
      <h1>
        {props.text}
      </h1>
    </div>
    )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [clicks, setClicks] = useState ({
    good: 0, neutral: 0, bad: 0, all: 0, average: 0, positivePercentage: 0  })

  const [otherActions, setOtherActions] = useState ({
     average: 0, positivePercentage: 0  })
  
  const [hasFeedback, setHasFeedback] = useState(false)  

  // tilan käsittelijät eri nappejen klikkauksille
  // handle on yleinen käsittelijä klikkaukselle, joka saa parametrinsa palautteen tyypin mukaan
  const handle = (type) => {
    const newClicks = getClicks()

    if (type === 'good')
    {
      newClicks.good = clicks.good +1
    }
    else if (type === 'neutral')
    {
      newClicks.neutral = clicks.neutral +1
    }
    else if ( type === 'bad')
    {
      newClicks.bad = clicks.bad +1
    }
    newClicks.all =  clicks.all +1
    newClicks.positivePercentage =calculatePositivePercentage(newClicks)
    newClicks.average = calculateAverage(newClicks)
    setClicks(newClicks)
    setHasFeedback(true)
  }

  const handleGoodClick = () =>{
    handle('good')            
  }

  const handleNeutralClick = () =>{
    handle('neutral')   
  }

  const handleBadClick = () =>{
    handle('bad')     
  }
  
  const calculateAverage = (newClicks) =>{
    const newAverage = (newClicks.bad * -1 + newClicks.good * 1)/ newClicks.all
    return newAverage
  }
  const calculatePositivePercentage = (newClicks) =>{

    const percentage = (newClicks.good / (newClicks.all)*100)
    return percentage
  }

  //apufunktio klikkauksien saamista varten
  const getClicks = ()  =>
  {
    const newClicks = {
      ...clicks,
    }
    return newClicks      
  }
  //apufunktio määrittelemään näytetäänkö statistiikka
  const ShowStatistics = () =>
  {
    if (hasFeedback)
    {
      return(<Statistics stats = {clicks} />)
    }
    else
    {
      return(<TextDisplay text = 'No feedback given'/>)
    }
  }

  return(
    <div>
      <HeadingDisplay text = 'give feedback' />
      <Button handleClick = {handleGoodClick} text='Good'/>
      <Button handleClick = {handleNeutralClick} text='Neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <HeadingDisplay text = 'statistics' />
      <ShowStatistics />
    </div>)
        
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)