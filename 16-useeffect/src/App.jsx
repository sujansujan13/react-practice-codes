import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  useEffect(
    function () {
      console.log("use effect is running");
    },
    [num]
  );

  const changeA = () => {
    console.log("a is changed");
  };
  const changeB = () => {
    setB(b - 1);
    console.log("b is changing");
  };
  useEffect(() => {
    changeA();
    console.log("useEffect is running");
  }, [a]);

  return (
    <>
      <div className="h1">
        <h1>num is {num}</h1>
        <h1>num is {num2}</h1>
      </div>
      <div>
        <button
          onMouseEnter={() => {
            setNum(num + 1);
          }}
          onMouseLeave={() => {
            setNum2(num2 + 10);
          }}
          className="btn"
        >
          Hover
        </button>
      </div>
      <div className="parent">
        <h1 className="num">a is {a}</h1>
        <h1 className="num">b is {b}</h1>
        <button
          className="change"
          onClick={(changeA) => {
            setA(a + 1);
          }}
        >
          Increase A
        </button>
        <button
          className="change  "
          onClick={(changeB) => {
            setB(b - 1);
          }}
        >
          Decrease B
        </button>
      </div>
    </>
  );
};

export default App;
