import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default AllPages;
