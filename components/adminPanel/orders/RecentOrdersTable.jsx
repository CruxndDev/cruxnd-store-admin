import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { LuArrowDown } from "react-icons/lu";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const RecentOrdersTable = ({ data }) => {
  return (
    <div className="text-gray rounded-xl border-2 border-lightGray">
      <table className="text-xs font-medium min-w-full overflow-x-auto">
        <thead>
          <tr className="text-left border-b border-mediumGray *:font-medium *:p-4">
            <th>
              <input
                type="checkbox"
                className="h-5 w-5 border border-lightGray rounded-xl checked:bg-secondaryBlue checked:border-transparent focus:outline-none outline-none focus:hidden cursor-pointer"
              />
            </th>
            <th>Name</th>
            <th>Order ID</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>
              <div className="flex items-center">
                <span className="mr-1">Delivery date</span>
                <LuArrowDown className="text-md" />
              </div>
            </th>
            <th>Status</th>
            <th>Product Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <tr
              key={index}
              className="border-b border-mediumGray *:px-4 *:py-2"
            >
              <td>
                <input
                  type="checkbox"
                  className="h-5 w-5 border border-lightGray rounded-xl checked:bg-secondaryBlue checked:border-transparent focus:outline-none outline-none focus:hidden cursor-pointer"
                />
              </td>
              <td>
                <div className="flex flex-row items-center">
                  <Image
                    src={order.image}
                    alt="profile"
                    width={30}
                    height={30}
                    className="w-8 h-8 rounded-full mr-4"
                  />
                  <span>{order.name}</span>
                </div>
              </td>
              <td>{order.orderId}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.deliveryDate}</td>
              <td>
                <div
                  className={`w-fit rounded-full px-2 py-1 flex items-center ${
                    order.status === "Cancelled"
                      ? "bg-gray bg-opacity-10"
                      : order.status === "Delivered"
                      ? "bg-accentGreen bg-opacity-10"
                      : "bg-accentLightBlueShade bg-opacity-10  "
                  }`}
                >
                  <GoDotFill
                    className={`mr-1 ${
                      order.status === "Cancelled"
                        ? "text-gray"
                        : order.status === "Delivered"
                        ? "text-accentGreen"
                        : "text-accentLightBlueShade"
                    }`}
                  />
                  <span
                    className={`${
                      order.status === "Cancelled"
                        ? "text-gray"
                        : order.status === "Delivered"
                        ? "text-accentDarkGreen"
                        : "text-secondaryBlue"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </td>
              <td className="whitespace-pre-wrap">
                {order.productDescription}
              </td>
              <td className="text-blue-500">
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button className="font-medium border border-mediumGray rounded-lg px-3 py-[6px] flex items-center">
          <RiArrowLeftLine className="text-lg mr-[6px]" />
          <span>Previous</span>
        </button>

        <div className="text-gray space-x-2 flex *:px-4 *:py-2">
          <button className="text-accentLightBlueShade bg-secondaryBlue bg-opacity-10 rounded-md">
            1
          </button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>9</button>
          <button>10</button>
        </div>
        <button className="font-medium border border-mediumGray rounded-lg px-3 py-[6px] flex items-center">
          <span>Next</span>
          <RiArrowRightLine className="text-lg ml-[6px]" />
        </button>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
