import Header from "@/components/adminPanel/Header";
import SideBar from "@/components/adminPanel/SideBar";
import { PiPackage, PiShoppingCart } from "react-icons/pi";
import { TbClipboardText, TbUsersGroup } from "react-icons/tb";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiSolidDashboard, BiBarChartAlt2 } from "react-icons/bi";

const AdminPanelLayout = ({ children }) => {
  const menuLinks = [
    { name: "Dashboard", icon: <BiSolidDashboard />, link: "/dashboard" },
    { name: "Products", icon: <PiPackage />, link: "/products" },
    { name: "Analytics", icon: <BiBarChartAlt2 />, link: "/analytics" },
    { name: "Report", icon: <TbClipboardText />, link: "/report" },
    { name: "Orders", icon: <PiShoppingCart />, link: "/orders" },
    { name: "Customer", icon: <TbUsersGroup />, link: "/customer" },
    { name: "Integrations", icon: <HiOutlineBadgeCheck />, link: "/integrations" },
    { name: "Profile", icon: <CgProfile />, link: "/profile" },
  ];

  return (
    <div className="flex h-screen text-primaryColor">
      <SideBar menuItems={menuLinks} />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
