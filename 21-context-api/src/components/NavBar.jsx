import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";
import { ThemeDataContext } from "../context/ThemeContext";

const NavBar = () => {
  return (
    <div className="py-3 px-15 flex justify-between items-center bg-neutral-950 rounded">
      <Link
        to="/"
        className="text-3xl font-bold bg-blue-600 h-fit w-fit p-2 rounded italic  "
      >
        Cricketians
      </Link>
      <Nav2 />
    </div>
  );
};

export default NavBar;
