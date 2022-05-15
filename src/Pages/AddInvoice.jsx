import React from "react";
import InvoiceForm from "../Components/InvoiceForm/InvoiceForm";

const AddInvoice = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="w-5/6 mx-auto my-12">
        <h1 className=" font-sans text-4xl font-bold text-primary my-5">
          Add Your Invoice Here
        </h1>
        <InvoiceForm />
      </div>
    </div>
  );
};

export default AddInvoice;
