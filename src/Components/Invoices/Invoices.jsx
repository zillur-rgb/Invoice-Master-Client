import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Invoices = ({ invoice }) => {
  const statusStyle =
    invoice.status === "Expired"
      ? " bg-redLight text-red p-10 rounded-md text-center"
      : invoice.status === "Pending"
      ? "bg-yellowLight p-10 text-yellow p-10 rounded-md text-center"
      : "bg-lightGreen p-10 text-btnGreen p-10 rounded-md text-center";
  return (
    <>
      <tr>
        <td className=" my-25 text-center">
          #{invoice.id.slice(invoice.id.length - 5)}
        </td>
        <td className="text-center py-10">{invoice.due.slice(0, 10)}</td>
        <td className="text-center py-10 my-15 text-primary font-semibold">
          {invoice.clientName}
        </td>
        <td className="text-center py-10 my-15">{invoice.clientEmail}</td>
        <td className="text-center py-10 my-15">€{invoice.price}</td>
        <td className={statusStyle}>{invoice.status}</td>
        <td>
          <Link to={`/details/${invoice.id}`}>
            <MdOutlineKeyboardArrowRight className="ml-10 text-2xl cursor-pointer text-primary" />
          </Link>
        </td>
      </tr>
      <tr>
        <td className="py-20"></td>
      </tr>
    </>
  );
};

export default Invoices;
