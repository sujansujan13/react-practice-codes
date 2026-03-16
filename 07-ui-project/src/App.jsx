import React from "react";
import TopSection from "./components/Top-Section/TopSection";
import MiddleSection from "./components/Middle-section/MiddleSection";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1637979910474-38e3ad8d5cab?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "royalblue",
      intro: "",
      tags: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
      color: "lightred",
      intro: "",
      tags: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1707064892275-a3088e8240be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwYXQlMjB3b3JrJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D",
      color: "lightseagreen",
      intro: "",
      tags: "Underbanked",
    },
  ];
  return (
    <div>
      <TopSection users={users} />
      <MiddleSection />
    </div>
  );
};

export default App;
