import { PiDotsThreeOutline } from "react-icons/pi";

const RecentOrderSection = ({ data }) => {
  return (
    <div className="w-[28%] rounded-xl custom-shadow px-8 lg:px-6 pt-6 pb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Order</h3>
        <PiDotsThreeOutline className="text-xl" />
      </div>

      <div>
        {data.map((item) => (
          <div key={item.key} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-primaryColor h-12 w-14 rounded-md mr-3"></div>

              <div>
                <h4 className="font-semibold mb-1">{item.name}</h4>
                <div className="text-xs">{item.time}</div>
              </div>
            </div>
            <div className="text-secondaryBlue text-sm font-medium">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrderSection;
