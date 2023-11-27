import React from "react";

import logo from "../../assets/logo.png";
import logoSm from "../../assets/small_logo.png";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PromotorHeader = (props) => {
  const navigate = useNavigate();
  const [showMenu1, setShowMenu1] = React.useState(false);
  const [showMenu2, setShowMenu2] = React.useState(false);
  const [promotorOption, petPromotorOptoin] = React.useState([
    {
      name: "X",
    },
    {
      name: "Back to Home",
      path: "/promotor",
    },
    {
      name: "Manage My Event",
      path: "/promotor/manage-event",
    },
    {
      name: "Manage My Ticket",
      path: "promotor/manage-ticket",
    },
    {
      name: "Account Setting",
    },
    {
      name: "Log Out",
    },
  ]);

  const printPromotorOption = () => {
    return promotorOption.map((val, idx) => {
      if (val.name === "X") {
        return (
          <li
            key={idx}
            id={val.name}
            className=" cursor-pointer hover:bg-slate-200 text-right pr-4 list-none p-4 "
            onClick={() => {
              setShowMenu1(!setShowMenu1);
              setShowMenu2(!setShowMenu2);
            }}
          >
            {val.name}
          </li>
        );
      } else if (val.name === "Log Out") {
        return (
          <li
            key={idx}
            id={val.name}
            className=" cursor-pointer list-none p-4 hover:bg-slate-200 pt-6"
            onClick={() => {
              navigate(val.path);
            }}
          >
            {val.name}
          </li>
        );
      } else if (val.name === "Account Setting") {
        return (
          <li
            key={idx}
            id={val.name}
            className=" cursor-pointer list-none p-4 hover:bg-slate-200 border-b-2"
            onClick={() => {
              navigate(val.path);
            }}
          >
            {val.name}
          </li>
        );
      } else {
        return (
          <li
            key={idx}
            id={val.name}
            className=" cursor-pointer  list-none p-4 hover:bg-slate-200"
            onClick={() => {
              navigate(val.path);
            }}
          >
            {val.name}
          </li>
        );
      }
    });
  };

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
          <div className="flex md:flex items-center gap-2 rounded-full px-4 py-3 border-2 border-gray-200  bg-gray-100 ">
            <HiMagnifyingGlass size={"16px"} />
            <input
              className=" w-20 focus:outline-none placeholder:text-xs bg-transparent md:w-52 lg:w-72 text-sm"
              type="text"
              placeholder="Search events"
            />
          </div>
        </div>
        <div className="  flex gap-2 md:gap-4 font-medium text-sm items-center">
          {/* <button  className="rounded-full  flex w-fit text-xs  hover:bg-slate-100 px-4 py-2 transition-all duration-300 md:text-sm  lg:block">
            Likes
          </button> */}
          <button
            className=" hidden rounded-full w-fit text-xs md:flex md:text-sm lg:block hover:bg-slate-100 px-4 py-2 transition-all duration-300"
            onClick={() => navigate("/create/event")}
          >
            Create Event
          </button>
          <button
            className="rounded-full hidden w-fit md:flex lg:flex hover:bg-slate-100 px-4 py-2 transition-all duration-300"
            onClick={() => setShowMenu1(!showMenu1)}
          >
            <img className="w-7" src={logoSm} alt="" />
            <span className="px-2 py-2">{props.accountName}</span>
            <span className="my-auto">
              <AiFillCaretDown />
            </span>
          </button>
          <ul
            className={`absolute  bg-white  right-8 top-16 shadow-md ${
              showMenu1 ? "block" : "hidden"
            }`}
          >
            {printPromotorOption()}
          </ul>
          <button
            onClick={() => setShowMenu2(!showMenu2)}
            className=" h-full w-8 rounded-xl md:hidden hover:bg-slate-100"
          >
            <HiOutlineBars3 size={"100%"} />
          </button>
          <ul
            className={`absolute place-self-end top-0 left-0 w-screen bg-white shadow-md ${
              showMenu2 ? "block" : "hidden"
            } md:hidden`}
          >
            {printPromotorOption()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromotorHeader;
