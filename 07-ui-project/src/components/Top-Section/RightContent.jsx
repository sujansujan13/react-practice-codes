import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-4 p-4 w-3/4"
    >
      {props.users.map(function (elem, index) {
        return <RightCard key={index} id={index} users={elem} />;
      })}
    </div>
  );
};

export default RightContent;
