import OrderDetailsInfoSection from "@components/adminPanel/orders/orderDetails/OrderDetailsInfoSection";
import Image from "next/image";
import orderTrackingMap from "@public/assets/orders/orderTrackingMap.svg";
import TrackingOrderNotes from "@components/adminPanel/orders/orderTracking/TrackingOrderNotes";
import TrackingDeliveryNotes from "@components/adminPanel/orders/orderTracking/TrackingDeliveryNotes";

const OrderTrackingPage = ({ params }) => {
  const { id } = params;

  return (
    <div className="w-full h-full flex justify-between px-6 py-12 overflow-y-auto">
      <div className="w-[25%] flex flex-col">
        <div>
          <h4 className="text-lg font-semibold mb-4">Ongoing Delivery</h4>
          <OrderDetailsInfoSection orderID={id} />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Others</h4>
          <OrderDetailsInfoSection orderID={id} />
        </div>
      </div>

      <div className="w-[70%] h-fit">
        <div className="relative w-full h-[130vh] flex flex-col justify-end">
          <Image
            src={orderTrackingMap}
            alt="Map image"
            objectFit="cover"
            fill={true}
            className="-z-10"
          />

            <div className="w-full relative -bottom-[50%] pl-4">
              <div className="flex justify-between mb-4">
                <OrderDetailsInfoSection orderID={id} width={"21vw"} marginBottom={"0"} />

                <TrackingDeliveryNotes />
              </div>

              <TrackingOrderNotes width={"100%"} />
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
