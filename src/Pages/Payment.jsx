import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { priceid } = useParams();
  return (
    <div>
      <h1>This is a payment page for {priceid}</h1>
    </div>
  );
};

export default Payment;
