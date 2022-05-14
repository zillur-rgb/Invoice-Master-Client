import React, { useContext } from "react";

import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import Invoices from "../Components/Invoices/Invoices";
import InvoiceContext from "../InvoiceContext/InvoiceContext";

const MyInvoices = () => {
  // const [invoices, setInvoices] = useState([]);
  // console.log(invoices);
  const { invoices } = useContext(InvoiceContext);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/invoices").then((res) => {
  //     setInvoices(res.data);
  //   });
  // }, []);
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
          <Link to="/addnew">
            <button className="flex items-center py-10 px-50 rounded-full bg-btn text-primary text-textHeader font-bold hover:bg-lightGreen">
              <MdAddCircle className=" text-4xl" /> Add New
            </button>
          </Link>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              <th className="py-15">Id</th>
              <th className="py-15">Due Date</th>
              <th className="py-15">Client Name</th>
              <th className="py-15">Client Email</th>
              <th className="py-15">Total Amount</th>
              <th className="py-15">Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <Invoices invoice={invoice} key={invoice.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInvoices;
