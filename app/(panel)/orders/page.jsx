import RecentOrdersTable from "@components/adminPanel/orders/RecentOrdersTable";
import { FaPlus } from "react-icons/fa6";
import { LuDownloadCloud, LuListFilter, LuSearch } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { orderHistory } from "@utils/arrays";

const OrdersPage = () => {
  const OrderHistoryArray = orderHistory;

  return (
    <div className="h-full w-full flex flex-col px-6 py-12 overflow-y-auto">
      <div className="mb-8 flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Order history</h1>
          <p className="text-gray text-sm font-medium">
            Detailed breakdown of all orders.
          </p>
        </div>

        <div className="text-sm font-medium h-fit flex items-center">
          <button className="border border-mediumGray rounded-md mr-3 px-4 py-[6px] flex items-center">
            <LuDownloadCloud className="text-lg mr-2" />
            <span className="h-fit">Download CSV</span>
          </button>
          <button className="bg-primaryColor text-white rounded-md px-4 py-[6px] flex items-center">
            <FaPlus className="mr-2" />
            <span>Add</span>
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium flex border border-mediumGray rounded-md divide-x-[1px] divide-mediumGray w-fit mb-12 *:px-4 *:py-2">
          <button className="bg-lightGray">All</button>
          <button>Completed</button>
          <button>Cancelled</button>
        </div>

        <div className="bg-lightGray w-full rounded-lg mb-8 p-4 flex justify-between items-center">
          <div className="text-gray w-[30%] h-fit relative">
            <input
              type="text"
              className="text-md w-full border border-mediumGray rounded-md px-10 py-[6px]"
              placeholder="Search order history"
            />
            <LuSearch className="absolute left-3 top-2 text-lg" />
          </div>

          <div className="text-sm font-medium flex items-center">
            <button className="bg-white border border-mediumGray rounded-md mr-3 px-4 py-[6px] flex items-center">
              <CiCalendar className="text-xl mr-2" />
              <span>Jan 6, 2024 - Jan 13, 2024</span>
            </button>

            <button className="bg-white border border-mediumGray rounded-md px-4 py-[6px] flex items-center">
              <LuListFilter className="text-xl mr-2" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <RecentOrdersTable data={OrderHistoryArray} />
      </div>
    </div>
  );
};

export default OrdersPage;
