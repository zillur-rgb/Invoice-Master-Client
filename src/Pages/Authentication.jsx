import React from "react";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";

const Authentication = () => {
  return (
    <div className="container mx-auto w-screen">
      <div className="w-5/6 flex flex-col md:flex-row mx-auto justify-between">
        <div className="w-2/6 bg-primary text-white rounded-xl my-30 py-50 px-35">
          <div className="mb-125 pb-50">
            <h1 className="text-lightGreen text-3xl mb-10">Get Started</h1>
            <p className=" opacity-80 leading-6 mt-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
              nesciunt fuga cumque accusamus, a iure quam incidunt? Fugit!
            </p>
          </div>

          <div className="mt-125 pt-125">
            <button className="mb-10  bg-text px-20 py-15 w-full rounded-full cursor-pointer hover:opacity-70 focus:outline-dashed">
              Create New Account
            </button>{" "}
            <br></br>
            <button className="mt-10 bg-text px-40 py-15 w-full rounded-full cursor-pointer hover:opacity-70 focus:outline-dashed">
              Sign In
            </button>
          </div>
        </div>

        <div className="w-3/5 my-30 py-50 px-35">
          <SignUp />
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
