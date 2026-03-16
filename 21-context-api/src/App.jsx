import React, { useContext, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Button from "./components/Button";
import { ThemeDataContext } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div
      className={`h-screen w-full transition-colors duration-300
       ${theme === "Dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <NavBar />
      <Button />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
