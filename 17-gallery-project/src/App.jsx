import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "@mui/material/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=8`,
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      loading...
    </h3>
  );
  if (data.length > 0) {
    printUserData = data.map((item, index) => {
      return (
        <div key={index}>
          <Card image={item} />
        </div>
      );
    });
  }
  return (
    <div className="h-screen overflow-auto w-full bg-black text-white p-4  ">
      <div className="text-2xl py-4 flex flex-wrap gap-5">{printUserData} </div>
      <div className="flex justify-center   ">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded-full"
          onChange={(event, value) => {
            setIndex(value);
            setData([]);
          }}
          className="text-2xl"
          sx={{
            "& .MuiPaginationItem-root": {
              width: "3rem",
              height: "3rem",
              color: "white",
              borderColor: "white",
              borderRadius: "50%",
            },
            "& .Mui-selected": {
              backgroundColor: "red", // current page background
              color: "white", // current page text color
              fontWeight: "bold", // optional: make it bold
            },
          }}
        />
      </div>
    </div>
  );
};

export default App;

/* import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "@mui/material/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=8`
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      loading...
    </h3>
  );
  if (data.length > 0) {
    printUserData = data.map((item, index) => {
      return (
        <div key={index}>
          <Card image={item} />
        </div>
      );
    });
  }
  return (
    <div className="h-screen overflow-auto w-full bg-black text-white p-4  ">
      <h1 className="absolute top-0 left-0 p-4 text-5xl bg-red-500 m-4 rounded-xl">
        {index}
      </h1>
      <div className="text-2xl py-4 flex flex-wrap gap-5">{printUserData}</div>
      <div className="flex gap-5 justify-center items-center  p-4">
        <button
          // if(index>1)
         // {setIndex(index-1)} 
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          disabled={index === 1}
          onClick={() => {
            setIndex(index - 1);
            setData([]);
          }}
          className="bg-amber-500 text-xl p-2 rounded active:scale-95 "
        >
          Prev
        </button>
        <Pagination count={10} variant="outlined" shape="rounded" />
        <button
          onClick={() => {
            setIndex(index + 1);
            setData([]);
          }}
          className="bg-amber-500 text-xl p-2 rounded active:scale-95 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App; */
