import Link from "next/link";

const OrderSummaryCard = () => {
  return (
    <div>
      <div>
        <h2>Order Summary</h2>
        <div>
          <span>Ongoing Orders</span>
          <span>Completed</span>
          <span>Cancelled</span>
        </div>
      </div>

      <div>
        <div>30 orders</div>
        <Link href={"/orders"}>Manage Orders</Link>
      </div>

      <div>
        <div>
          <h4>On Delivery</h4>
          <h3>10</h3>
          <p>+20% month over month</p>
        </div>

        <div>
          <h4>Delivered</h4>
          <h3>11</h3>
          <p>+33% month over month</p>
        </div>

        <div>
          <h4>Cancelled</h4>
          <h3>12</h3>
          <p>-8% month over month</p>
        </div>

        <div>
          <h4>Views</h4>
          <h3>240</h3>
          <p>-8% month over month</p>
        </div>

      </div>
    </div>
  );
};

export default OrderSummaryCard;
