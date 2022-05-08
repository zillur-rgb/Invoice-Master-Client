import header from "../../Assets/header.jpeg";
import scr1 from "../../Assets/scr1.jpeg";
import scr2 from "../../Assets/scr2.jpeg";
import scr3 from "../../Assets/scr3.jpeg";

const Hero = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto flex lg:flex-row flex-col items-center justify-between my-60 ">
      <div className="text w-full lg:w-2/4">
        <h1 className="text-titleXL font-bold leading-headerLH text-primary my-20">
          Make Your Invoice in Easy Steps Using Our App
        </h1>
        <p className=" font-openSans text-text text-normal leading-textLH my-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          voluptatem cupiditate. Facere ipsa eaque laborum tenetur soluta
          officia totam voluptate! Laudantium nesciunt ullam nulla voluptatum
          impedit voluptates eaque possimus veritatis?
        </p>
        <button className="px-30 py-15 bg-primary text-white font-semibold rounded-full hover:bg-text">
          Get Started
        </button>
      </div>
      <div className="image w-full my-20 lg:my-0 lg:w-2/5 relative">
        <img src={header} alt="header" />
        <img
          src={scr1}
          alt="scr1"
          className="absolute w-64 rounded-lg shadow-xl top-12 -left-11"
        />
        <img
          src={scr2}
          alt="scr2"
          className="absolute w-64 rounded-lg shadow-xl -bottom-11 left-5"
        />
        <img
          src={scr3}
          alt="scr3"
          className="absolute w-64 rounded-lg shadow-xl bottom-32 -right-11"
        />
      </div>
    </div>
  );
};

export default Hero;
