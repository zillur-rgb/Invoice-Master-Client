import axios from "axios";
import React, { useEffect, useState } from "react";

import { MdAddCircle } from "react-icons/md";
import Invoices from "../Components/Invoices/Invoices";

const MyInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  console.log(invoices);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices").then((res) => {
      setInvoices(res.data);
    });
  }, []);
  return (
    <div className="w-5/6 mx-auto my-100">
      <div className="w-5/6 mx-auto">
        <div className="header flex flex-row items-center justify-between">
          <div>
            <h1 className=" font-sans text-4xl font-bold text-primary">
              Invoices
            </h1>
            <p className="text-text my-15">
              You have currently {invoices.length} Invoices available
            </p>
          </div>
          <button className="flex items-center py-10 px-50 rounded-full bg-btn text-primary text-textHeader font-bold hover:bg-lightGreen">
            <MdAddCircle className=" text-4xl" /> Add New
          </button>
        </div>

        <table className="w-full">
          <tr>
            <th className="py-15">Id</th>
            <th className="py-15">Due Date</th>
            <th className="py-15">Client Name</th>
            <th className="py-15">Client Email</th>
            <th className="py-15">Total Amount</th>
            <th className="py-15">Status</th>
          </tr>

          {invoices.map((invoice) => (
            <Invoices invoice={invoice} key={invoice.id} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyInvoices;
