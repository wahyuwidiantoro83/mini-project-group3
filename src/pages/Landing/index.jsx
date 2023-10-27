import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import useDisclosure from "../../hooks/useDisclosure";
import smallPoster from "../../assets/small.webp";
import largePoster from "../../assets/large.webp";
import music from "../../assets/icon_category/live-music.png";
import nightlife from "../../assets/icon_category/disco-ball.png";
import art from "../../assets/icon_category/abstract.png";
import holidays from "../../assets/icon_category/sunbed.png";
import health from "../../assets/icon_category/stethoscope.png";
import hobbies from "../../assets/icon_category/joystick.png";
import bussiness from "../../assets/icon_category/profit.png";
import food from "../../assets/icon_category/fast-food.png";
import { HiChevronDown } from "react-icons/hi2";

const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const category = [
    { name: "Music", icon: music },
    { name: "Nightlife", icon: nightlife },
    { name: "Performing & Visual Art", icon: art },
    { name: "Holidays", icon: holidays },
    { name: "Health", icon: health },
    { name: "Hobbies", icon: hobbies },
    { name: "Bussiness", icon: bussiness },
    { name: "Food & Drink", icon: food },
  ];

  const filter = [
    { filter: "All" },
    { filter: "For you" },
    { filter: "Online" },
    { filter: "Today" },
    { filter: "This weekend" },
    { filter: "Haloween" },
    { filter: "Breast Cancer Awareness Month" },
    { filter: "Veteran's Day" },
    { filter: "Free" },
    { filter: "Music" },
    { filter: "Food & Drink" },
    { filter: "Charity & Causes" },
  ];

  const printcategory = () => {
    return category.map((value, idx) => {
      return (
        <div
          key={idx}
          className="group/category flex flex-col  items-center text-xs font-medium gap-2 cursor-pointer "
        >
          <div className="flex w-14 md:w-28 aspect-square rounded-full p-4 md:p-9 bg-white justify-center items-center">
            <img src={value.icon} className="w-full object-center" alt="" />
          </div>
          <span className="text-gray-500 group-hover/category:text-gray-800">{value.name}</span>
        </div>
      );
    });
  };

  const printFilter = () => {
    return filter.map((value, idx) => {
      return (
        <div
          key={idx}
          className={`text-sm text-gray-500 font-medium ${
            value.filter === "All" ? "border-b-2 border-gray-800 text-gray-800" : ""
          } hover:border-b-2 hover:text-gray-800 hover:border-gray-800 pb-4 min-w-max cursor-pointer`}
        >
          {value.filter}
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="main-poster w-full h-fit relative">
          <img className="hidden md:block w-full" src={largePoster} alt="" />
          <img className="md:hidden w-full" src={smallPoster} alt="" />
          <button className=" absolute bottom-6 left-6 md:left-36 bg-gray-800 px-5 py-3 rounded-md text-sm font-medium text-white">
            Find your next event
          </button>
        </div>
        <div className="main-category grid w-full grid-cols-4 lg:grid-cols-8 gap-4 bg-gray-200 px-7 md:px-20 lg:px-32 py-6 md:py-8 lg:py-11">
          {printcategory()}
        </div>
        <div className="section-filter min-h-screen px-8 py-6 md:px-24 lg:px-44">
          <div className=" flex text-3xl flex-col md:flex-row md:text-3xl font-extrabold md:items-center gap-2 md:gap-3 py-4 md:py-6">
            <span>Popular in</span>
            <div className="flex text-gray-500 items-center gap-2">
              <span className="">
                <HiChevronDown />
              </span>
              <input
                className="focus:outline-none border-b-2 border-gray-500 w-40 focus:w-auto"
                type="text"
                placeholder="Surabaya"
              />
            </div>
          </div>
          <div className="filter-list flex flex-row overflow-x-auto gap-6 py-4 md:py-6">
            {printFilter()}
          </div>
          <div className="event-container grid-rows-1 md:grid-rows-3 lg:grid-rows-4"></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
