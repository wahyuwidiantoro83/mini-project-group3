import React, { useState } from "react";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";
import { HiTicket } from "react-icons/hi2";


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
  const ticketInfo = sessionStorage.getItem("ticket-info")
  const ticketInfoParsed = JSON.parse(ticketInfo)
  console.log("ini ticket info parsed",ticketInfoParsed);
  const allTicketPrice = ticketInfoParsed.map((val,idx)=>{return parseInt(val.ticketPrice)})
  const allTicketStock = ticketInfoParsed.map((val,idx)=>{return parseInt(val.ticketStock)})
  const lowestTicketPrice = Math.min(...allTicketPrice)
  const highestTicketPrice = Math.max(...allTicketPrice)

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
        <div className=" pt-4 px-4 md:flex md:flex-col md:ml-[250px] lg:ml-[300px]">
          <h1 className="text-4xl text font-bold">Publish Your Event</h1>
          <div className="shadow-lg border-[2px] mt-4">
            {/* Preview GAMBAR EVENT */}
            <div className=" bg-red-300 h-[240px]"></div>

            <div className="">
              {/* Preview INFO BASIC EVENT */}
              <div>
                <p>{eventBasic_infoParsed.eventTitle}</p>
                <p>
                  {dayName[eventStart.getDay()]}, {eventStart.getDate()}{" "}
                  {monthName[eventStart.getMonth()]} {eventStart.getFullYear()},
                  at {eventBasic_infoParsed.eventStartHour}
                  <br />
                  {eventBasic_infoParsed.eventAddress},{" "}
                  {eventBasic_infoParsed.eventCity}{" "}
                </p>
              </div>
              {/* preview Ticket dan Stock */}
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <HiTicket/>
                  <span>Rp {lowestTicketPrice.toLocaleString("id")} - Rp {highestTicketPrice.toLocaleString("id")}</span>
                </div>
                <div>{allTicketStock.reduce((a,b)=>a+b,0)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPromotor>
  );
};

export default PublishPage;
