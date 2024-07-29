import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { CgSearch } from "react-icons/cg";

const Header = () => {
  return (
    <header className="h-[10vh] flex items-center justify-between px-10">
      <h1 className="font-bold text-xl">Dashboard</h1>

      <div className="flex items-center">
        <form className="relative w-fit flex items-center mr-14">
          <input type="text" placeholder="Search" className="placeholder-primaryColor placeholder:font-medium w-[300px] border-[0.1px] border-primaryColor px-4 py-2 rounded-md" />
          <CgSearch className="absolute right-3 text-2xl" />
        </form>

        <div className="flex items-center">
          <div className="text-2xl flex items-center mr-8">
            <IoMdSettings className="mr-4" />
            <GoBell />
          </div>

          <div className="flex items-center">
            <p className="font-semibold mr-2">Hello, Tehilla!</p>
            
            <Image
              src={`/avatar.png`}
              alt="Avatar Image"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Header;