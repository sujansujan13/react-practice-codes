import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "Light" ? "Dark" : "Light");
        }}
        className="my-4 mx-15 p-3 bg-green-300 text-xl font-medium rounded-xl cursor-pointer active:scale-95"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Button;
