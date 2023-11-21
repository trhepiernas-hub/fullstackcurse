import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {

  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p><Part part={props.part1} exercises={props.exercises1} /></p>
      <p><Part part={props.part2} exercises={props.exercises2} /></p>
      <p><Part part={props.part3} exercises={props.exercises3} /></p>
    </div>
  )
}

const Total = (props) => {
  return <p>Número de ejercicios {props.total}</p>
}

const App = () => {
  const course = 'Desarrollo de aplicaciones Half Stack'
  const part1 = 'Fundamentos de React'
  const exercises1 = 10
  const part2 = 'Usando props para pasar datos'
  const exercises2 = 7
  const part3 = 'Estado de un componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
