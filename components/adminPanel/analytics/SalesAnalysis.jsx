import salesAnalysisGraph from "@public/assets/analytics/salesAnalysisGraph.svg";
import Image from "next/image";
import { FaRegCalendarAlt, FaCaretUp } from "react-icons/fa";
import { PiCaretDown } from "react-icons/pi";

const SalesAnalysis = ({ data }) => {
  return (
    <div className="w-full custom-shadow rounded-xl mb-8 px-8 lg:px-6 py-6">
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Sales Analysis</h3>

        <div className="flex items-center">
          <small className="text-sm font-medium mr-4">Sort by</small>

          <div className="flex items-center rounded-md border border-primaryColor mr-3 px-3 py-1">
            <FaRegCalendarAlt className="mr-3" />
            <span className="text-sm font-medium mr-3">July 2022</span>
            <PiCaretDown className="text-sm" />
          </div>

          <div className="flex items-center rounded-md border border-primaryColor px-3 py-1">
            <span className=" text-sm font-medium mr-3">Month</span>
            <PiCaretDown className="text-sm" />
          </div>
        </div>
      </div>

      <div className="flex divide-x-2 mb-10">
        {data.map((item) => (
          <div key={item.key} className="flex flex-col pr-8 pl-12 first:pl-0">
            <div className="text-sm font-medium mb-2">{item.name}</div>

            <div className="text-sm font-medium flex items-center">
              <h3 className="text-xl font-semibold mr-4">{item.value}</h3>
              <span className="bg-primaryColor text-accentGreen font-normal rounded-md px-2 py-[6px] flex">
                <span className="text-xs mr-1">{item.percentage}</span>
                <FaCaretUp />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <Image
          src={salesAnalysisGraph}
          alt="Sales Analysis"
          width={1000}
          height={300}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SalesAnalysis;
