import Link from "next/link";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const OrderSummaryCard = () => {
  return (
    <div className="w-[48%] h-[35em] flex flex-col rounded-2xl custom-shadow px-6 py-6">
      <div className="w-full flex justify-between items-center mb-10">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="custom-shadow rounded-lg p-2 flex justify-between w-[62%]">
          <span>Ongoing Orders</span>
          <span>Completed</span>
          <span>Cancelled</span>
        </div>
      </div>

      <div className="bg-lightGray w-[95%] self-center flex justify-between items-center rounded-lg mb-12 py-3 px-7">
        <div className="bg-accentGreen text-white text-lg rounded-lg px-8 py-2">
          30 orders
        </div>
        <Link href={"/orders"} className="flex items-center">
          <span className="font-semibold mr-2">Manage Orders</span>
          <IoChevronForwardCircleOutline className="text-2xl" />
        </Link>
      </div>

      <div className="orderSummaryCardsWrapper flex justify-between">
        <div>
          <h4>On Delivery</h4>
          <h3>10</h3>
          <p>+20% month over month</p>
        </div>

        <div>
          <h4>Delivered</h4>
          <h3>11</h3>
          <p>+33% month over month</p>
        </div>

        <div>
          <h4>Cancelled</h4>
          <h3>12</h3>
          <p>-8% month over month</p>
        </div>

        <div>
          <h4>Views</h4>
          <h3>240</h3>
          <p>-8% month over month</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
