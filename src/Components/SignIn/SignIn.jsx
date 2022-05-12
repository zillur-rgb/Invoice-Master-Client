import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  let errorMessage;
  if (error || googleError) {
    errorMessage = error?.message || googleError?.message;
  }

  if (loading || googleLoading) {
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
        <div className=" w-full flex items-end justify-end mt-15">
          <button
            className=" border px-35 rounded-full py-15 outline-text text-md  cursor-pointer hover:bg-primary hover:text-lightGreen bg-text text-lightGreen"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <h1 className="text-red text-lg font-medium">{errorMessage}</h1>
      </form>
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
