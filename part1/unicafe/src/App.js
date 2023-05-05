import { useState } from 'react'
import Button from './components/Button'
import StatList from './components/StatList'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  if(good === 0 && bad === 0 && neutral === 0){
    return (
      <div>
        <h1>give feedback</h1>
        <Button text='good' handleClick={handleClickGood}></Button>
        <Button text='neutral' handleClick={handleClickNeutral}></Button>
        <Button text='bad' handleClick={handleClickBad}></Button>
        <h1>Statistics</h1>
        <p>No feedback given</p>
    </div>
    );
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleClickGood}></Button>
      <Button text='neutral' handleClick={handleClickNeutral}></Button>
      <Button text='bad' handleClick={handleClickBad}></Button>
      <h1>Statistics</h1>
      <StatList values={{good, neutral, bad}}/>
    </div>
  );
}

export default App