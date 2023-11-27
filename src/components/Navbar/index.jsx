import { useState } from "react";
import logo from "../../assets/logo.png";
import logoSm from "../../assets/small_logo.png";
import {
  HiOutlineBars3,
  HiMagnifyingGlass,
  HiOutlineTicket,
  HiMiniCalendarDays,
  HiOutlineXMark,
  HiUser,
} from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const located = useSelector((state) => state.locationReducer.city);
  const url = useLocation();
  console.log(url.pathname.includes("find-event"));
  const navigate = useNavigate();
  return (
    <>
      <div className="sticky top-0 z-50 bg-white w-full h-fit shadow-sm">
        <div className="flex w-full h-full justify-between gap-2 items-center px-2 md:px-6 py-2">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="brand hidden md:block w-36 md:w-40 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="brand block md:hidden w-10" onClick={() => navigate("/")}>
              <img className="w-full" src={logoSm} alt="" />
            </div>
            <div
              className={`hidden ${
                url.pathname.includes("find-event") ? "" : "md:flex"
              } items-center gap-2 rounded-full px-4 py-3 border-2 border-gray-200  bg-gray-100 cursor-pointer`}
              onClick={() => {
                navigate(`/find-event/${located}`);
              }}
            >
              <HiMagnifyingGlass size={"16px"} />
              <span className=" focus:outline-none text-xs bg-transparent max-md:w-14 lg:w-72">
                Search events
              </span>
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
            <button
              className="w-8 rounded-xl lg:hidden hover:bg-slate-100 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineXMark size={"100%"} /> : <HiOutlineBars3 size={"100%"} />}
            </button>
            <div
              className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="icon w-7 h-7 px-1 pt-1 rounded-full border-2">
                <HiUser size={"100%"} />
              </div>
              <span className="text-sm hidden md:block font-normal text-gray-500">
                username@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`more-menu ${
          isOpen ? "fixed" : "hidden"
        } z-20 top-15 right-0 w-56 rounded-b-sm shadow-md bg-white text-sm`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-4 px-4 py-5 hover:bg-gray-100 cursor-pointer">
            <div className="icon w-4 h-4">
              <HiOutlineTicket size={"100%"} />
            </div>
            <span>Find Events</span>
          </div>
          <div className="flex items-center gap-4 px-4 py-5 hover:bg-gray-100 cursor-pointer">
            <div className="icon w-4 h-4">
              <HiMiniCalendarDays size={"100%"} />
            </div>
            <span>Create Events</span>
          </div>
          <div className="flex items-center gap-4 px-4 py-5 hover:bg-gray-100 cursor-pointer">
            <span>Manage my events</span>
          </div>
          <div className="flex items-center gap-4 px-4 py-5 hover:bg-gray-100 cursor-pointer">
            <span>Account settings</span>
          </div>
          <div className="flex items-center gap-4 px-4 py-5 hover:bg-gray-100 cursor-pointer">
            <span>Logout</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
