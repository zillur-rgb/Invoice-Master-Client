import React from "react";

const PricingDetails = () => {
  const pricing = [
    {
      title: "Personal",
      price: 0,
      allowed: [
        "3 Invoices Per Month",
        "History Deletes Every Month",
        "One Person",
      ],
      notAllowed: [
        "Getting Email Notification.",
        "24x7 Live Support",
        "Send Client Invocie Via Email",
      ],
    },
    {
      title: "Professional",
      price: 15,
      allowed: [
        "15 Invoices Per Month",
        "History Deletes Every 6 Month",
        "Two Person",
        "Getting Email Notification.",
        "24x7 Live Support",
      ],
      notAllowed: ["Send Client Invocie Via Email"],
    },
    {
      title: "Business",
      price: 45,
      allowed: [
        "Unlimited Invoices Per Month",
        "History never gets deleted",
        "Unlimited Person",
        "Getting Email Notification.",
        "24x7 Live Support",
        "Send Client Invocie Via Email",
      ],
      notAllowed: [],
    },
  ];
  return (
    <div className="w-full mb-100 flex lg:flex-row flex-col justify-between">
      {pricing.map((price) => (
        <div
          key={price.title}
          className="price.title mt-60 lg:mt-0 py-40 px-80 bg-white rounded-2xl md:my-0 my-20"
        >
          <h1 className="text-header leading-textLH text-primary font-bold text-center py-30">
            {price.title}
          </h1>
          <ul>
            {price.allowed.map((p, idx) => (
              <li
                key={idx}
                className="leading-textLH font-medium text-text mb-25"
              >
                {p}
              </li>
            ))}
          </ul>
          <ul>
            {price.notAllowed.map((p, idx) => (
              <li key={idx} className="leading-textLH text-black mb-25">
                {p}
              </li>
            ))}
          </ul>
          <div className="flex justify-center my-25">
            <p className=" font-semibold text-primary">€</p>
            <p className=" text-7xl text-primary font-bold flex items-center">
              {price.price}
              <span className=" text-normal text-primary">/ mo</span>
            </p>
          </div>
          <button className=" whitespace-nowrap flex text-normal px-30 py-10 border-2 border-primary hover:text-white text-primary bg-none hover:bg-primary rounded-full mx-auto">
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingDetails;
