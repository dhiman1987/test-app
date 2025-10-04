import { useState } from 'react'
import './Counter.css'

const DEFAULT_MESSAGE = "Change counter from 0 to 10"

function Counter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const increment = () => {
    if(count < 10){
      setCount((count) => count + 1);
      setMessage(DEFAULT_MESSAGE);
    } else {
      setMessage("Counter reached maximum value");
    }
  }

    const decrement = () => {
    if(count > 0){
      setCount((count) => count - 1);
      setMessage(DEFAULT_MESSAGE);
    } else {
      setMessage("Counter reached minimum value");
    }
  }

  return (
    <>
        <h2>Counter</h2>
        <div data-testid="message">{message}</div>
        <h2 data-testid="count" className='count'>{count}</h2>
        <button data-testid="increment-btn" onClick={increment}>increase</button>
        <button data-testid="decrement-btn" onClick={decrement}>decrease</button>
    </>
  )
}

export default Counter
