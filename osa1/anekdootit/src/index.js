import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//teksti komponentti
const TextDisplay = (props) => {
  return(
    <p>
      {props.text1} {props.value} {props.text2}
    </p>
  )
}
//otsikko komponentti
const HeadingDisplay = (props) => {
  return(
    <div>
      <h1>
        {props.text}
      </h1>
    </div>
    )
}

const randomizeInt = (max) =>
{
  return Math.floor(Math.random() * max)
}
//nappi komponentti
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
        )
  }
const App = (props) => {

  //klikkausten käsittely

  const handleAnecdoteClick = ()=>{
      const selection = randomizeInt(props.anecdotes.length)
      setSelected(selection)
  }
  const handleVoteClick = (props) =>{
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    checkMostVotes()
  }
  const checkMostVotes = () =>
  {
    if (votes[selected]+1 > votes[mostVotes])
    {
      console.log(mostVotes)
      console.log(votes[selected])
      const newMostVotes = selected
      setMostVotes(newMostVotes)
    }
  }
  const points = new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState (new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat))
  const [mostVotes, setMostVotes] = useState(0)

  return (
    <div>
      <HeadingDisplay text = 'Anecdote of the day' />
      <p>
      {props.anecdotes[selected]}
      </p>
      <Button handleClick = {handleAnecdoteClick} text = 'Next anecdote'/>
      <Button handleClick = {handleVoteClick} text = 'Vote'/>
      <TextDisplay text1 = 'has' value = {votes[selected]} text2 = 'votes' />
      <HeadingDisplay text = 'Anecdote with most votes' />
      {props.anecdotes[mostVotes]}
      <TextDisplay text1 = 'has' value = {votes[mostVotes]} text2 = 'votes' />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
