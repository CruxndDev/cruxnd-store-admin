import Image from "next/image";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

const SideBar = () => {
  return (
    <aside className="h-full w-[15vw] py-5 flex flex-col justify-between">
      <div>
        <div className="text-center mb-14">
          <h2 className="font-semibold text-xl">SwapT</h2>
        </div>

        <div className="flex flex-col sidebarLinks">
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
            <text className="text-sm">Manager</text>
          </div>
        </div>
        <FaCaretDown className="text-lg" />
      </div>
    </aside>
  );
};

export default SideBar;
