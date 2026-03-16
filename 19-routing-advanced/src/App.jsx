import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/kids";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import NavComp from "./components/NavComp";

const App = () => {
  return (
    <div>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<h1>Product Page</h1>} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        {/*<Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
       <NavComp />
      <Footer />
    </div>
  );
};

export default App;
