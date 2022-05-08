import { AiOutlinePullRequest } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";

const Service = () => {
  return (
    <div className="w-5/6 mx-auto ">
      <div className="serviceHeader flex flex-col md:flex-row items-center justify-between py-60">
        <h1 className="text-title leading-titleLH font-bold text-primary w-full md:w-2/4">
          Invoicing and Tracking Payment is No Longer Cumbersome
        </h1>
        <p className="w-full md:w-2/5 text-text leading-textLH">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          magnam? Assumenda quas illum aperiam magnam!
        </p>
      </div>

      <div className="services flex md:flex-row flex-col gap-12">
        <div className="service-1">
          <div className="w-70 h-70 bg-lightGreen rounded-full flex items-center justify-center">
            <AiOutlinePullRequest className="text-title text-primary" />
          </div>
          <h1 className="text-textHeader text-primary font-semibold my-15">
            Create Easy Way
          </h1>
          <p className="text-text text-normal leading-textLH">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            velit corporis nihil minima minus voluptatem!
          </p>
        </div>
        <div className="service-1 mt-20 md:mt-50">
          <div className="w-70 h-70 bg-lightGreen rounded-full flex items-center justify-center">
            <FaRegEdit className="text-title text-primary" />
          </div>
          <h1 className="text-textHeader text-primary font-semibold my-15">
            Update If Necessary
          </h1>
          <p className="text-text text-normal leading-textLH">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            velit corporis nihil minima minus voluptatem!
          </p>
        </div>
        <div className="service-1 mt-20 md:mt-90">
          <div className="w-70 h-70 bg-lightGreen rounded-full flex items-center justify-center">
            <BiBadgeCheck className="text-title text-primary" />
          </div>
          <h1 className="text-textHeader text-primary font-semibold my-15">
            Track the Deadline and Extend
          </h1>
          <p className="text-text text-normal leading-textLH">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            velit corporis nihil minima minus voluptatem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
