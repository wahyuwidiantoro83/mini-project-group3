import React, { useState } from "react";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";
import { IoTicketOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../../components/Footer";

const PublishPage = () => {
  const [dayName, setDayName] = React.useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [monthName, setMonthName] = React.useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  // Setting get session storage event info basic and detail
  const eventBasic_info = sessionStorage.getItem("basic_info");
  const eventBasic_infoParsed = JSON.parse(eventBasic_info);
  const eventStart = new Date(eventBasic_infoParsed.eventDateStart);

  // Setting tiketInfo
  const ticketInfo = sessionStorage.getItem("ticket-info");
  const ticketInfoParsed = JSON.parse(ticketInfo);
  console.log("ini ticket info parsed", ticketInfoParsed);
  const allTicketPrice = ticketInfoParsed.map((val, idx) => {
    return parseInt(val.ticketPrice);
  });
  const allTicketStock = ticketInfoParsed.map((val, idx) => {
    return parseInt(val.ticketStock);
  });
  const lowestTicketPrice = Math.min(...allTicketPrice);
  const highestTicketPrice = Math.max(...allTicketPrice);

  return (
    <LayoutPromotor>
      <div className="flex flex-col  md:flex-row ">
        <PromotorSubSideBar
          page="Publish"
          eventTitle={eventBasic_infoParsed.eventTitle}
          day={eventStart.getDay()}
          month={eventStart.getMonth()}
          date={eventStart.getDate()}
          year={eventStart.getFullYear()}
          start_hour={eventBasic_infoParsed.eventStartHour}
        />
        <div className=" pt-4 px-4 md:flex md:flex-col md:ml-[200px] lg:ml-[270px] mb-4 md:mb-[130px]">
          <h1 className="text-4xl text font-bold">Publish Your Event</h1>
          <div className="shadow-lg border-[1px] mt-4 md:flex">
            {/* Preview GAMBAR EVENT */}
            <div className=" bg-red-300 h-[240px]  md:min-w-[300px] lg:min-w-[400px] "></div>

            <div className="pl-3 pr-3 pt-3 pb-3 md:flex md:flex-col md:justify-between">
              {/* Preview INFO BASIC EVENT */}
              <div>
                <p className="text-2xl font-bold">
                  {eventBasic_infoParsed.eventTitle}
                </p>
                <p className="my-3">
                  {dayName[eventStart.getDay()]}, {eventStart.getDate()}{" "}
                  {monthName[eventStart.getMonth()]} {eventStart.getFullYear()},
                  at {eventBasic_infoParsed.eventStartHour} -{" "}
                  {eventBasic_infoParsed.eventEndHour}
                  <br />
                  {eventBasic_infoParsed.eventAddress},{" "}
                  {eventBasic_infoParsed.eventCity}{" "}
                </p>
              </div>
              {/* preview Ticket dan Stock */}
              <div className="flex gap-8">
                <div className="flex items-center gap-1">
                  <IoTicketOutline />
                  <span>
                    Rp {lowestTicketPrice.toLocaleString("id")} - Rp{" "}
                    {highestTicketPrice.toLocaleString("id")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  {allTicketStock.reduce((a, b) => a + b, 0)}
                </div>
              </div>
              {/* preview event */}
              <div className="mt-3 border-t-[1px] pt-3 border-slate-300 flex justify-center ">
                <button className="text-blue-500 flex items-center gap-2 hover:text-blue-300">
                  <FaExternalLinkAlt />
                  <p className="">Preview</p>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className=" mt-6 border-t-[1px] border-slate-300 -z-50 md:mt-0"></div>
        {/* Button Discard dan Publish */}
        <div className="flex gap-3 mt-8 justify-end pr-4 pb-6 ">
        <button
          type="button"
          className=" rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
        >
          Discard
        </button>
        <button
          type="button"
          className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
          onClick={() => {
            
          }}
        >
          Publish
        </button>
      </div>
      <Footer />
    </LayoutPromotor>
  );
};

export default PublishPage;
