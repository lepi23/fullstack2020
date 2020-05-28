import React from 'react'
import ReactDOM from 'react-dom'

//Renderöi kurssin tiedot sivustolle course parametrin mukaan
const Course = ( { course } ) =>{
  return(
  <div>
      <Header name = {course.name} />
      <Content parts ={course.parts} />
  </div>
  )
}

const Header = ( { name } ) => {
  //kurssin nimen renderöinti otsikoksi
  return(
    <h1>{name}</h1>
  )
}

const Content = ( { parts } ) => {
  // osat ja niiden tehtävämäärät
  return(
    <div>
        {parts.map(part =>
          <Part key = {part.id} part ={part} />
        )} 
    </div>)
}

const Total = (props) => {
  // tehtävien yhteismäärä
  const parts = props.parts
  return(
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
  )
}
const Part = ( { part } ) => {
  // renderöi yhden osan nimen ja tehtävämäärän
  return(

    <p>
      {part.name} {part.exercises}
    </p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))