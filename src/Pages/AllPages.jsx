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
import AddInvoice from "./AddInvoice";
import EditInvoice from "./EditInvoice";
import Payment from "./Payment";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signin" element={<Authentication />} />
      <Route path="/addnew" element={<AddInvoice />} />
      <Route path="/editinvoice/:inId" element={<EditInvoice />} />
      <Route
        path="/MyInvoices"
        element={
          <RequireAuth>
            <MyInvoices />
          </RequireAuth>
        }
      />
      <Route path="/details/:id" element={<Details />} />
      <Route
        path="/payment/:priceid"
        element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AllPages;
