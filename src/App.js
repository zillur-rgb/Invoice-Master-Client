import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllPages from "./Pages/AllPages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <AllPages />
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
