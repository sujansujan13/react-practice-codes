import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between py-3 px-30 bg-black shadow-2xl rounded">
      <h1 className="text-xl  rounded p-2 items-center ">REACT</h1>
      <ul className="flex flex-row gap-10 text-lg items-center underline  ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
