import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleOnSubmit = (data) => {
    console.log(data.firstName);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-15">
        <label className="w-1/5" htmlFor="firstName">
          FirstName
        </label>
        <input
          className=" border px-5 py-10 outline-text text-md text-text w-full"
          placeholder="Billie"
          {...register("firstName")}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-15">
        <label className="w-1/5" htmlFor="lastName">
          Lastname
        </label>
        <input
          className=" border px-5 py-10 outline-text text-md text-text w-full"
          placeholder="Eilish Mach"
          {...register("lastName", { required: true })}
        />
      </div>
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
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-15">
        <label className="w-1/5 whitespace-nowrap" htmlFor="secretWord">
          Secret Word
        </label>
        <input
          className=" border px-5 py-10 outline-text text-md text-text w-full"
          placeholder="It will be necessary for resetting the password."
          {...register("secretWord")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className=" w-full flex items-end justify-end mt-15">
        <button
          className=" border px-35 rounded-full py-15 outline-text text-md  cursor-pointer hover:bg-primary hover:text-lightGreen bg-text text-lightGreen"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default SignUp;
