import NetIncomeCard from "@/components/adminPanel/dashboard/statCards/NetIncomeCard";
import ProductViewCard from "@/components/adminPanel/dashboard/statCards/ProductViewCard";
import TotalCustomersCard from "@/components/adminPanel/dashboard/statCards/TotalCustomers";
import TotalOrdersCard from "@/components/adminPanel/dashboard/statCards/TotalOrdersCard";

const Dashboard = () => {
  return (
    <>
      <div>
        <div>
          <h1>SwapT</h1>
        </div>
        <div>
          <div>
            <h3>Filter Period</h3>
            <p>4th April 2024 - 2nd September 2025</p>
          </div>
        </div>
      </div>

      <div>
        <NetIncomeCard />
        <TotalOrdersCard />
        <ProductViewCard />
        <TotalCustomersCard />
      </div>

      <div>
        
      </div>
    </>
  );
}
 
export default Dashboard;