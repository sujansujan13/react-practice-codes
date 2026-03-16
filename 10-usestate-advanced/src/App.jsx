import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(10);
  const [user, setuser] = useState({ name: "sujan", age: 20 });
  const [array, setarray] = useState([10, 20, 30]);
  const increaseNum = () => {
    console.log(num);
    setnum(num + 1);
    console.log(num);
  };
  const changeUser = () => {
    const newUser = { ...user };
    newUser.name = "samay";
    newUser.age = 22;
    setuser(newUser);
  };
  const changeArray = () => {
    const newArray = [...array];
    newArray.push(89);
    console.log(newArray);
    setarray(newArray);
  };
  const changefunction = () => {
    setuser((prev) => ({ ...prev, age: 40 }));
  };
  const increasebatch = () => {
    /*setnum(num + 1);
    setnum(num + 1);
    setnum(num + 1); doesn't increase in batch*/
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
  };
  return (
    <div>
      <h1 className="num">{num}</h1>
      <button onClick={increaseNum} className="btn">
        Click
      </button>
      <div>
        <h1>
          {user.name},{user.age}
        </h1>
        <button onClick={changeUser} className="user">
          Click
        </button>
      </div>
      <div>
        <h1>{array}</h1>
        <button onClick={changeArray} className="array">
          Click
        </button>
      </div>
      <div>
        <h1>
          {user.name},{user.age}
        </h1>
        <button onClick={changefunction} className="function">
          Click
        </button>
      </div>
      <div>
        <h1 className="num">{num}</h1>
        <button onClick={increasebatch} className="btn">
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
