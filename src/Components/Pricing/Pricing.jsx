import React from "react";
import PricingDetails from "./PricingDetails";

const Pricing = () => {
  return (
    <div className="w-5/6 mx-auto my-100 py-50">
      <div className="flex flex-col md:flex-row items-center justify-between py-60">
        <h1 className="text-title leading-titleLH font-bold text-primary w-full md:w-2/4">
          Invoicing and Tracking Payment is No Longer Cumbersome
        </h1>
        <p className="w-full md:w-2/5 text-text leading-textLH">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          magnam? Assumenda quas illum aperiam magnam!
        </p>
      </div>
      <PricingDetails />
    </div>
  );
};

export default Pricing;
