import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvoiceCard from "../Components/InvoiceCard/InvoiceCard";
import InvoiceContext from "../InvoiceContext/InvoiceContext";

const Details = () => {
  const navigate = useNavigate();
  const { invoices, updateInvoice } = useContext(InvoiceContext);
  const params = useParams();
  const [details, setDetails] = useState({});
  // console.log(details);

  useEffect(() => {
    axios
      .get(
        `https://shielded-taiga-84182.herokuapp.com/api/invoices/${params.id}`
      )
      .then((res) => {
        setDetails(res.data);
      });
  }, [params.id]);

  const statusStyle =
    details.status === "Expired"
      ? "bg-redLight text-red py-10 px-20 rounded-md text-center"
      : details.status === "Pending"
      ? "bg-yellowLight py-10 text-yellow px-20 rounded-md text-center"
      : "bg-lightGreen py-10 text-btnGreen px-20 rounded-md text-center";

  const handleIfPaid = (id) => {
    const exact = invoices.find((item) => item.id === id);
    const updatedInvoice = {
      ...exact,
      status: "Paid",
    };
    updateInvoice(updatedInvoice, id);
  };

  return (
    <div className="w-3/5 mx-auto my-100">
      <div className="header flex flex-col md:flex-row items-center justify-between px-20 py-40 bg-bg rounded-lg">
        <div className="flex items-center">
          <h1 className="text-4xl text-primary font-semibold mr-20">Details</h1>
          <p className={statusStyle}>{details.status}</p>
        </div>
        <div>
          <Link to={`/editinvoice/${details.id}`}>
            <button className="px-60 rounded-full text-white font-bold hover:bg-yellowLight hover:text-yellow py-3 bg-yellow mx-10">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleIfPaid(details.id)}
            className="px-30 rounded-full text-white font-bold hover:bg-lightGreen hover:text-btnGreen py-3 bg-primary mx-10"
          >
            Mark as Paid
          </button>
        </div>
      </div>
      <InvoiceCard details={details} />
    </div>
  );
};

export default Details;
