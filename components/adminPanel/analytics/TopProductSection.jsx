import Link from "next/link";
import { PiDotsThreeOutline } from "react-icons/pi";

const TopProductSection = ({ data }) => {
  return (
    <div className="w-[70%] h-fit rounded-xl custom-shadow px-8 lg:px-6 pt-6 pb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top Products</h2>
        <Link href="/analytics" className="text-secondaryBlue text-sm">
          View All
        </Link>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left text-sm font-normal py-2">Product Name</th>
            <th className="text-left text-sm font-normal py-2">Price</th>
            <th className="text-left text-sm font-normal py-2">Sold</th>
            <th className="text-left text-sm font-normal py-2">Total</th>
            <th className="text-left text-sm font-normal py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td className="py-2 flex items-center">
                <div className="h-10 w-12 bg-primaryColor rounded-md mr-4"></div>
                <div>
                  <div className="font-medium mb-1">{product.name}</div>
                  <div className="text-xs font-normal">{product.id}</div>
                </div>
              </td>

              <td className="font-medium text-sm py-2">{product.price}</td>

              <td className="font-medium text-sm py-2">{product.sold}</td>

              <td className="font-medium text-sm py-2">{product.total}</td>

              <td className="py-2">
                <PiDotsThreeOutline className="text-xl" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductSection;
