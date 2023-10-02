import { useState } from "react";

function App() {
  let [value, setvalue] = useState(15);
  // let value = 5;
  const addValue = () => {
    if (value < 20) {
      value = value + 1;
      setvalue(value);
    } else {
      setvalue(value);
    }
  };
  const removeval = () => {
    if (value > 0) {
      value = value - 1;
      setvalue(value);
    } else {
      setvalue(value);
    }
  };
  return (
    <>
      <h1>It wil go up till 20 and go down till 0</h1>
      <h2> value Counter : {value} </h2>
      <button onClick={addValue}> Add Value </button>
      <button onClick={removeval}> Remove Value </button>
      <h2> value Counter : {value} </h2>
    </>
  );
}

export default App;
