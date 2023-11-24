import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (prompt) => {
  return (
    <button onClick={prompt.click}>{prompt.text}</button>
  )
}

const StatisticLine = (prompt) => {
  return (
    <td>{prompt.text} {prompt.value}</td>
  )
}

const Statistics = (props) => {

  if (props.totalValue === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>

    )
    
  }
  return (
    <tfoot>
    <h1>statistics</h1>
      <table>
        <tr>  
        <StatisticLine text={props.dpGood} value={props.goodValue} />
        </tr>
        <tr>
          <StatisticLine text={props.dpNeutral} value={props.neutralValue} />
        </tr>
        <tr>
          <StatisticLine text={props.dpBad} value={props.badValue} />
        </tr>
        <tr>
          <StatisticLine text={props.dpAll} value={props.totalValue} />
        </tr>
        <tr>
          <StatisticLine text={props.dpAverage} value={props.averageValue} />
        </tr>
        <tr>
          <StatisticLine text={props.dpPositive} value={props.positivePercentageValue} />
        </tr>
      </table>
    </tfoot>
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
      <h1>give feedback</h1>
      <Button click={() => setGood(good + 1)} text={"good"}/>
      <Button click={() => setNeutral(neutral + 1)} text={"neutral"}/>
      <Button click={() => setBad(bad + 1)} text={"bad"}/>
      <Statistics 
        dpGood={"good"} goodValue={good}
        dpNeutral={"neutral"} neutralValue={neutral}
        dpBad={"bad"} badValue={bad}
        dpAll={"all"} totalValue={total}
        dpAverage={"average"} averageValue={average}  
        dpPositive={"positive"} positivePercentageValue={positivePercentage + "%"} 
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
