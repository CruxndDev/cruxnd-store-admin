import orderTrackingMap from "@public/assets/orders/orderTrackingMap.svg";
import Image from "next/image";

const OrderTrackingSection = () => {
  return (
    <div className="relative w-full h-[50vh] rounded-lg custom-shadow px-4 py-2 flex justify-end">
        <Image
          src={orderTrackingMap}
          alt="Map image"
          objectFit="cover"
          fill={true}
          className="-z-10"
        />
        <p className="underline">Track Order</p>
    </div>
  );
}
 
export default OrderTrackingSection;