import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//näyttää arvostelun nimen ja sen määrän
const FeedbackDisplay = (props) => (
  <div>
    <p>
      {props.name} {props.value} {props.ending}
    </p>
  </div>
)
const Statistics = (props) => 
(
  <div>
    <p>
      <FeedbackDisplay name = 'good' value = {props.stats.good}/>
      <FeedbackDisplay name = 'neutral' value = {props.stats.neutral}/>
      <FeedbackDisplay name = 'bad' value = {props.stats.bad}/>
      <FeedbackDisplay name = 'all' value = {props.stats.all}/>
      <FeedbackDisplay name = 'average' value ={props.stats.average}/>
      <FeedbackDisplay name = 'positive' value ={props.stats.positivePercentage} ending = ' %'/>
    </p>
  </div>
)


const HeadingDisplay = (props) => (
  <div>
    <h1>
      {props.text}
    </h1>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [clicks, setClicks] = useState ({
    good: 0, neutral: 0, bad: 0, all: 0, average: 0, positivePercentage: 0  })

  const [otherActions, setOtherActions] = useState ({
     average: 0, positivePercentage: 0  })
  
    

  // tilan käsittelijät eri nappejen klikkauksille
  
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

  return (
    <div>
      <HeadingDisplay text = 'give feedback' />
      <Button handleClick = {handleGoodClick} text='Good'/>
      <Button handleClick = {handleNeutralClick} text='Neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <HeadingDisplay text = 'statistics' />
      <Statistics stats = {clicks} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)