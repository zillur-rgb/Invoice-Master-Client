import axios from "axios";
import { createContext, useEffect, useState } from "react";

const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);
  const { data, setData } = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices").then((res) => {
      // console.log(res.data);
      setInvoices(res.data);
    });
  }, []);
  const addNewInvoice = (newInvoice) => {
    axios.post("http://localhost:5000/api/invoices", newInvoice).then((res) => {
      setInvoices(invoices.concat(res.data));
    });
  };

  const updateInvoice = (updatedInvoice, id) => {
    const exact = invoices.find((invoice) => invoice.id === id);
    axios
      .put(`http://localhost:5000/api/invoices/${id}`, updatedInvoice)
      .then((res) => {
        // console.log(res.data);
        setInvoices(
          invoices.map((invoice) => (invoice.id !== id ? invoice : res.data))
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <InvoiceContext.Provider
      value={{ invoices, setInvoices, updateInvoice, addNewInvoice }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export default InvoiceContext;
