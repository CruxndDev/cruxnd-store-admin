import MessagesCard from "@/components/adminPanel/dashboard/quickAccessCards/MessagesCard";
import OrderSummaryCard from "@/components/adminPanel/dashboard/quickAccessCards/OrderSummaryCard";
import RevenueByRegionCard from "@/components/adminPanel/dashboard/quickAccessCards/RevenueByRegionCard";
import TopAdsCard from "@/components/adminPanel/dashboard/quickAccessCards/TopAdsCard";
import NetIncomeCard from "@/components/adminPanel/dashboard/statCards/NetIncomeCard";
import ProductViewCard from "@/components/adminPanel/dashboard/statCards/ProductViewCard";
import TotalCustomersCard from "@/components/adminPanel/dashboard/statCards/TotalCustomers";
import TotalOrdersCard from "@/components/adminPanel/dashboard/statCards/TotalOrdersCard";

import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col px-10 py-12 overflow-y-scroll">
      <div className="flex justify-between mb-6">
        <div className="h-fit flex items-center">
          <h1 className="font-bold text-xl mr-3">SwapT</h1>
          <span className="flex items-center mr-1">
            <IoMdStar className="gradient-star" />
            <IoMdStar className="gradient-star" />
            <IoMdStar className="gradient-star" />
            <IoMdStar className="gradient-star" />
            <IoMdStar className="gradient-star" />
          </span>
          <span className="font-medium">(5.0)</span>
        </div>
        <div className="flex ">
          <button className="w-fit h-fit">
            <IoChevronDownCircleOutline className="text-3xl mr-1" />
          </button>

          <div className="font-medium">
            <h3 className="text-sm">Filter Period</h3>
            <p className="text-xs">4th April 2024 - 2nd September 2025</p>
          </div>
        </div>
      </div>

      <div className="dashBoardStatCardsWrapper flex justify-between mb-4">
        <NetIncomeCard />
        <TotalOrdersCard />
        <ProductViewCard />
        <TotalCustomersCard />
      </div>

      <div className="flex justify-between">
        <OrderSummaryCard />

        <div className="w-[25%] flex flex-col">
          <TopAdsCard />
          <MessagesCard />
        </div>

        <RevenueByRegionCard />
      </div>
    </div>
  );
};

export default Dashboard;
