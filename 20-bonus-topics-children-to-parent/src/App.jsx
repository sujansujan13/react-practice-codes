import React, { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <div className="p-5 m-5 font-medium text-3xl">
      <h1>The Theme is {theme}</h1>
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
