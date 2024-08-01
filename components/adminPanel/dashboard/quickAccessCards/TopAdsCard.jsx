import Image from "next/image";
import pieChart from "@public/piechart.svg";
import { BsThreeDots } from "react-icons/bs";

const TopAdsCard = () => {
  return (
    <div className="w-full h-[53%] rounded-2xl custom-shadow flex flex-col px-6 py-6">
      <div className="font-semibold text-lg flex justify-between items-center mb-8">
        <h3>Top Ads</h3>
        <button className="cursor-pointer w-fit self-center">
        <BsThreeDots />
        </button>
      </div>

      <Image
        src={pieChart}
        alt="Pie Chart"
        width={200}
        height={200}
        className="w-32 mb-6 self-center"
      />

      <div className="adsReachWrapper grid gap-y-2">
        <div>
          <span>Fashion Ads campaign</span>
          <span>38.6k reach</span>
        </div>

        <div>
          <span>Gadget Ads campaign</span>
          <span>30.8k reach</span>
        </div>

        <div>
          <span>Books Ads campaign</span>
          <span>22.5k reach</span>
        </div>

        <div>
          <span>Sports Ads campaign</span>
          <span>5.0k reach</span>
        </div>

        <div>
          <span>Groceries Ads campaign</span>
          <span>3.1k reach</span>
        </div>
      </div>
    </div>
  );
};

export default TopAdsCard;
