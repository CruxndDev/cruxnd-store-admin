import Header from "@/components/adminPanel/Header";
import SideBar from "@/components/adminPanel/SideBar";

const AdminPanelLayout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
