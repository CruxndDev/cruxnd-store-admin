import Image from "next/image";

const OrderItemsSection = ({ data }) => {
  return (
    <div className="w-full rounded-lg custom-shadow mb-4">
      <div>
        <table className="text-xs font-medium min-w-full overflow-x-auto">
          <thead className="border-b border-primaryColor">
            <tr className="*:text-sm *:text-left *:font-medium *:px-6 *:py-4">
              <th>Items</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((order, index) => (
              <tr key={index}>
                <td className="flex items-center px-6 py-3">
                  <div className="bg-lightGray text-4xl flex items-center justify-center rounded-xl mr-12 p-3">
                    {order.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{order.name}</div>
                    <div className="text-gray-500">{order.description}</div>
                    <div className="text-yellow-600">
                      {"★".repeat(Math.floor(order.rating))}{" "}
                      <span className="text-gray-500">
                        ({order.rating}) {order.ratingsCount} ratings
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">${order.price.toFixed(2)}</td>

                <td className="px-6 py-4">x{order.quantity}</td>

                <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-5 py-2 rounded-full ${
                      order.status === "Cancelled"
                        ? "bg-lightGray"
                        : order.status === "Delivered"
                        ? "bg-primaryColor text-white"
                        : "bg-accentGreen text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItemsSection;
