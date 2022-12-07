function Counter(props) {
  // sukurti state counterValue

  // sukurti fn handleUp, handleDown, handleUpBy, handleReset

  // sudeti fn ant mygtuku kad veiktu aplikaicija

  return (
    <div className='card counter'>
      <p>Counter</p>
      <h2>0</h2>
      <div className='ctrl'>
        <button>up</button>
        <button>down</button>
        <button>up by 10</button>
        <button>reset</button>
      </div>
    </div>
  );
}
export default Counter;
