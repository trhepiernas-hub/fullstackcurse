import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votearray, setVote] = useState(new Array(props.anecdotes.length).fill(0));

  const handleVote = () => {
    const arrayCopy = [...votearray]; // Crea una copia del array votearray
    arrayCopy[selected] += 1; // Incrementa el voto para la anécdota seleccionada
    setVote(arrayCopy); // Actualiza el estado con la copia modificada
  };
  const mostVoted = () => {
    let b = 0;
    let theMostVoted;
    for (let i = 0; i < votearray.length; i++) {
      const element = votearray[i];
      if (element > b) {
        theMostVoted = props.anecdotes[i];
        b = element
      }
      
    }
    return (
      <div>
        <p>{theMostVoted}</p>
        <p>has {b} votes</p>
      </div>
    );
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br/>
      <p>has {votearray[selected]} votes</p>
      <br/>
      <Button click={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))} text={"next anecdote"}/>
      <Button click={handleVote} text={"Vote"}/>
      <br/>
      <h1>Annecdote with most votes</h1>
      {mostVoted()}
      
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.text}</button>
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
