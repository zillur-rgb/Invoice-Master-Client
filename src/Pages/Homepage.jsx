import React from "react";
import Hero from "../Components/Hero/Hero";
import Pricing from "../Components/Pricing/Pricing";
import Service from "../Components/Service/Service";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

const Homepage = () => {
  return (
    <div>
      <div className="container mx-auto w-screen ">
        <Hero />
        <Service />
        <ServiceDetails />
      </div>
      <div className="container mx-auto w-screen  rounded-3xl bg-lightGreen">
        <Pricing />
      </div>
    </div>
  );
};

export default Homepage;
<h1>Hello Home</h1>;
