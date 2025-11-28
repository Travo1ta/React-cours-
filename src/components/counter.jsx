import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button 
        type="button" 
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
        style={{ margin: "0 5px", padding: "5px 10px" }}
      >
        -
      </button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button 
        type="button" 
        onClick={() => setCount(count + 1)}
        style={{ margin: "0 5px", padding: "5px 10px" }}
      >
        +
      </button>
    </>
  );
};

export default Counter;