import logo from "../../assets/logo.png";
import logoSm from "../../assets/small_logo.png";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white w-full h-fit shadow-sm">
      <div className="flex w-full h-full justify-between gap-2 items-center px-2 md:px-6 py-2">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="brand hidden md:block w-36 md:w-40">
            <img className="w-full" src={logo} alt="" />
          </div>
          <div className="brand block md:hidden w-10">
            <img className="w-full" src={logoSm} alt="" />
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full px-4 py-3 border-2 border-gray-200  bg-gray-100 ">
            <HiMagnifyingGlass size={"16px"} />
            <input
              className=" focus:outline-none placeholder:text-xs bg-transparent max-md:w-14 lg:w-72 text-sm"
              type="text"
              placeholder="Search events"
            />
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 font-medium text-sm items-center">
          <button className="rounded-full hidden lg:block hover:bg-slate-100 px-4 py-2 transition-all duration-300">
            Find Event
          </button>
          <button className="rounded-full hidden lg:block hover:bg-slate-100 px-4 py-2 transition-all duration-300">
            Create Event
          </button>
          <button className="rounded-full hover:bg-slate-100 px-4 py-2 transition-all duration-300">
            Sign In
          </button>
          <button className="rounded-full hover:bg-slate-100 px-4 py-2 transition-all duration-300">
            Sign Up
          </button>
          <button className="w-8 rounded-xl md:hidden hover:bg-slate-100">
            <HiOutlineBars3 size={"100%"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
