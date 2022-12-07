import { useState, useEffect } from 'react';

function Counter(props) {
  // sukurti state counterValue
  const [counterValue, setCounterValue] = useState(0);

  // sukurti fn handleUp, handleDown, handleUpBy, handleReset
  function handleUp() {
    // TODO: padaryti kodel reikia su anf atnaujinti pvz setTimeout
    setCounterValue((prevCountValue) => prevCountValue + 1);
    // setCounterValue(counterValue + 1);
  }
  // sudeti fn ant mygtuku kad veiktu aplikaicija

  useEffect(() => {
    console.log('as pasileidziu kai tik baigia krautis komponentas');
    setTimeout(() => {
      setCounterValue((prevCountValue) => prevCountValue + 1);
    }, 4000);
  }, []);

  console.log('as esu pries pat jsx');

  return (
    <div className='card counter'>
      <p>Counter</p>
      <h2>{counterValue}</h2>
      <div className='ctrl'>
        <button onClick={handleUp}>up</button>
        <button>down</button>
        <button>up by 10</button>
        <button>reset</button>
      </div>
    </div>
  );
}
export default Counter;
