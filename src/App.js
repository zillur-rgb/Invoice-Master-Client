import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllPages from "./Pages/AllPages";
import "react-toastify/dist/ReactToastify.css";
import { InvoiceProvider } from "./InvoiceContext/InvoiceContext";

function App() {
  return (
    <div>
      <InvoiceProvider>
        <Navbar />
        <AllPages />
        <Footer />
        <ToastContainer autoClose={1000}></ToastContainer>
      </InvoiceProvider>
    </div>
  );
}

export default App;
