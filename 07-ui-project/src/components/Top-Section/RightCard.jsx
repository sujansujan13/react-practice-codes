import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-65  rounded-4xl overflow-hidden relative  ">
      <img
        className="h-full w-full object-cover"
        src={props.users.img}
        alt=""
      />
      <RightCardContent id={props.id} users={props.users} />
    </div>
  );
};

export default RightCard;
