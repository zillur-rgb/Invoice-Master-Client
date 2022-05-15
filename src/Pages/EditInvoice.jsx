import { useContext } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../Components/EditForm/EditForm";
import InvoiceContext from "../InvoiceContext/InvoiceContext";

const EditInvoice = () => {
  const params = useParams();

  return (
    <div className="w-4/5 mx-auto">
      <div className="w-4/5 mx-auto">
        <h1>Edit Your Invoice Here</h1>
        <EditForm paramsId={params.inId} />
      </div>
    </div>
  );
};

export default EditInvoice;
