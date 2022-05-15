import axios from "axios";
import { createContext, useEffect, useState } from "react";

const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices").then((res) => {
      console.log(res.data);
      setInvoices(res.data);
    });
  }, []);

  const addNewInvoice = (newInvoice) => {
    axios.post("http://localhost:5000/api/invoices", newInvoice).then((res) => {
      setInvoices(invoices.concat(res.data));
    });
  };

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices, addNewInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export default InvoiceContext;
