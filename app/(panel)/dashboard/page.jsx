import MessagesCard from "@/components/adminPanel/dashboard/quickAccessCards/MessagesCard";
import OrderSummaryCard from "@/components/adminPanel/dashboard/quickAccessCards/OrderSummaryCard";
import RevenueByRegionCard from "@/components/adminPanel/dashboard/quickAccessCards/RevenueByRegionCard";
import TopAdsCard from "@/components/adminPanel/dashboard/quickAccessCards/TopAdsCard";
import NetIncomeCard from "@/components/adminPanel/dashboard/statCards/NetIncomeCard";
import ProductViewCard from "@/components/adminPanel/dashboard/statCards/ProductViewCard";
import TotalCustomersCard from "@/components/adminPanel/dashboard/statCards/TotalCustomers";
import TotalOrdersCard from "@/components/adminPanel/dashboard/statCards/TotalOrdersCard";
import SwapTFilter from "@components/adminPanel/SwapTFilter";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col px-6 py-12 overflow-y-auto">
      <SwapTFilter />

      <div className="dashBoardStatCardsWrapper flex justify-between mb-4">
        <NetIncomeCard />
        <TotalOrdersCard />
        <ProductViewCard />
        <TotalCustomersCard />
      </div>

      <div className="flex justify-between">
        <OrderSummaryCard />

        <div className="w-[26%] flex flex-col">
          <TopAdsCard />
          <MessagesCard />
        </div>

        <RevenueByRegionCard />
      </div>
    </div>
  );
};

export default Dashboard;
