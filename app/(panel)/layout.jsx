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
    { name: "Products", icon: <PiPackage />, link: "/dashboard" },
    { name: "Analytics", icon: <BiBarChartAlt2 />, link: "/dashboard" },
    { name: "Report", icon: <TbClipboardText />, link: "/dashboard" },
    { name: "Orders", icon: <PiShoppingCart />, link: "/dashboard" },
    { name: "Customer", icon: <TbUsersGroup />, link: "/dashboard" },
    { name: "Integrations", icon: <HiOutlineBadgeCheck />, link: "/dashboard" },
    { name: "Profile", icon: <CgProfile />, link: "/dashboard" },
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
