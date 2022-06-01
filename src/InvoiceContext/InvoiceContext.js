import axios from "axios";
import { createContext, useEffect, useState } from "react";

const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);
  const { data, setData } = useState({});

  console.log(invoices);

  useEffect(() => {
    axios
      .get("https://powerful-waters-55190.herokuapp.com/api/invoices")
      .then((res) => {
        // console.log(res.data);
        setInvoices(res.data);
      });
  }, []);
  const addNewInvoice = (newInvoice) => {
    axios
      .post(
        "https://powerful-waters-55190.herokuapp.com/api/invoices",
        newInvoice
      )
      .then((res) => {
        setInvoices([...invoices, res.data]);
      });
  };

  const updateInvoice = (updatedInvoice, id) => {
    // const exact = invoices.find((invoice) => invoice.id === id);
    axios
      .put(
        `https://powerful-waters-55190.herokuapp.com/api/invoices/${id}`,
        updatedInvoice
      )
      .then((res) => {
        setInvoices(
          invoices.map((invoice) => (invoice.id !== id ? invoice : res.data))
        );
        console.log(res.data);
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
