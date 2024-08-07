import { HiOutlineTruck, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbAntennaBars5 } from "react-icons/tb";
import GeneralStats from "@components/adminPanel/analytics/GeneralStats";
import SalesAnalysis from "@components/adminPanel/analytics/SalesAnalysis";
import RecentOrderSection from "@components/adminPanel/analytics/RecentOrderSection";
import TopProductSection from "@components/adminPanel/analytics/TopProductSection";

const AnalyticsPage = () => {
  const generalStats = [
    { name: "Total Orders", icon: <HiOutlineTruck />, value: "142K" },
    {
    
      name: "Total Sales",
      icon: <AiOutlineDollarCircle />,
      value: "$214K",
    },
    {
    
      name: "Total Visitors",
      icon: <HiOutlineUserGroup />,
      value: "1.5M",
    },
    { name: "Revenue", icon: <TbAntennaBars5 />, value: "$451K" },
  ];

  const salesStats = [
    { key: 0, name: "Income", value: "$75,142.00", percentage: "+0.02%" },
    { key: 1, name: "Expenses", value: "$15,478.00", percentage: "+0.02%" },
    { key: 2, name: "Balance", value: "$145,201.00", percentage: "+0.02%" },
  ];

  const recentOrders = [
    { name: "Macbook Pro 16", time: "1 second ago", price: "$105.55" },
    { name: "Macbook Pro 16", time: "1 second ago", price: "$105.55" },
    { name: "Macbook Pro 16", time: "1 second ago", price: "$105.55" },
    { name: "Macbook Pro 16", time: "1 second ago", price: "$105.55" },
    { name: "Macbook Pro 16", time: "1 second ago", price: "$105.55" },
  ];

  const topProducts = [
    {
      name: "Macbook Pro 16",
      id: "A0BIC066",
      price: "$396.84",
      sold: 6690,
      total: "$6,102,551",
    },
    {
      name: "Macbook Pro 14",
      id: "A0BIC055",
      price: "$710.68",
      sold: 3933,
      total: "$4,429,095",
    },
    {
      name: "Macbook Pro 13",
      id: "A0BIC003",
      price: "$854.08",
      sold: 4349,
      total: "$8,564,233",
    },
    {
      name: "Macbook Pro 14",
      id: "A0BIC073",
      price: "$473.85",
      sold: 2798,
      total: "$3,529,989",
    },
  ];

  return (
    <div className="h-full w-full px-6 py-12 overflow-y-auto">
      <GeneralStats data={generalStats} />

      <SalesAnalysis data={salesStats} />

      <div className="w-full flex justify-between">
        <RecentOrderSection data={recentOrders} />
        <TopProductSection data={topProducts} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
