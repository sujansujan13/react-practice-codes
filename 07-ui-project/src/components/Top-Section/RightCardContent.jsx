import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full text-base font-semibold h-10 w-10 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div className="space-y-12">
        <p className="text-xl text-shadow-2xs leading-relaxed text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
          corporis.
        </p>
        <div className="flex justify-between">
          <button
            style={{ background: props.users.color }}
            className=" text-white font-semibold px-3 py-2 rounded-full  "
          >
            {props.users.tags}
          </button>
          <button
            style={{ background: props.users.color }}
            className=" text-white font-bold px-3 py-2 rounded-full  "
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
