import React from "react";
import { BsSearch } from "react-icons/bs";

const PromotorHeader = (props) => {
  const onHandleClickToggleMenu = () => {
    const show = document.querySelector(".toggleMenu");
    if (show.className.includes("hidden")) {
      show.classList.replace("hidden", "flex");
      show.classList.toggle("flex-col");
    } else {
      show.classList.replace("flex", "hidden");
      show.classList.toggle("flex-col");
    }
  };

  const [promotorAll, setPromotorAll] = React.useState("");

  const [promotorOption, petPromotorOptoin] = React.useState([
    {
      name: "X",
      path: onHandleClickToggleMenu,
    },
    {
      name: "Browse Event",
    },
    {
      name: "Manage My Event",
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
            className=" cursor-pointer hover:bg-blue-500 text-right list-none p-4"
            onClick={val.path}
          >
            {val.name}
          </li>
        );
      } else {
        return (
          <li
            key={idx}
            id={val.name}
            className=" cursor-pointer list-none p-4 hover:bg-blue-500"
            onClick={val.path}
          >
            {val.name}
          </li>
        );
      }
    });
  };
  return (
    <div className="w-full flex justify-evenly h-16 items-center">
      <div className="w-2/12">Event Brite</div>
      <div className="w-7/12 md:w-4/6">
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <BsSearch className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"/>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-8/12 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="cursor-pointer w-2/12 hover:bg-blue-500">Likes</div>
      <div className="relative w-2/12">
        <div
          className="h-full cursor-pointer"
          onClick={onHandleClickToggleMenu}
        >
          Toggle menu
        </div>
        <div className="toggleMenu bg-white h-fit w-screen absolute hidden shadow-lg md:w-40 lg:w-40">
          <ul>{printPromotorOption()}</ul>
        </div>
      </div>
    </div>
  );
};

export default PromotorHeader;
