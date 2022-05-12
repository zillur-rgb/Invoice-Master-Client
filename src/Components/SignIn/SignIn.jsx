import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [updatePassword, updating] = useUpdatePassword(auth);
  const [forgotPass, setForgotPass] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  let errorMessage;
  if (error || googleError) {
    errorMessage = error?.message || googleError?.message;
  }

  if (loading || googleLoading || updating) {
    toast("Loading... Please wait...");
  }

  if (user || googleUser) {
    toast("Loading... Please wait...");
    navigate("/myinvoices");
  }

  const { register, handleSubmit } = useForm();
  const handleOnSubmit = async (data, e) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await e.target.reset();
  };
  return (
    <div className="w-full">
      <h1 className="text-3xl text-primary font-medium">Sign In Here</h1>
      <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-15">
          <label className="w-1/5 whitespace-nowrap" htmlFor="email">
            Email Address
          </label>
          <input
            className=" border px-5 py-10 outline-text text-md text-text w-full"
            placeholder="billi@eilish.mach"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-15">
          <label className="w-1/5" htmlFor="password">
            Password
          </label>
          <input
            className=" border px-5 py-10 outline-text text-md text-text w-full"
            placeholder="****"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className=" w-full flex items-center justify-between mt-15">
          <button
            className=" ml-28 border px-16 rounded-full py-15 outline-text text-md  cursor-pointer hover:bg-primary hover:text-lightGreen bg-text text-lightGreen"
            type="submit"
          >
            Sign In
          </button>
          <p
            className=" cursor-pointer hover:text-primary"
            onClick={() => setForgotPass(!forgotPass)}
          >
            Forgot Password? Click here
          </p>
        </div>
        <h1 className="text-red text-lg font-medium">{errorMessage}</h1>
      </form>
      <div className={`text-center my-12 ${forgotPass ? "block" : "hidden"}`}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="border px-5 py-10 outline-text text-md text-text"
          value={resetEmail}
          onChange={({ target }) => setResetEmail(target.value)}
        />
        <button
          className=" border border-text text-text px-15 py-10 bg-none hover:bg-text hover:text-white"
          onClick={() => {
            updatePassword(resetEmail);
            toast("Reset Password Sent", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setResetEmail("");
          }}
        >
          Send Reset Email
        </button>
      </div>
      <div className="w-5/6 mx-auto flex flex-col sm:flex-row my-20">
        <button
          className="w-full sm:w-1/2 flex items-center justify-center p-15 border border-primary rounded-md hover:bg-primary hover:text-white mx-10"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <FcGoogle className="mr-15 text-2xl" /> Sign In with Google
        </button>
        <button className="w-full sm:w-1/2 flex items-center justify-center p-15 border border-primary rounded-md text-primary hover:bg-primary hover:text-white mx-10">
          <BsApple className="mr-15 text-2xl text-slate-900" /> Sign In with
          Apple
        </button>
      </div>
    </div>
  );
};

export default SignIn;
