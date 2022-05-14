import userEvent from "@testing-library/user-event";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth } from "../firebase.init";

const AddInvoice = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-5/6 mx-auto">
      <div className="w-5/6 mx-auto my-12">
        <h1 className=" font-sans text-4xl font-bold text-primary my-5">
          Add Your Invoice Here
        </h1>
        <form className=" w-4/5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-start justify-between flex-col w-1/2">
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
                {...register("clientName")}
              />
            </div>
            <div className="flex items-start justify-between flex-col w-1/2">
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
                {...register("clientEmail")}
              />
            </div>
          </div>
          <div>
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
          <div>
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
                htmlFor="Postcode"
              >
                Postcode
              </label>
              <input
                className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
                type="number"
                placeholder="Postcode"
                id="Postcode"
                {...register("Postcode")}
              />
            </div>
            <div className="my-3">
              <label
                className="text-text text-lg font-medium w-full my-2"
                htmlFor="Country"
              >
                Country
              </label>
              <input
                className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
                placeholder="Country"
                id="Country"
                {...register("Country")}
              />
            </div>
          </div>
          <div className="my-3">
            <label
              className="text-text text-lg font-medium w-full my-2"
              htmlFor="ProjectDes"
            >
              Project Description
            </label>
            <input
              className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
              placeholder="Project Description"
              id="ProjectDes"
              {...register("ProjectDes")}
            />
          </div>
          <div className="my-3">
            <label
              className="text-text text-lg font-medium w-full my-2"
              htmlFor="Price"
            >
              Price
            </label>
            <input
              className="w-full border outline-btnGreen px-15 py-10 border-text text-text"
              placeholder="Price"
              id="Price"
              {...register("Price")}
            />
          </div>

          <div className="my-3">
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
              value={user?.email}
              disabled
            />
          </div>
          <div className="w-full flex items-center justify-center my-5">
            <button
              className="w-4/5 mx-auto bg-primary py-10 text-lightGreen rounded-md hover:bg-text"
              type="submit"
            >
              Add New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInvoice;
