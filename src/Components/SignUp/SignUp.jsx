import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updateError, updating] = useUpdateProfile(auth);

  let errorMessage;
  if (error || updateError) {
    errorMessage = error?.message || updateError?.message;
  }

  if (loading || updating) {
    toast("Lading, please wait");
  }

  if (user) {
    console.log(user);
    navigate("/myinvoices");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleOnSubmit = async (data, e) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
    await updateProfile({
      displayName: data.firstName,
    });
    await e.target.reset();
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <h1 className="text-3xl text-primary font-medium mb-10">Register Here</h1>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-15">
        <label className="w-1/5" htmlFor="firstName">
          Firstname
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
      <h1 className="text-red text-lg font-medium">{errorMessage}</h1>
    </form>
  );
};

export default SignUp;
