import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleCoursePage from "./SingleCoursePage";
import { Checkout } from "../Pages/Checkout";
import { Blog } from "../Pages/Blog";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singlecourse" element={<SingleCoursePage />} />
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/blogs" element={<Blog />}/>
    </Routes>
  );
}

export default AllRoutes;
