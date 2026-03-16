import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div>
      <ul className="flex gap-8 text-xl font-medium ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>{theme}</li>
      </ul>
    </div>
  );
};

export default Nav2;
