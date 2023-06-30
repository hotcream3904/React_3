import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>Number State : {number}</div>
      <button
        onClick={() => {
          setNumber((currentNum) => {
            return currentNum + 1;
          });
        }}>
        누르면 up
      </button>
    </div>
  );
}

export default App;
