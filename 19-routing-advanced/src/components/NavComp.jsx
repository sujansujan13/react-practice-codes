import { useNavigate } from "react-router-dom";

const NavComp = () => {
  const navigate = useNavigate();
  const btnClicked = () => {
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={btnClicked}
        className=" m-5 px-5 py-3 bg-emerald-400 font-medium text-lg rounded "
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="m-5 px-5 py-3 bg-emerald-400 font-medium text-lg rounded "
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
        className="m-5 px-5 py-3 bg-emerald-400 font-medium text-lg rounded "
      >
        Forward
      </button>
    </div>
  );
};

export default NavComp;
