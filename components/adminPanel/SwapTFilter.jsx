import { IoMdStar } from "react-icons/io";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const SwapTFilter = () => {
  return (
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
  );
};

export default SwapTFilter;
