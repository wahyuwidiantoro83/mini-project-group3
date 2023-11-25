import { HiChevronDown, HiMapPin, HiOutlineArrowPath } from "react-icons/hi2";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import EventCard2 from "../../components/EventCard2";
import { data } from "../Landing/data";
import Pagination from "../../components/Pagination";
import RadioButton from "../../components/RadioButton";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const FindEvent = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
  const event = [...data];
  const categories = [
    { name: "Music", value: "1" },
    { name: "Horror", value: "2" },
    { name: "Art", value: "3" },
  ];
  const [searchFilter, setSearchFilter] = useSearchParams();
  const [filter, setFilter] = useState({});

  useEffect(() => {
    let optFIll = {};
    if (searchFilter.get("type")) {
      optFIll = { ...optFIll, type: searchFilter.get("type") };
    } else {
      optFIll = { ...optFIll, type: "offline" };
    }
    if (searchFilter.get("category")) {
      optFIll = { ...optFIll, category: searchFilter.get("category") };
    }
    setFilter(optFIll);
  }, []);

  useEffect(() => {
    setSearchFilter(filter);
  }, [filter]);

  const printEvent = () => {
    return event.map((value, idx) => {
      return (
        <div key={idx}>
          <EventCard2 data={value} />
        </div>
      );
    });
  };

  const handleFilter = (filterName, filterVal) => {
    setFilter({ ...filter, [filterName]: filterVal });
  };

  const printCategories = () => {
    return categories.map((value, idx) => {
      return (
        <div className="flex items-center">
          <input
            key={idx}
            id="default-radio"
            type="radio"
            value={value.value}
            name={`category`}
            checked={searchFilter.get("category") === value.name ? true : false}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
            onClick={() => {
              handleFilter("category", value.name);
            }}
          />
          <label htmlFor="default-radio" className="ml-2 text-base font-medium text-gray-500">
            {value.name}
          </label>
        </div>
      );
    });
  };

  const printFilterList = () => {
    return Object.keys(filter).map((value, idx) => {
      return (
        <div
          className=" flex w-fit h-10 p-3 rounded-full gap-2 items-center justify-between bg-gray-100"
          onClick={() => {
            const copyFilter = { ...filter };
            delete copyFilter[value];
            setFilter({ ...copyFilter });
          }}
        >
          <span>{filter[value]}</span>
          <span>
            <HiXMark />
          </span>
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="flex flex-col px-10">
          <div className="flex w-full py-6 items-center border-b-2">
            <div className="flex flex-col w-full gap-2">
              <div className="flex w-full items-center gap-2">
                <span className="w-10 h-10 p-2">
                  <HiMagnifyingGlass size={"100%"} />
                </span>
                <input
                  className="w-[60%] focus:outline-none py-2 text-xl font-semibold placeholder:text-lg placeholder:font-medium"
                  type="text"
                  placeholder="Search Everything"
                />
              </div>
              <div className="flex w-full items-center gap-2">
                <span className="w-10 h-10 p-2">
                  <HiMapPin size={"100%"} />
                </span>
                <input
                  className="w-[60%] focus:outline-none py-2 text-xl font-semibold placeholder:text-lg placeholder:font-medium"
                  type="text"
                  placeholder="Choose a Location"
                />
              </div>
            </div>
            <button
              type="button"
              className="px-10 border-2 h-14 text-base text-gray-500 font-medium border-gray-400 rounded-md hover:border-gray-900 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
            >
              Search
            </button>
          </div>
          <div className="flex py-6">
            <div className="flex min-w-[20%]">
              <div className="flex flex-col gap-4">
                <span className="text-xl md:text-2xl font-bold">Filters</span>
                <div className="flex flex-col gap-3">
                  <span className=" text-base md:text-lg font-medium text-gray-800">
                    Categories
                  </span>
                  <div className="radio-group flex flex-col gap-2">{printCategories()}</div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className=" text-base md:text-lg font-medium text-gray-800">Type</span>
                  <div className="radio-group flex flex-col gap-2">
                    <div className="flex items-center">
                      <input
                        key={searchFilter}
                        id="default-radio-1"
                        type="radio"
                        value="offline"
                        name="type"
                        defaultChecked={searchFilter.get("type") === "offline" ? true : false}
                        onClick={() => {
                          handleFilter("type", "offline");
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-base font-medium text-gray-500"
                      >
                        Offline only
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        key={searchFilter}
                        id="default-radio-1"
                        type="radio"
                        value="all"
                        name="type"
                        defaultChecked={searchFilter.get("type") === "all" ? true : false}
                        onClick={() => {
                          handleFilter("type", "all");
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-base font-medium text-gray-500"
                      >
                        Offline & Online
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex">{printFilterList()}</div>
              <div className="grid w-full grid-cols-1 p-4 gap-4">{printEvent()}</div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindEvent;
