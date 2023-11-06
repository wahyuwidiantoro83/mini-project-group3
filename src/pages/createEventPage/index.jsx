import { useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import LayoutPromotor from "../../components/PromotorLayout";
import React from "react";
import SelectOption from "../../components/selectOption";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [countMax, setCountMax] = React.useState(0);
  const [eventTitle, setEventTitle] = React.useState("");
  const [showType, setShowType] = React.useState(false);
  const [eventType, setEventType] = React.useState("Type");
  const [showType2, setShowType2] = React.useState(false);
  const [eventCategory, setEventCategory] = React.useState("Category");
  return (
    <LayoutPromotor>
      <div className="border-b-[1px] pb-8 border-slate-300">
        <div className="pl-5 pr-10 md:w-[450px] md:mx-auto lg:w-[600px]">
          <div
            onClick={() => navigate("/manage/event")}
            className="text-blue-500 font-bold mt-3 w-fit cursor-pointer"
          >
            {"<"} Event
          </div>
          <form action="">
            {/* EVENT TITLE */}
            <div>
              <legend className=" text-4xl text font-bold mt-3">
                Basic Info
              </legend>
              <p className="text-[0.8rem] mt-3">
                Name Your Event and tell event-goers why they should come. Add
                details that highlight what makes it unique
              </p>
              <div className="flex flex-col pl-2 mt-3 w-full bg-gray-200 rounded-sm shadow-md ">
                <p className="text-sm pt-1 text-slate-600">
                  Event Title<span className=" text-red-400">*</span>
                </p>
                <input
                  className="eventTitle focus:outline-none py-1 text-sm bg-gray-200"
                  type="text"
                  placeholder="Be clear and descriptive"
                  maxLength={75}
                  onChange={(e) => {
                    setCountMax(e.target.value.length);
                    setEventTitle(e.target.value);
                  }}
                />
              </div>
              <div className="text-xs text-right mt-1">{countMax}/75</div>
            </div>

            {/* TYPE AND CATEGORY */}
            <div className="mt-2 pb-8 border-b-[1px] border-slate-300">
              <label htmlFor="eventType" className="text-sm">
                Choose your event type and category :
              </label>
              <div className="flex gap-4">
                <div
                  className="flex justify-between px-2 py-2 items-center bg-gray-200 mt-2 w-36 cursor-pointer shadow-md rounded-sm"
                  onClick={() => setShowType(!showType)}
                  item={[]}
                >
                  <ul className=" flex">
                    <li>{eventType}</li>
                    <div
                      className={`absolute w-36 cursor-pointer shadow-lg rounded-sm mt-9 bg-gray-200 ${
                        showType ? "block" : "hidden"
                      }`}
                    >
                      <li
                        className=" hover:bg-slate-300 w-full pl-2 py-1 rounded-sm"
                        onClick={() => {
                          setEventType("Online");
                        }}
                      >
                        Online
                      </li>
                      <li
                        className="hover:bg-slate-300 w-full pl-2 py-1 rounded-sm"
                        onClick={() => {
                          setEventType("Offline");
                        }}
                      >
                        Offline
                      </li>
                    </div>
                  </ul>
                  <span>
                    <AiOutlineDown />
                  </span>
                </div>
                <div
                  className="flex justify-between mt-2 px-2 py-2 items-center bg-gray-200 w-36 cursor-pointer shadow-md rounded-sm"
                  onClick={() => {
                    setShowType2(!showType2);
                  }}
                >
                  <ul className="">
                    <li>{eventCategory}</li>
                    <div
                      className={`absolute w-36 cursor-pointer shadow-lg rounded-sm mt-3  bg-gray-200 ${
                        showType2 ? "block" : "hidden"
                      }`}
                    >
                      <li
                        className=" hover:bg-slate-300 w-full pl-2 py-1 rounded-sm"
                        onClick={() => {
                          setEventType("Online");
                        }}
                      >
                        Online
                      </li>
                      <li
                        className="hover:bg-slate-300 w-full pl-2 py-1 rounded-sm"
                        onClick={() => {
                          setEventType("Offline");
                        }}
                      >
                        Offline
                      </li>
                    </div>
                  </ul>
                  <span>
                    <AiOutlineDown />
                  </span>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="border-b-[1px] border-slate-300 pb-8">
              <legend className=" text-4xl text font-bold mt-3 ">
                Address
              </legend>
              <p className="text-[0.8rem] mt-3">
                Help people in the area discover your event and let attendees know where to show up. If this is an online event, put your link address
              </p>
              <div className="flex pl-2 mt-3 items-center text-sm bg-slate-200 gap-2 shadow-md rounded-sm focus:border-2 focus:border-blue-600">
                <span>
                  <HiMagnifyingGlass />
                </span>
                <input
                  type="url"
                  className="w-full py-3 bg-slate-200 focus:outline-none"
                  placeholder="Select event address or link address "
                />
              </div>
            </div>

            {/* DATE AND TIME */}
            <div className="">
              <legend className=" text-4xl text font-bold mt-3">
                Date and Time
              </legend>
              <p className="text-[0.8rem] mt-3">
                Tell event-goers when your event start and end so they can make
                plans to attend.
              </p>
              <div className="flex gap-2 mt-3">
                {/* Date Start - End */}
                <div>
                  <div className=" bg-slate-200 w-fit px-2 py-1 rounded-sm shadow-md">
                    <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                      Event Starts
                      <input
                        type="date"
                        className="bg-slate-200 text-slate-800 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="flex items-center w-fit bg-slate-200 px-2 py-1 rounded-sm shadow-md mt-4">
                    <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                      Event Ends
                      <input
                        type="date"
                        className="bg-slate-200 text-slate-800 focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
                {/* Hour Start - End */}
                <div>
                  <div className=" bg-slate-200 w-fit px-2 py-1 rounded-sm shadow-md">
                    <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                      Start Time
                      <input
                        type="time"
                        className="bg-slate-200 text-slate-800 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="flex items-center w-fit bg-slate-200 px-2 py-1 rounded-sm shadow-md mt-4">
                    <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                      End Time
                      <input
                        type="time"
                        className="bg-slate-200 text-slate-800 focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
        {/* BUTTON DISCARD & SAVE */}
        <div className="flex gap-3 mt-6 justify-end pr-4 pb-6">
        <button
            type="button"
            className=" rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
          >
            Discard
          </button>
        <button
            type="button"
            className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
            onClick={()=>navigate("/create/event/details")}
          >
            Save & Continue
          </button>
        </div>
    </LayoutPromotor>
  );
};

export default CreateEvent;
