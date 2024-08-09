import OrderDetailsInfoSection from "@components/adminPanel/orders/orderDetails/OrderDetailsInfoSection";
import OrderDetailsProfileSection from "@components/adminPanel/orders/orderDetails/OrderDetailsProfileSection";
import OrderItemsSection from "@components/adminPanel/orders/orderDetails/OrderItemsSection";
import DeliveryNotes from "@components/adminPanel/orders/orderDetails/orderNotes/DeliveryNotes";
import OrderOrdersNote from "@components/adminPanel/orders/orderDetails/orderNotes/OrderOrdersNote";
import OrderTrackingSection from "@components/adminPanel/orders/orderDetails/OrderTrackingSection";

const OrderDetailsPage = ({ params }) => {
  const id = params.id;

  return (
    <div className="h-full w-full flex flex-col px-6 py-12 overflow-y-auto">
      <h2>#{id}</h2>

      <div className="flex justify-between">
        <small>Orders / Order Details</small>

        <OrderDetailsProfileSection />

        <OrderDetailsInfoSection />

        <OrderItemsSection />

        <div>
          <OrderTrackingSection />

          <DeliveryNotes />

          <OrderOrdersNotes />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
