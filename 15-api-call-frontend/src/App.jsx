import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response);
  }
  const fetchData = async () => {
    const fetchrespose = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await fetchrespose.json();
    console.log(data);
  };
  const axiosData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
  };
  const imagesData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button className="btn" onClick={getData}>
        Get Data
      </button>
      <button className="btn" onClick={fetchData}>
        Fetch Data
      </button>
      <button className="btn" onClick={axiosData}>
        Axios Data
      </button>

      <div>
        <button className="btn" onClick={imagesData}>
          Images API
        </button>
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <h3>Hello, {item.author}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
