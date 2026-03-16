import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="py-5 px-20 flex flex-row justify-between items-center bg-cyan-600 rounded">
      <h2 className=" text-2xl font-bold">The Mountains</h2>
      <ul className="flex gap-10 items-center underline font-medium  ">
        <li className="text-lg ">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg ">
          <Link to="/about">About</Link>
        </li>
        <li className="text-lg ">
          <Link to="/course">Courses</Link>
        </li>
        <li className="text-lg ">
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
