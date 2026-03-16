import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Sujan Raj Pandey"
        age={25}
        img="https://images.unsplash.com/photo-1763477080227-6e591f5017ed?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Srijana Pandey"
        age={22}
        img="https://plus.unsplash.com/premium_photo-1766750045504-e142bd8ee057?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Ram Bahadur Thapa"
        age={30}
        img="https://images.unsplash.com/photo-1766543497004-2fd76e88f605?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
