
import {useState} from 'react'

export function Counter(){
    const [counter, setCounter] = useState(0)
  
    function handleIncrementCounterButton(){
      setCounter(counter => counter + 1)
    }
    function handleResetCounterButton(){
      setCounter(0)
    }
  
    return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleIncrementCounterButton()}>Increment counter</button>
      <button onClick={() => handleResetCounterButton()}>Reset counter</button>
    </div>
    )
  }
  