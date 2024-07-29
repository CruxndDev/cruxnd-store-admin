import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";

const SideBar = () => {
  return (
    <aside>
      <div className="flex flex-row justify-between items-center m-4 mb-12 mr-3">
        <h2 className="uppercase font-semibold text-2xl">menu</h2>
      </div>
      <div className="flex flex-col">
        <div>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
