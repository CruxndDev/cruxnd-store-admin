import Image from "next/image";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

const SideBar = () => {
  return (
    <aside className="h-full w-[20vw] xl:w-[15vw] border-primaryColor border-r-[1.5px] py-5 flex flex-col justify-between">
      <div>
        <div className="text-center mb-14">
          <h1 className="font-bold text-xl">SwapT</h1>
        </div>

        <div className="flex flex-col sidebarLinks">
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Products</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Analytics</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Report</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Orders</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Customer</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Integrations</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Profile</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-3">
        <div className="flex">
          <Image
            src={`/avatar.png`}
            alt="Avatar Image"
            width={45}
            height={45}
            className="mr-2"
          />
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Tehilla Nwosu</h3>
            <p className="text-sm">Manager</p>
          </div>
        </div>
        <FaCaretDown className="text-secondaryBlue text-lg" />
      </div>
    </aside>
  );
};

export default SideBar;
