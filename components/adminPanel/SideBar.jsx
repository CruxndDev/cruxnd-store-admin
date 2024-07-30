"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SideBar = ({ menuItems }) => {
  const [indicatorTop, setIndicatorTop] = useState(0);
  const containerRef = useRef(null);
  const route = usePathname();

  useEffect(() => {
    const activeItem = containerRef.current.querySelector(".active");
    if (activeItem) {
      const offsetTop = activeItem.offsetTop;
      const itemHeight = activeItem.offsetHeight;
      setIndicatorTop(offsetTop + itemHeight / 2 - 8); // 8 is half of the indicator height (h-4)
    }
  }, [route]);

  return (
    <aside className="h-full w-[20vw] xl:w-[15vw] border-primaryColor border-r-[1.5px] py-5 flex flex-col justify-between">
      <div>
        <div className="text-center mb-14">
          <h1 className="font-bold text-xl">SwapT</h1>
        </div>

        <div className="flex flex-col sidebarLinks relative" ref={containerRef}>
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className={`relative w-full text-sm font-medium flex items-center mb-6 pl-8 transition-colors duration-200 ${
                route.startsWith(item.link) ? "text-secondaryBlue active" : "hover:text-secondaryBlue"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <span
            className="absolute left-0 w-1 h-4 bg-blue-600 rounded-r-lg transition-all duration-500"
            style={{ top: `${indicatorTop}px` }}
          />
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
