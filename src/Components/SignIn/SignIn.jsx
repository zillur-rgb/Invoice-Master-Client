import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = (data) => {
    console.log(data.firstName);
  };
  return (
    <div className="w-full">
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
      </form>
      <div className="w-5/6 mx-auto flex flex-col sm:flex-row my-20">
        <button className="w-full sm:w-1/2 flex items-center justify-center p-15 border border-primary rounded-md hover:bg-primary hover:text-white mx-10">
          <FcGoogle className="mr-15 text-2xl" /> Sign In with Google
        </button>
        <button className="w-full sm:w-1/2 flex items-center justify-center p-15 border border-primary rounded-md text-primary hover:bg-primary hover:text-white mx-10">
          <BsApple className="mr-15 text-2xl text-slate-900" /> Sign In with
          Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
