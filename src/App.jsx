import { useState } from "react"
import { Button } from "./components/Button";
import { Count } from "./components/Count";

export const App = () => {
  const [count, setCount] = useState(0);
  function add() { setCount(prevNum => prevNum + 1) }
  function subtract() { setCount(prevNum => prevNum - 1) }
  console.log("app rendered")
  return (
    <main>
      <Count
        label=" How many time will Bob say 'state' in this section"
        className=""
      />
      <div className="counter">
        <Button
          className="minus"
          ariaLabel="decrease count"
          onClick={subtract}
          label="-"
        />
        <Count
          label={count}
          className="count"
        />
        <Button
          className="plus"
          ariaLabel="increase count"
          onClick={add}
          label="+"
        />
      </div>
    </main>
  )
}