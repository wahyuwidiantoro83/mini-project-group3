import { useEffect, useState } from "react";
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
import { data } from "./data";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard";

const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currLocation, setCurrLocation] = useState("Surabaya");

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

  const event = [...data];
  const navigate = useNavigate();

  const printcategory = () => {
    return category.map((value, idx) => {
      return (
        <div
          key={idx}
          className="group/category flex flex-col  items-center text-xs font-medium gap-2 cursor-pointer "
        >
          <div className="flex w-14 md:w-28 aspect-square rounded-full p-4 md:p-9 bg-white group-hover/category:bg-gray-300 justify-center items-center">
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

  const printEvent = () => {
    return event.map((value, idx) => {
      return (
        <div key={idx}>
          <EventCard data={value} />
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
          <button className=" absolute bottom-6 left-6 md:left-14 lg:left-36 bg-gray-800 px-5 py-3 rounded-md text-sm font-medium text-white">
            Find your next event
          </button>
        </div>
        <div className="main-category grid w-full grid-cols-4 lg:grid-cols-8 gap-4 bg-gray-200 px-7 md:px-20 lg:px-32 py-6 md:py-8 lg:py-11">
          {printcategory()}
        </div>
        <div className="section-filter min-h-screen px-8 py-6 md:px-24 lg:px-36">
          <div className=" flex text-3xl flex-col md:flex-row md:text-3xl font-extrabold md:items-center gap-2 md:gap-3 py-4 md:py-6">
            <span>Popular in</span>
            <div className="flex text-gray-500 items-center gap-2">
              <span className="">
                <HiChevronDown />
              </span>
              <input
                className="focus:outline-none border-b-2 border-gray-500 w-40 focus:w-auto"
                type="text"
                placeholder="Choose Location"
                defaultValue={currLocation}
              />
            </div>
          </div>
          <div className="filter-list flex flex-row overflow-x-auto gap-6 py-4 md:py-6">
            {printFilter()}
          </div>
          <div className="event-container flex flex-col gap-6 py-8">
            <span className="text-2xl font-bold">Events in {currLocation}</span>
            <div className=" h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {printEvent()}
            </div>
            <button
              className=" w-full self-center border-2 py-3 font-medium md:w-96 text-sm border-gray-400 hover:border-gray-800 hover:bg-gray-100 duration-200"
              type="button"
            >
              See More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
