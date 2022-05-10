import details from "../../Assets/details.jpeg";
import list from "../../Assets/list.jpeg";

const ServiceDetails = () => {
  return (
    <div className="w-5/6 mx-auto my-100">
      <div className="flex flex-col lg:flex-row justify-between items-center pb-100">
        <img
          src={details}
          alt="details"
          className="w-full lg:w-2/4 shadow-2xl rounded-xl lg:mb-0 mb-35"
        />
        <div className="w-full lg:w-2/5">
          <h1 className="text-title font-bold text-primary leading-titleLH">
            Get the details of the invoice you created and Update when needed
          </h1>
          <p className="text-text leading-textLH mt-25">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            corporis ratione dolorum nulla officiis adipisci sed mollitia
            consectetur natus, magni reiciendis inventore quis ea assumenda. Ea
            distinctio qui, deleniti vero sequi modi quisquam sapiente ullam
            error officia harum autem iste.
          </p>
          <p className="text-text leading-textLH mt-25">
            Lorem ipsum dolor, consectetur natus, magni reiciendis inventore
            quis ea assumenda. Ea distinctio qui, deleniti vero sequi modi
            quisquam sapiente ullam error officia harum autem iste.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center pb-100">
        <img
          src={list}
          alt="list"
          className="w-full lg:w-2/4 shadow-2xl rounded-xl lg:mb-0 mb-35"
        />
        <div className="w-full lg:w-2/5">
          <h1 className="text-title font-bold text-primary leading-titleLH lg:mt-0 mt-35">
            Check all the invoices from a tabular data and add new invoices.
          </h1>
          <p className="text-text leading-textLH mt-25">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            corporis ratione dolorum nulla officiis adipisci sed mollitia
            consectetur natus, magni reiciendis inventore quis ea assumenda. Ea
            distinctio qui, deleniti vero sequi modi quisquam sapiente ullam
            error officia harum autem iste.
          </p>
          <p className="text-text leading-textLH mt-25">
            Lorem ipsum dolor, consectetur natus, magni reiciendis inventore
            quis ea assumenda. Ea distinctio qui, deleniti vero sequi modi
            quisquam sapiente ullam error officia harum autem iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
