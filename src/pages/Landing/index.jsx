import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import useDisclosure from "../../hooks/useDisclosure";
import smallPoster from "../../assets/small.webp";
import largePoster from "../../assets/large.webp";
import { HiChevronDown, HiMapPin } from "react-icons/hi2";
import { data } from "./data";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard";
import axios from "axios";
import Layout from "../../components/Layout";
import API_CALL from "../../helper/api_backend";

const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState([]);
  const [events, setEvents] = useState([]);
  const [cities, setCities] = useState([]);

  const [currLocation, setCurrLocation] = useState("Jakarta");
  const [currType, setCurrType] = useState("all");
  const [searchLocation, setSearchLocation] = useState("");

  const getLocation = async (latitude, longitude) => {
    const location = await axios.get("https://geocodeapi.p.rapidapi.com/GetLargestCities", {
      params: {
        latitude: `${latitude}`,
        longitude: `${longitude}`,
        range: "50000",
      },
      headers: {
        "X-RapidAPI-Key": "622ba92fc2mshc83a580aba8857ap1c1369jsn5afb1fbf4a98",
        "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
      },
    });
    setCurrLocation(location.data[0].City);
    sessionStorage.setItem("currLocation", location.data[0].City);
  };

  const getCategory = async () => {
    const dataCategory = await API_CALL.get("/category");
    setCategory(dataCategory.data);
  };

  const getEvent = async () => {
    const dataEvent = await API_CALL.get("/event", {
      params: {
        city: currLocation,
        landingType: currType,
      },
    });
    setEvents(dataEvent.data);
  };

  const getSearchLocation = async () => {
    const dataLocation = await API_CALL.get("/city", {
      params: {
        city: searchLocation,
      },
    });
    setCities(dataLocation.data);
  };

  useEffect(() => {
    if (sessionStorage.getItem("currLocation")) {
      setCurrLocation(sessionStorage.getItem("currLocation"));
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        getLocation(position.coords.latitude, position.coords.longitude);
      });
    }
    getCategory();
    if (sessionStorage.getItem("filterLanding")) {
      setCurrType(sessionStorage.getItem("filterLanding"));
    }
  }, []);

  useEffect(() => {
    getEvent();
  }, [currLocation, currType]);

  useEffect(() => {
    setTimeout(() => {
      getSearchLocation();
    }, 1000);
  }, [searchLocation]);

  const filter = [
    { filter: "All", value: "all" },
    { filter: "Online", value: "online" },
    { filter: "Today", value: "today" },
    { filter: "This weekend", value: "week" },
    { filter: "This Month", value: "month" },
    { filter: "Free", value: "free" },
  ];

  const navigate = useNavigate();

  const printcategory = () => {
    return category.map((value, idx) => {
      return (
        <div
          key={idx}
          className="group/category flex flex-col  items-center text-xs font-medium gap-2 cursor-pointer "
        >
          <div className="flex w-14 md:w-28 aspect-square rounded-full p-4 md:p-9 bg-white group-hover/category:bg-gray-300 justify-center items-center">
            <img
              src={`http://localhost:2066/public/category/${value.image}`}
              className="w-full object-center"
              alt=""
            />
          </div>
          <span className="text-gray-500 group-hover/category:text-gray-800">{value.category}</span>
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
            value.value === currType ? "border-b-2 border-gray-800 text-gray-800" : ""
          } hover:border-b-2 hover:text-gray-800 hover:border-gray-800 pb-4 min-w-max cursor-pointer`}
          onClick={() => {
            setCurrType(value.value);
            sessionStorage.setItem("filterLanding", value.value);
          }}
        >
          {value.filter}
        </div>
      );
    });
  };

  const printEvent = () => {
    return events.map((value, idx) => {
      return (
        <div key={idx}>
          <EventCard data={value} />
        </div>
      );
    });
  };

  const printLocation = () => {
    return cities.map((value, idx) => {
      return (
        <div
          key={value.id}
          className="flex w-full h-16 items-center p-5 gap-4 hover:bg-slate-100 cursor-pointer"
          onClick={() => {
            onClose();
            setCurrLocation(value.city);
            sessionStorage.setItem("currLocation", value.city);
          }}
        >
          <span>
            <HiMapPin />
          </span>
          <span className="text-base font-medium">{value.city}</span>
        </div>
      );
    });
  };

  return (
    <Layout currLocation={currLocation}>
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
            <div className="flex relative text-gray-500 items-center gap-2">
              <span className="">
                <HiChevronDown />
              </span>
              <input
                className={`focus:outline-none border-b-2 border-gray-500 w-[200px]`}
                type="text"
                placeholder="Choose Location"
                defaultValue={currLocation}
                key={currLocation}
                onClick={onOpen}
                onChange={(e) => {
                  setSearchLocation(e.target.value);
                }}
              />
              <div
                className={`${
                  isOpen ? "absolute" : "hidden"
                } top-14 left-0 right-0 w-64 md:w-96 border rounded-lg shadow-md bg-white`}
              >
                <div className="flex flex-col w-full">
                  <div
                    className="flex w-full h-16 items-center p-5 gap-4 hover:bg-slate-100 cursor-pointer"
                    onClick={() => {
                      onClose();
                      navigator.geolocation.getCurrentPosition((position) => {
                        getLocation(position.coords.latitude, position.coords.longitude);
                      });
                    }}
                  >
                    <span>
                      <HiMapPin />
                    </span>
                    <span className="text-base font-medium">Use Current Location</span>
                  </div>
                  {printLocation()}
                </div>
              </div>
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
    </Layout>
  );
};

export default Landing;
