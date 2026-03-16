import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("The button is Clicked");
  };

  function inputChanging(event) {
    console.log("The input is Chnaging");
    console.log(event.target.value);
  }

  const onWheeling = (event) => {
    if (event > 0) {
      console.log("seedha scrolling");
    } else {
      console.log("ulta scrolling");
    }
  };

  return (
    <>
      <div className="parent">
        <h1>Hello React!!!</h1>
        <button
          className="btn"
          onMouseEnter={function MouseEnter() {
            console.log("MouseEntered");
          }}
          onDoubleClick={btnClicked}
        >
          Click here!
        </button>
        <input
          onChange={inputChanging}
          type="text"
          placeholder="Enter input here"
        />
        <div
          onMouseMove={(event) => {
            console.log(event.clientX);
          }}
          className="box"
        ></div>
      </div>
      <div
        onWheel={(event) => {
          onWheeling(event.deltaY);
        }}
        className="child"
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </>
  );
};

export default App;
