import OrderDetailsInfoSection from "@components/adminPanel/orders/orderDetails/OrderDetailsInfoSection";
import OrderDetailsProfileSection from "@components/adminPanel/orders/orderDetails/OrderDetailsProfileSection";
import OrderItemsSection from "@components/adminPanel/orders/orderDetails/OrderItemsSection";
import DeliveryNotes from "@components/adminPanel/orders/orderDetails/orderNotes/DeliveryNotes";
import OrderOrdersNotes from "@components/adminPanel/orders/orderDetails/orderNotes/OrderOrdersNotes";
import OrderTrackingSection from "@components/adminPanel/orders/orderDetails/OrderTrackingSection";

const OrderDetailsPage = ({ params }) => {
  const id = params.id;

  return (
    <div className="h-full w-full flex flex-col px-6 py-12 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-3">Order ID #{id}</h2>

      <div className="flex justify-between">
        <div className="w-[25%]">
          <p className="text-gray text-xs font-medium mb-8">Orders / Order Details</p>
          <OrderDetailsProfileSection />
          <OrderDetailsInfoSection />
        </div>

        <div className="w-[73%]">
          <div className="text-gray text-xs font-medium mb-4">
            <p>Date Ordered: 11/03/2024</p>
            <p>Date Delivered: 12/03/2024</p>
          </div>

          <OrderItemsSection />
          
          <div className="relative h-fit">
            <OrderTrackingSection />

            <div className="absolute flex top-[20rem] ml-20">
              <DeliveryNotes />
              <OrderOrdersNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
