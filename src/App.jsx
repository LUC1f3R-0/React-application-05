import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0);
  function add() { setCount(prevNum => prevNum + 1) }
  function subtract() { setCount(prevNum => prevNum - 1) }
  return (
    <main>
      <h1>How many time will Bob say "state" in this section</h1>
      <div className="counter">
        <button className="minus" aria-label="Decrease count" onClick={subtract}>-</button>
        <h2 className="count">{count}</h2>
        <button className="plus" aria-label="increase count" onClick={add}>+</button>
      </div>
    </main>
  )
}