import { HiChevronDown, HiMapPin, HiOutlineArrowPath, HiOutlineXMark } from "react-icons/hi2";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HiMagnifyingGlass, HiXMark, HiAdjustmentsHorizontal } from "react-icons/hi2";
import EventCard2 from "../../components/EventCard2";
import Pagination from "../../components/Pagination";
import RadioButton from "../../components/RadioButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import API_CALL from "../../helper/api_backend";
import EventCard from "../../components/EventCard";
import EventNotFound from "../../components/EventNotFound";

const FindEvent = () => {
  navigator.geolocation.getCurrentPosition((position) => {});

  const [cities, setCities] = useState([]);
  const [searchFilter, setSearchFilter] = useSearchParams();
  const [filter, setFilter] = useState({});
  const [currLocation, setCurrLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [currSearch, setCurrSearch] = useState("");
  const [eventsData, setEventsData] = useState([]);
  const [totalData, setTotalData] = useState(1);
  const [categories, setCategories] = useState([]);
  const [isOpenLoc, setIsOpenLoc] = useState(false);
  const [isOpenFillter, setIsOpenFillter] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(eventsData);
  console.log(params.loc);

  const getEvent = async () => {
    const result = await API_CALL.get("/event", {
      params: { ...filter, city: params?.loc, search: params?.search || "" },
    });
    setEventsData(result.data.result.data);
    setTotalData(result.data.result.count.length);
  };

  console.log(totalData);
  const getCategory = async () => {
    const dataCategory = await API_CALL.get("/category");
    setCategories(dataCategory.data);
  };

  useEffect(() => {
    let optFIll = {};
    if (searchFilter.get("type")) {
      optFIll = { ...optFIll, type: searchFilter.get("type") };
    }
    if (searchFilter.get("category")) {
      optFIll = { ...optFIll, category: searchFilter.get("category") };
    }
    if (searchFilter.get("page")) {
      optFIll = { ...optFIll, page: searchFilter.get("page") };
    }
    setFilter(optFIll);
    setCurrLocation(params.loc);
    setSearchLocation(params.loc);
    if (params?.search) {
      setCurrSearch(params.search);
    }
    setSearchFilter(optFIll);
  }, [searchFilter]);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getEvent();
  }, [filter, location]);

  const printEvent = () => {
    return eventsData.map((value, idx) => {
      return (
        <div key={idx}>
          <EventCard data={value} />
        </div>
      );
    });
  };

  const handleFilter = (filterName, filterVal) => {
    setSearchFilter({ ...filter, [filterName]: filterVal, page: 1 });
  };

  const printCategories = () => {
    return categories.map((value, idx) => {
      return (
        <div className="flex items-center">
          <input
            key={value.id}
            id="default-radio"
            type="radio"
            value={value.category}
            name={`category`}
            checked={searchFilter.get("category") === value.category ? true : false}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
            onClick={() => {
              handleFilter("category", value.category);
            }}
          />
          <label htmlFor="default-radio" className="ml-2 text-base font-medium text-gray-500">
            {value.category}
          </label>
        </div>
      );
    });
  };

  const printFilterList = () => {
    return Object.keys(filter).map((value, idx) => {
      if (value.toLowerCase() !== "page") {
        return (
          <div
            className=" flex w-fit h-10 p-3 rounded-full gap-2 items-center justify-between bg-gray-100"
            onClick={() => {
              const copyFilter = { ...filter };
              delete copyFilter[value];
              setFilter({ ...copyFilter });
              setSearchFilter({ ...copyFilter });
            }}
          >
            <span className=" max-md:line-clamp-1">{filter[value]}</span>
            <span>
              <HiXMark />
            </span>
          </div>
        );
      }
    });
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
    setTimeout(() => {
      getSearchLocation();
    }, 1000);
  }, [searchLocation]);

  const printLocation = () => {
    return cities.map((value, idx) => {
      return (
        <div
          key={value.id}
          className="flex w-full h-16 items-center p-5 gap-4 hover:bg-slate-100 cursor-pointer"
          onClick={() => {
            setIsOpenLoc(false);
            setCurrLocation(value.city);
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
    <>
      <Navbar />
      <div className="main-content">
        <div className="flex flex-col px-5 md:px-10">
          <div className="flex w-full py-6 items-center border-b-2">
            <div className="flex flex-col w-full gap-2">
              <div className="flex w-full items-center gap-2">
                <span className="w-10 h-10 p-2">
                  <HiMagnifyingGlass size={"100%"} />
                </span>
                <input
                  defaultValue={currSearch}
                  className="w-[60%] focus:outline-none py-2 text-xl font-semibold placeholder:text-lg placeholder:font-medium"
                  type="text"
                  placeholder="Search Everything"
                  onChange={(e) => {
                    setCurrSearch(e.target.value);
                  }}
                />
              </div>
              <div className="flex w-full relative items-center gap-2">
                <span className="w-10 h-10 p-2">
                  <HiMapPin size={"100%"} />
                </span>
                <input
                  defaultValue={currLocation}
                  key={currLocation}
                  className="w-[60%] focus:outline-none py-2 text-xl font-semibold placeholder:text-lg placeholder:font-medium"
                  type="text"
                  placeholder="Choose a Location"
                  onClick={() => {
                    setIsOpenLoc(true);
                  }}
                  onChange={(e) => {
                    setSearchLocation(e.target.value);
                  }}
                />
                <div
                  className={`${
                    isOpenLoc ? "absolute" : "hidden"
                  } top-14 left-0 right-0 w-64 md:w-96 border rounded-lg shadow-md bg-white`}
                >
                  <div className="flex flex-col w-full">{printLocation()}</div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="px-4 md:px-10 border-2 h-14 text-base text-gray-500 font-medium border-gray-400 rounded-md hover:border-gray-900 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
              onClick={() => {
                navigate(`/find-event/${currLocation}/${currSearch}${location.search}`);
              }}
            >
              Search
            </button>
          </div>
          <div className="flex py-6">
            <div
              className={
                isOpenFillter
                  ? ` max-md:fixed top-[60px] left-0 w-full h-full bg-white p-6`
                  : "hidden md:flex min-w-[20%]"
              }
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold">Filters</span>
                  <span
                    className="w-6 h-6 cursor-pointer md:hidden"
                    onClick={() => {
                      setIsOpenFillter(false);
                    }}
                  >
                    <HiOutlineXMark size={"100%"} />
                  </span>
                </div>

                <div className="flex w-full justify-between items-center">
                  <span className=" text-md">Reset Filter</span>
                  <span
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => {
                      setSearchFilter({ page: "1" });
                    }}
                  >
                    <HiOutlineArrowPath color="red" size={"100%"} />
                  </span>
                </div>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex w-full h-12 gap-2 overflow-x-auto">
                <div
                  className=" flex w-fit h-10 p-3 rounded-full gap-2 items-center justify-between bg-gray-100 md:hidden"
                  onClick={() => {
                    setIsOpenFillter(true);
                  }}
                >
                  <span>Filters</span>
                  <span>
                    <HiAdjustmentsHorizontal />
                  </span>
                </div>
                {printFilterList()}
              </div>
              {eventsData.length > 0 ? (
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                  {printEvent()}
                </div>
              ) : (
                <EventNotFound />
              )}

              <Pagination totalData={totalData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindEvent;
