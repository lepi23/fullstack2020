import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {
    const Courses = ( { courses }) =>{
      return(
        <div>
          {courses.map(course =>
            <Course key = {course.id} course ={course}/>
          )}
        </div>
      )
    }
    return (
      <div>
        <Courses courses={courses} />
      </div>
    )
  }

  export default App