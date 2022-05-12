import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Features from "./Features";
import Testimonials from "./Testimonials";
import PricingPage from "./PricingPage";
import Authentication from "./Authentication";
import MyInvoices from "./MyInvoices";
import Details from "./Details";
import RequireAuth from "../Components/RequireAuth/RequireAuth";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signin" element={<Authentication />} />
      <Route
        path="/MyInvoices"
        element={
          <RequireAuth>
            <MyInvoices />
          </RequireAuth>
        }
      />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default AllPages;
