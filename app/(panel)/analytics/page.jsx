import { HiOutlineTruck, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbAntennaBars5 } from "react-icons/tb";
import GeneralStats from "@components/adminPanel/analytics/GeneralStats";

const AnalyticsPage = () => {
  const generalStats = [
    { key: 0, name: "Total Orders", icon: <HiOutlineTruck />, value: "142k" },
    {
      key: 1,
      name: "Total Sales",
      icon: <AiOutlineDollarCircle />,
      value: "$214k",
    },
    {
      key: 2,
      name: "Total Visitors",
      icon: <HiOutlineUserGroup />,
      value: "1.5M",
    },
    { key: 3, name: "Revenue", icon: <TbAntennaBars5 />, value: "$451k" },
  ];

  return (
    <div className="h-full w-full px-6 py-12 overflow-y-auto">
      <GeneralStats data={generalStats} />

      <div className="custom-shadow w-full h-[65vh] mb-8 rounded-xl"></div>

      <div className="w-full flex justify-between">
        <div className="custom-shadow w-[28%] h-[50vh] rounded-xl"></div>
        <div className="custom-shadow w-[70%] h-[48vh] rounded-xl"></div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
