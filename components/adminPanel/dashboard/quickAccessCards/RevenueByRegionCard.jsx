import { BsThreeDots } from "react-icons/bs";
import rbrMap from "@public/assets/dashboard/revenueByRegion/map.svg";
import newyork49 from "@public/assets/dashboard/revenueByRegion/newyork-49.svg";
import sanfrancisco25 from "@public/assets/dashboard/revenueByRegion/sanfrancisco-25.svg";
import singapore11 from "@public/assets/dashboard/revenueByRegion/singapore-11.svg";
import sydney15 from "@public/assets/dashboard/revenueByRegion/sydney-15.svg";
import Image from "next/image";

const RevenueByRegionCard = () => {
  return (
    <div className="w-[24%] h-[25em] rounded-2xl custom-shadow px-6 py-6">
      <div className="font-semibold text-lg flex justify-between items-center mb-4">
        <h3>Revenue by Region</h3>
        <button className="cursor-pointer w-fit self-center">
          <BsThreeDots />
        </button>
      </div>

      <Image src={rbrMap} alt="Revenue by Region map" height={300} width={300} className="mb-4" />

      <div className="grid gap-y-3">
        <div className="rbrPercentBars">
          <div>
            <span>New York</span>
            <span>49%</span>
          </div>
          <Image src={newyork49} alt="Revenue by Region map" height={10} width={300} />
        </div>

        <div className="rbrPercentBars">
          <div>
            <span>San Francisco</span>
            <span>25%</span>
          </div>
          <Image src={sanfrancisco25} alt="Revenue by Region map" height={10} width={300} />
        </div>

        <div className="rbrPercentBars">
          <div>
            <span>Sydney</span>
            <span>15%</span>
          </div>
          <Image src={sydney15} alt="Revenue by Region map" height={10} width={300} />
        </div>

        <div className="rbrPercentBars">
          <div>
            <span>Singapore</span>
            <span>11%</span>
          </div>
          <Image src={singapore11} alt="Revenue by Region map" height={10} width={300} />
        </div>
      </div>
    </div>
  );
};

export default RevenueByRegionCard;
