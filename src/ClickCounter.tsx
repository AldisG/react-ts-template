import { useState } from "react";

export const ClickCounter = () => {
  const [count, setcount] = useState(0)
  return (
    <button onClick={() => setcount(prev => prev + 1)}>{count}</button>
  )
}
