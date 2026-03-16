import React from "react";
import Card from "./components/card.jsx";
import Navbar from "./components/Navbar.jsx";
const user = "Sujan";
const age = 22;
const App = () => {
  return (
    <>
      <div>
        <h1>My name is {user}</h1>
        <h2>I am {age} years old</h2>
      </div>
      <Navbar />
      <Card />
    </>
  );
};

export default App;
