import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Botoai = (prompt) => {
  return (
    <button onClick={prompt.click}>{prompt.text}</button>
  )
}

const Display = (prompt) => {
  return (
    <p>{prompt.text}</p>
  )
}

const Statistics = (props) => {
  return (
    <div>
    <h1>statistics</h1>
      <Display text={props.dpGood} />
      <Display text={props.dpNeutral} />
      <Display text={props.dpBad} />
      <Display text={props.dpAll} />
      <Display text={props.dpAverage} />
      <Display text={props.dpPositive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  const average = total > 0 ? (good - bad) / total : 0

  const positivePercentage = total > 0 ? (good / total) * 100 : 0

  return (
    <div>
      <h1>give feedbak</h1>
      <Botoai click={() => setGood(good + 1)} text={"good"}/>
      <Botoai click={() => setNeutral(neutral + 1)} text={"neutral"}/>
      <Botoai click={() => setBad(bad + 1)} text={"bad"}/>
      <Statistics dpGood={"good " + good} dpNeutral={"neutral " + neutral} dpBad={"bad " + bad} dpAll={"all " + total} dpAverage={"average " + average } dpPositive={"positive " + positivePercentage + " %"} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
