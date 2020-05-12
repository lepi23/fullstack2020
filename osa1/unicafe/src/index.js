import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//näyttää arvostelun nimen ja sen määrän
const FeedbackDisplay = (props) => (
  <div>
    <p>
      {props.name} {props.value} 
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
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // tilan hallitsijat eri napeille
  const handleGoodClick = () =>{
    setGood(good +1)
  }
  const handleNeutralClick = () =>{
    setNeutral(neutral +1)
  }
  const handleBadClick = () =>{
    setBad(bad +1)
  }

  return (
    <div>
      <HeadingDisplay text = 'give feedback' />
      <Button handleClick = {handleGoodClick} text='Good'/>
      <Button handleClick = {handleNeutralClick} text='Neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <HeadingDisplay text = 'statistics' />
      <FeedbackDisplay name = 'good' value = {good}/>
      <FeedbackDisplay name = 'neutral' value = {neutral}/>
      <FeedbackDisplay name = 'bad' value = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)