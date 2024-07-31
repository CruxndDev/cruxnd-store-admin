import MessagesCard from "@/components/adminPanel/dashboard/quickAccessCards/MessagesCard";
import OrderSummaryCard from "@/components/adminPanel/dashboard/quickAccessCards/OrderSummaryCard";
import RevenueByRegionCard from "@/components/adminPanel/dashboard/quickAccessCards/RevenueByRegionCard";
import TopAdsCard from "@/components/adminPanel/dashboard/quickAccessCards/TopAdsCard";
import NetIncomeCard from "@/components/adminPanel/dashboard/statCards/NetIncomeCard";
import ProductViewCard from "@/components/adminPanel/dashboard/statCards/ProductViewCard";
import TotalCustomersCard from "@/components/adminPanel/dashboard/statCards/TotalCustomers";
import TotalOrdersCard from "@/components/adminPanel/dashboard/statCards/TotalOrdersCard";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col px-10 py-12 overflow-y-scroll">
      <div className="flex justify-between mb-6">
        <div>
          <h1>SwapT</h1>
        </div>
        <div>
          <div>
            <h3>Filter Period</h3>
            <p>4th April 2024 - 2nd September 2025</p>
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
}
 
export default Dashboard;