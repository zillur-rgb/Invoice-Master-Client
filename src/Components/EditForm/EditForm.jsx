import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../firebase.init";
import InvoiceContext from "../../InvoiceContext/InvoiceContext";

const EditForm = ({ paramsId }) => {
  const { invoices } = useContext(InvoiceContext);
  console.log(invoices);
  const params = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { updateInvoice } = useContext(InvoiceContext);
  const exact = invoices.find((invoice) => invoice.id === params.inId);
  console.log(exact);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clientName: exact?.clientName,
      clientEmail: exact?.clientEmail,
      streetName: exact?.streetName,
      city: exact?.city,
      postcode: exact?.postcode,
      country: exact?.country,
      projectDes: exact?.projectDes,
      price: exact?.price,
      due: exact?.due,
    },
  });

  const onSubmit = (data, e) => {
    const updatedInvoice = {
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      streetName: data.streetName,
      city: data.city,
      postcode: data.postcode,
      country: data.country,
      projectDes: data.projectDes,
      price: data.price,
      due: data.due,
    };

    updateInvoice(updatedInvoice, paramsId);

    navigate(`/details/${paramsId}`);
  };
  return (
    <form className=" w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex sm:flex-row flex-col items-center justify-between gap-5">
        <div className="flex items-start justify-between flex-col w-full sm:w-1/2">
          <label
            htmlFor="clientName"
            className="text-text text-lg font-medium w-full my-2"
          >
            Client Name
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            placeholder="Client Name"
            id="clientName"
            {...register("clientName", { required: true })}
          />
          {errors.clientName?.type === "required" && (
            <p className="text-red font-medium">Client name is required</p>
          )}
        </div>
        <div className="flex items-start justify-between flex-col w-full sm:w-1/2">
          <label
            className="text-text text-lg font-medium w-full my-2"
            htmlFor="clientEmail"
          >
            Client Email
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            type="email"
            placeholder="Client Email"
            id="clientEmail"
            {...register("clientEmail", { required: true })}
          />
          {errors.clientEmail?.type === "required" && (
            <p className="text-red font-medium">Client email is required</p>
          )}
        </div>
      </div>
      <div className="my-3">
        <label
          className="text-text text-lg font-medium w-full my-2"
          htmlFor="streetName"
        >
          Street Name
        </label>
        <input
          className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
          placeholder="Street Name"
          id="streetName"
          {...register("streetName")}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="my-3">
          <label
            className="text-text text-lg font-medium w-full my-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            placeholder="City"
            id="city"
            {...register("city")}
          />
        </div>
        <div className="my-3">
          <label
            className="text-text text-lg font-medium w-full my-2"
            htmlFor="postcode"
          >
            Postcode
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            type="number"
            placeholder="Postcode"
            id="postcode"
            {...register("postcode")}
          />
        </div>
        <div className="my-3">
          <label
            className="text-text text-lg font-medium w-full my-2"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            placeholder="Country"
            id="country"
            {...register("country")}
          />
        </div>
      </div>
      <div className="my-3">
        <label
          className="text-text text-lg font-medium w-full my-2"
          htmlFor="projectDes"
        >
          Project Description
        </label>
        <input
          className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
          placeholder="Project Description"
          id="projectDes"
          {...register("projectDes", { required: true })}
        />
        {errors.projectDes?.type === "required" && (
          <p className="text-red font-medium">
            Project Description is required
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="my-3 w-full sm:w-1/2">
          <label
            className="text-text text-lg font-medium w-full my-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            placeholder="Price"
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.projectDes?.type === "required" && (
            <p className="text-red font-medium">Price is required</p>
          )}
        </div>

        <div className="my-3 w-full sm:w-1/2">
          <label
            className="text-text text-lg font-medium w-full my-2"
            htmlFor="due"
          >
            Due Date
          </label>
          <input
            className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
            type="date"
            placeholder="Due Date"
            id="due"
            {...register("due")}
          />
          {errors.projectDes?.type === "required" && (
            <p className="text-red font-medium">
              Project Description is required
            </p>
          )}
        </div>
      </div>

      <div className="my-3">
        <label
          className="text-text text-lg font-medium w-full my-2"
          htmlFor="OwnerEmail"
        >
          Your Email
        </label>
        <input
          className="w-full border outline-btnGreen px-15 py-10 border-black text-black"
          type="email"
          id="OwnerEmail"
          value={user?.email || ""}
          disabled
        />
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <button
          className="w-4/5 mx-auto bg-primary py-10 text-lightGreen rounded-md hover:bg-text"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
