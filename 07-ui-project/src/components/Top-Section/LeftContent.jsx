import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroContent from "./HeroContent";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-between h-full w-1/3">
      <HeroContent />
      <Arrow />
    </div>
  );
};

export default LeftContent;
