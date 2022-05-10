import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = (data) => {
    console.log(data.firstName);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex justify-between items-center mt-15">
        <label className="w-1/5" htmlFor="email">
          Email Address
        </label>
        <input
          className=" border px-5 py-10 outline-text text-md text-text w-full"
          placeholder="billi@eilish.mach"
          type="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex justify-between items-center mt-15">
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
  );
};

export default SignIn;
