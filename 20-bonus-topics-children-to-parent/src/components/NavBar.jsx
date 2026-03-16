import React from "react";

const NavBar = (props) => {
  return (
    <div className="h-screen w-full">
      <button
        onClick={() => {
          props.setTheme("Dark");
        }}
        className="p-5 m-5 w-fit text-xl rounded font-semiboldcursor-pointer active:scale-95  bg-amber-400 hover:bg-amber-600"
      >
        Change Theme
      </button>
    </div>
  );
};

export default NavBar;
