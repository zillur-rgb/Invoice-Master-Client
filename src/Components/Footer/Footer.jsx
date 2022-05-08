import { FiArrowUpRight } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const footerArary = [
    {
      title: "General",
      options: ["Features", "Why Invoice Master", "Pricing", "Testimonials"],
    },
    {
      title: "Press",
      options: ["Contact Us", "Customers"],
    },

    {
      title: "Legal",
      options: ["Terms & Conditions", "Privacy Policy", "Cookies"],
    },
  ];
  return (
    <div className="bg-deepGreen">
      <div className="container mx-auto">
        <div className="w-5/6 mx-auto">
          <div className="py-30 flex items-center justify-between flex-col md:flex-row">
            <h1 className="text-text text-3xl font-semibold">Invoice Master</h1>
            <div className="buttons flex items-center">
              <button className="flex items-center text-lightGreen text-textHeader">
                Get Help <FiArrowUpRight />
              </button>

              <button className=" whitespace-nowrap flex text-normal px-15 py-10 border-2 bg-text border-deepGreen text-deepGreen hover:text-white bg-none hover:bg-primary rounded-full">
                Get Started
              </button>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row py-30">
              {footerArary.map((footer) => (
                <div className="w-1/4">
                  <h1 key={footer.title} className="text-lightGreen font-bold">
                    {footer.title}
                  </h1>
                  <ul className="flex flex-col">
                    {footer.options.map((option, idx) => (
                      <li key={idx} className="text-lightGreen my-2">
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h1 className="text-lightGreen text-textHeader font-semibold">
                  Connect With Us
                </h1>
                <div className="mt-20 flex items-center">
                  <BsFacebook className="text-title text-lightGreen mx-1" />
                  <TiSocialInstagramCircular className="text-5xl text-lightGreen mx-1" />
                  <AiFillTwitterCircle className=" text-4xl text-lightGreen mx-1" />
                  <FaTiktok className="text-title text-lightGreen mx-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
