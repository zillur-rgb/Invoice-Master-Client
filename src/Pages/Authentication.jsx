import React, { useState } from "react";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";

const Authentication = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="container mx-auto w-screen">
      <div className="w-5/6 flex flex-col lg:flex-row mx-auto justify-between">
        <div className="w-full lg:w-2/6 bg-primary text-white rounded-xl my-30 py-50 px-35">
          <div className=" mb-10 lg:mb-125 pb-10 lg:pb-50">
            <h1 className="text-lightGreen text-3xl mb-10">
              Sign in to Get Started
            </h1>
            <p className="lg:block hidden opacity-80 leading-6 mt-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
              nesciunt fuga cumque accusamus, a iure quam incidunt? Fugit!
            </p>
          </div>

          <div className="mt-10 lg:mt-125 pt-10 lg:pt-125">
            <button
              className="mb-10  bg-text px-20 py-15 w-full rounded-full cursor-pointer hover:opacity-70 focus:outline-dashed"
              onClick={() => setSignIn(false)}
            >
              Create New Account
            </button>{" "}
            <br></br>
            <button
              className="mt-10 bg-text px-40 py-15 w-full rounded-full cursor-pointer hover:opacity-70 focus:outline-dashed"
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          </div>
        </div>

        <div className="w-full lg:w-3/5 my-10 lg:my-30 py-10 lg:py-50 px-35">
          {signIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
