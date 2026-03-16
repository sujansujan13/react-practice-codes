import React from "react";

const App = () => {
  const age = localStorage.getItem("age");
  const user = localStorage.getItem("user");
  console.log(user);
  console.log(age);

  localStorage.removeItem("user");
  localStorage.clear();

  const client = {
    username: "Sujan",
    age: 22,
    city: "Kathmandu",
  };
  /*localStorage.setItem("client", client); value becomes [object,object]*/
  localStorage.setItem("client", JSON.stringify(client));
  /*const clientInfo = localStorage.getItem("client");*/
  /*console.log(typeof clientInfo);*/
  const clientInfo = JSON.parse(localStorage.getItem("client"));
  console.log(clientInfo);
  return <div>App</div>;
};

export default App;
