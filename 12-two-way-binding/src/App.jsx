import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted by ", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          placeholder="Enter your Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
