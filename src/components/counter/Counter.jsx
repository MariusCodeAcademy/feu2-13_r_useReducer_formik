import { useState, useEffect } from 'react';

const initCounter = { value: 0 };

function Counter(props) {
  // sukurti state counterValue
  const [counterState, setCounterState] = useState(initCounter);

  // sukurti fn handleUp, handleDown, handleUpBy, handleReset
  function handleUp() {
    setCounterState((prevCountState) => ({ value: prevCountState.value + 1 }));
    // setCounterValue(counterValue + 1); // not good
  }
  function handleDown() {
    setCounterState((prevCountState) => ({ value: prevCountState.value - 1 }));
  }
  function handleUpBy(howMuch) {
    setCounterState((prevCountState) => ({
      value: prevCountState.value + howMuch,
    }));
  }
  function handleReset() {
    setCounterState(initCounter);
  }
  // sudeti fn ant mygtuku kad veiktu aplikaicija

  return (
    <div className='card counter'>
      <p>Counter</p>
      <h2>{counterState.value}</h2>
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
