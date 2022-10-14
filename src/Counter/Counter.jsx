import { useState, useCallback } from "react";



const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => setCount((prev) => prev + 1), [])
  const handleDecrease = useCallback(() => setCount((prev) => prev - 1), [])
  
  return (
    <>
      <div className='counterDiv'>
        <button className="minus-button" onClick={handleDecrease}>-</button>
        <button className="plus-button" onClick={handleIncrease}>+</button>
        <p>Count: {count}</p>
      </div>
    </>

  );
}

export default Counter;