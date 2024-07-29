import Header from "@/components/adminPanel/Header";
import SideBar from "@/components/adminPanel/SideBar";

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="flex h-screen text-primaryColor">
      <SideBar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="bg-red-500 flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
