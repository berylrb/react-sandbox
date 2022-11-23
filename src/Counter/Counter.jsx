import { useState, useCallback } from "react";
import styles from './Counter.module.css'



const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => setCount((prev) => prev + 1), [])
  const handleDecrease = useCallback(() => setCount((prev) => prev - 1), [])
  const reset = () => setCount(0)

  return (
    <>
      <div className={styles.counterDiv}>
        <p>Count: {count}</p>
        <div className={styles.buttonContainer}>
          <div className={styles.addSubButtons}>
            <button className={styles.minusButton} onClick={handleDecrease}>-</button>
            <button className={styles.plusButton} onClick={handleIncrease}>+</button>
          </div>
          <button className={styles.resetButton} onClick={reset}>reset</button>
        </div>

      </div>
    </>

  );
}

export default Counter;