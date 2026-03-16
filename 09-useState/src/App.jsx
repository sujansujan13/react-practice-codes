import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [User, setUser] = useState("sujan");
  const [count, setCount] = useState(0);

  function changeNum() {
    setNum(num + 1);
    setUser("sijan");
    console.log(num);
  }
  const increaseNum = () => {
    setCount(count + 1);
  };

  function decreaseNum() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <h1>value of num is {num} </h1>
        <h1>the name is {User}</h1>
        <button onClick={changeNum} className="btn">
          Click
        </button>
      </div>
      <div className="parent">
        <h1 className="num">{count}</h1>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={increaseNum}>Increase</button>
      </div>
    </>
  );
};

export default App;
