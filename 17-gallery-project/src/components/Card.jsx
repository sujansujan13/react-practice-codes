import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.image.url} target="_blank">
        <div className="h-70 w-70 overflow-hidden ">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={props.image.download_url}
            alt=""
            /*loading="lazy"
                style={{ backgroundColor: "#444" }}*/
          />
        </div>
        <h2 className="font-bold text-xl">{props.image.author}</h2>
      </a>
    </div>
  );
};

export default Card;
