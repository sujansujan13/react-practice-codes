import React from "react";

const App = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <input type="text" placeholder="Enter your Name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
