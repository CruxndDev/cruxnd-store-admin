import { HiOutlineTruck, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbAntennaBars5 } from "react-icons/tb";
import GeneralStats from "@components/adminPanel/analytics/GeneralStats";
import SalesAnalysis from "@components/adminPanel/analytics/SalesAnalysis";
import RecentOrderSection from "@components/adminPanel/analytics/RecentOrderSection";

const AnalyticsPage = () => {
  const generalStats = [
    { key: 0, name: "Total Orders", icon: <HiOutlineTruck />, value: "142K" },
    {
      key: 1,
      name: "Total Sales",
      icon: <AiOutlineDollarCircle />,
      value: "$214K",
    },
    {
      key: 2,
      name: "Total Visitors",
      icon: <HiOutlineUserGroup />,
      value: "1.5M",
    },
    { key: 3, name: "Revenue", icon: <TbAntennaBars5 />, value: "$451K" },
  ];

  const salesStats = [
    { key: 0, name: "Income", value: "$75,142.00", percentage: "+0.02%" },
    { key: 1, name: "Expenses", value: "$15,478.00", percentage: "+0.02%" },
    { key: 2, name: "Balance", value: "$145,201.00", percentage: "+0.02%" },
  ];

  const recentOrders = [
    { key: 0, name: "Macbook Pro 16", time: "1 second ago", price: "$105.55"},
    { key: 1, name: "Macbook Pro 16", time: "1 second ago", price: "$105.55"},
    { key: 2, name: "Macbook Pro 16", time: "1 second ago", price: "$105.55"},
    { key: 3, name: "Macbook Pro 16", time: "1 second ago", price: "$105.55"},
    { key: 4, name: "Macbook Pro 16", time: "1 second ago", price: "$105.55"},
  ];

  return (
    <div className="h-full w-full px-6 py-12 overflow-y-auto">
      <GeneralStats data={generalStats} />

      <SalesAnalysis data={salesStats} />

      <div className="w-full flex justify-between">
        <RecentOrderSection data={recentOrders} />
        <div className="custom-shadow w-[70%] h-[48vh] rounded-xl"></div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
