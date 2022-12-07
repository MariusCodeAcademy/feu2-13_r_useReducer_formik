import { useState, useEffect } from 'react';

function Counter(props) {
  // sukurti state counterValue
  const [counterValue, setCounterValue] = useState(0);

  // sukurti fn handleUp, handleDown, handleUpBy, handleReset
  function handleUp() {
    setCounterValue((prevCountValue) => prevCountValue + 1);
    // setCounterValue(counterValue + 1); // not good
  }
  function handleDown() {
    setCounterValue((prevCountValue) => prevCountValue - 1);
  }
  function handleUpBy(howMuch) {
    setCounterValue((prevCountValue) => prevCountValue + howMuch);
  }
  function handleReset() {
    setCounterValue(0);
  }
  // sudeti fn ant mygtuku kad veiktu aplikaicija

  return (
    <div className='card counter'>
      <p>Counter</p>
      <h2>{counterValue}</h2>
      <div className='ctrl'>
        <button onClick={handleUp}>up</button>
        <button onClick={handleDown}>down</button>
        <button onClick={() => handleUpBy(10)}>up by 10</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}
export default Counter;
