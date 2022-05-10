import React from "react";

const InvoiceCard = ({ details }) => {
  return (
    <div className="bg-bg px-40 py-40 my-50">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-medium text-text">Invoice for</h1>
          <p className="text-l font-bold text-primary my-10">
            {details.clientName}
          </p>
          <p className="text-black">{details.clientEmail}</p>
          <p className="text-black">
            {details.streetName}, {details.city}, {details.postcode}
          </p>
        </div>
        <p>
          Due Date:{" "}
          <span className="font-bold text-red">{details.due.slice(0, 10)}</span>
        </p>
      </div>

      <div>
        <h1 className="text-text text-2xl  my-20">Project Description</h1>
        <div className="flex justify-between items-center my-20">
          <p className=" text-2xl text-primary font-semibold">
            {details.projectDes}
          </p>
          <p className="text-2xl text-text">€{details.price}</p>
        </div>
        <div className="border my-20"></div>
        <p className=" text-right text-text font-bold">
          Amount to Pay:{" "}
          <span className="text-4xl text-primary ml-30">€{details.price}</span>
        </p>
      </div>
    </div>
  );
};

export default InvoiceCard;
