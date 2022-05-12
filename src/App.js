import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllPages from "./Pages/AllPages";

function App() {
  return (
    <div>
      <Navbar />
      <AllPages />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
