import React from "react";
import Footer from "../../components/Footer";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";
import { HiTicket } from "react-icons/hi2";
import { FaLess, FaRupiahSign } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";

const ManageTicket = () => {
  const [ticketOption, setTicketOption] = React.useState(false);
  const [ticketLanding, setTicketLanding] = React.useState(true);
  const [buttonPaid, setButtonPaid] = React.useState(false);
  const [buttonFree, setButtonFree] = React.useState(false);
  const [countMax, setCountMax] = React.useState(0);
  const [ticketName, setTicketName] = React.useState("");
  const [newTicketPage, setNewTicketPage] = React.useState(false);
  const [ticketLandingMd, setTicketLandingMd] = React.useState(true);
  const [admissionPage, setAdmissionPage] = React.useState(true);
  const [admissionBlue, setAdmissionBlue] = React.useState(true);
  const [promoBlue, setPromoBlue] = React.useState(false);
  const [admissionPageMd, setAdmissionPageMd] = React.useState(true);
  const [editTicket, setEditTicket] = React.useState(false);
  const [promCodePage, setPromCodePage] = React.useState(false);
  const [promCodePageMd, setPromCodePageMd] = React.useState(false);
  const [promoLanding, setPromoLanding] = React.useState(true);
  const [promoOption, setPromoOption] = React.useState(false);
  const [newPromPage, setNewPromPage] = React.useState(false);
  const navigate = useNavigate();
  const [dataTicket, setDataTicket] = React.useState([
    {
      ticketType: "paid",
      ticketName: "Regular",
      ticketStock: 1000,
      ticketPrice: 100000,
      ticketSalesStart: new Date("2023-10-17T19:30"),
      ticketSalesEnd: new Date("2024-11-17T23:00"),
      ticketPromo: true,
      promoId: 1,
    },
    {
      ticketType: "paid",
      ticketName: "Early Bird Ticket",
      ticketStock: 1000,
      ticketPrice: 100000,
      ticketSalesStart: new Date("2023-10-01T19:30"),
      ticketSalesEnd: new Date("2023-11-01T21:00"),
      ticketPromo: false,
      promoId: null,
    },
    {
      ticketType: "paid",
      ticketName: "VVIP Ticket",
      ticketStock: 1000,
      ticketPrice: 100000,
      ticketSalesStart: new Date("2023-10-30T19:30"),
      ticketSalesEnd: new Date("2024-01-30T19:30"),
      ticketPromo: true,
      promoId: 2,
    },
  ]);

  const printTicket = () => {
    return (
    <div>
      if (!dataTicket) {
          // Landing Ticket jika tidak ada input Ticket
          <div
            className={`w-full justify-center flex md:h-[658px] ${
              newTicketPage ? "hidden" : "flex"
            }`}
          >
            <div
              className={`w-[270px] py-20 md:w-[360px] md:py-0 md:ml-[220px] md:mt-20 ${
                ticketLanding ? "block" : "hidden"
              }  md:${ticketLandingMd ? "block" : "hidden"}`}
            >
              {" "}
              <HiTicket className="text-[150px] rounded-full bg-slate-200 p-2 mx-auto" />
              <h1 className="text-center font-bold text-xl mt-6" a>
                Let's Create Ticket
              </h1>
              <p className=" text-justify mt-2">
                Create a section if you want to sell multiple ticket types that
                share the same inventory. i.e. Floor, Mezzanine.
              </p>
              <div className="flex mt-6">
                <button
                  type="button"
                  className="mx-auto py-3 px-6 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700 "
                  onClick={() => {
                    setTicketOption(true);
                    setTicketLanding(false);
                  }}
                >
                  Create Ticket
                </button>
              </div>
            </div>
            {/* ticket option edit */}
            <div
              className={`${ticketOption ? "block" : "hidden"} md:${
                ticketOption ? "relative" : "hidden"
              }`}
            >
              {/* Box Add Ticket */}
              {addTicketBox()}
            </div>
          </div>
      } else {
        
      }
    </div>
    )
    }
  

  const addTicketBox = (
    type,
    name,
    quantity,
    price,
    dateStart,
    dateEnd,
    hourStart,
    hourEnd
  ) => {
    return (
      <div
        className={`bg-white block w-[350px] pt-4 h-fit  md:shadow-xl md:flex-col md:right-0 md:w-[400px] md:absolute`}
      >
        <div className="pl-5 pr-10 flex items-center justify-between">
          <span className="font-bold text-4xl">Add Ticket</span>
        </div>
        <div className="border-t-[1px] mt-3 mb-3  border-slate-300"></div>

        {/* pembungkus kotak */}
        <div className=" w-full  flex flex-col mx-auto md:w-[370px]">
          <p className="mb-3">Select your tickets fee :</p>
          <div className="flex gap-5 pl-5 pr-10 justify-center">
            <button
              className={`text-lg border-[2px] rounded-md px-14 ${
                buttonPaid
                  ? "border-blue-500 bg-slate-300"
                  : "border-slate-500 "
              } py-3 hover:border-blue-400 hover:bg-slate-300 font-bold`}
              onClick={() => {
                setButtonPaid(true);
                setButtonFree(false);
              }}
            >
              Paid
            </button>
            <button
              className={`text-lg border-[2px] rounded-md px-14 ${
                buttonFree
                  ? "border-blue-500 bg-slate-300"
                  : "border-slate-500 "
              } py-3 hover:border-blue-400 hover:bg-slate-300 font-bold`}
              onClick={() => {
                setButtonFree(true);
                setButtonPaid(false);
              }}
            >
              Free
            </button>
          </div>
          {/* Ticket Name */}
          <div className="flex flex-col mt-6">
            <div className="w-full bg-slate-100 mt-4 pl-2 rounded-sm shadow-md mx-auto">
              <p className="text-sm  pt-1 text-slate-600">
                Ticket Name<span className=" text-red-400">*</span>
              </p>
              <input
                className="ticketName bg-slate-100 w-full focus:outline-none py-1 text-sm "
                type="text"
                placeholder=""
                maxLength={50}
                onChange={(e) => {
                  setCountMax(e.target.value.length);
                  setTicketName(e.target.value);
                }}
              />
            </div>
            <div className="w-full mx-auto text-xs text-right mt-1">
              {countMax}/50
            </div>
          </div>

          {/* Ticket Quantity */}
          <div className="flex flex-col  mt-4">
            <div className="w-full bg-slate-100  pl-2 rounded-sm shadow-md mx-auto">
              <p className="text-sm pt-1 text-slate-600">
                Available Quantity<span className=" text-red-400">*</span>
              </p>
              <input
                className="ticketName bg-slate-100 focus:outline-none py-1 text-sm "
                type="number"
                placeholder="0"
                onChange={(e) => {}}
              />
            </div>
          </div>

          {/* Ticket Price */}
          <div className="flex flex-col  mt-5">
            <div className=" w-full bg-slate-100  pl-2 rounded-sm shadow-md mx-auto">
              <p className="text-sm pt-1 text-slate-600">
                Price<span className=" text-red-400">*</span>
              </p>
              <div className="flex items-center gap-3">
                <span className=" font-bold text-sm">Rp</span>
                <input
                  className="ticketPrice w-full pr-1 bg-slate-100 focus:outline-none py-1 text-sm "
                  type="number"
                  placeholder="0"
                  onChange={(e) => {}}
                />
              </div>
            </div>
          </div>

          {/* Sales Start at */}
          <div className="">
            <div className="flex gap-2 mt-5">
              {/* Date Start - End */}
              <div>
                <div className=" bg-slate-200 w-fit px-2 py-1 rounded-sm shadow-md">
                  <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                    Sales Starts
                    <input
                      type="date"
                      className="bg-slate-200 text-slate-800 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="flex items-center w-fit bg-slate-200 px-2 py-1 rounded-sm shadow-md mt-4">
                  <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                    Sales Ends
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

          {/* Save & Cancel Ticket Button */}
          <div className="flex gap-3 mt-6 justify-end pb-6 ">
            <button
              type="button"
              className=" rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
              onClick={() => {
                setTicketOption(false);
                setTicketLanding(true);
                setAdmissionPage(true);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
              onClick={() => {
                setNewTicketPage(true);
                setTicketLandingMd(false);
                setTicketOption(false);
                setAdmissionPage(true);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  const addPromotionBox = () => {
    return (
      <div
        className={` bg-white block w-[350px] pt-4 h-fit  md:shadow-xl md:flex-col md:right-0 md:w-[400px] md:absolute`}
      >
        <div className="pl-5 pr-10 flex items-center justify-between">
          <span className="font-bold text-4xl">Add Promo</span>
        </div>
        <div className="border-t-[1px] mt-3  border-slate-300"></div>

        {/* pembungkus kotak */}
        <div className=" w-full flex flex-col mx-auto md:w-[370px]">
          {/* Promo Name */}
          <div className="mt-7">
            <div className="">
              <p>Input yout promo code name</p>
              <input
                className="ticketName bg-slate-100 w-full focus:outline-none pl-2 py-1 h-[50px] shadow-md rounded-sm"
                type="text"
                placeholder="Promo name"
                maxLength={50}
                onChange={(e) => {
                  setCountMax(e.target.value.length);
                  setTicketName(e.target.value);
                }}
              />
            </div>
            <div className="w-full mx-auto text-xs text-right mt-1">
              {countMax}/50
            </div>
          </div>

          {/* Promo Limit */}
          <div className="flex flex-col  mt-4">
            <p>Set limit use to your promotion</p>
            <div className="w-full bg-slate-100  pl-2 rounded-sm shadow-md mx-auto">
              <p className="text-sm pt-1 text-slate-600">
                Promotion Limit<span className=" text-red-400">*</span>
              </p>
              <input
                className="bg-slate-100 focus:outline-none py-1 text-sm "
                type="number"
                placeholder="0"
                onChange={(e) => {}}
              />
            </div>
          </div>

          {/* Discount amount */}
          <div className="flex flex-col mt-9 gap-y-2">
            <p>Input your discount amount by nominal or percentage</p>
            <div className="flex justify-between">
              <div className="pl-2 shadow-md flex items-center gap-3 h-[50px] w-[170px] bg-slate-100 ">
                <span className=" font-bold text-sm">Rp</span>
                <input
                  className="discountByNom w-full pr-1 bg-slate-100 focus:outline-none py-1 text-sm "
                  type="number"
                  placeholder="0"
                  onChange={(e) => {}}
                />
              </div>
              <div className="my-auto text-center font-bold text-md">or</div>
              <div className=" pl-2 shadow-md flex items-center gap-3 h-[50px] w-[170px] bg-slate-100 pr-2">
                <input
                  className="discountByPercent w-full pr-1 bg-slate-100 focus:outline-none py-1 text-sm "
                  type="number"
                  placeholder="0"
                  onChange={(e) => {}}
                />
                <span className=" font-bold text-sm">%</span>
              </div>
            </div>
          </div>

          {/* Save & Cancel Promo Button */}
          <div className="flex gap-3 mt-[86px] justify-end pb-6 ">
            <button
              type="button"
              className=" rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
              onClick={() => {
                setPromoLanding(true);
                setPromoOption(false);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
              onClick={() => {
                setNewPromPage(true);
                setPromoOption(False);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <LayoutPromotor>
      <div className="flex  flex-col  md:flex-row ">
        <PromotorSubSideBar page="Tickets" />

        {/* Landing image ticket tanpa ada list ticket */}
        <div
          className={`w-full justify-center flex md:h-[658px] ${
            newTicketPage ? "hidden" : "flex"
          }`}
        >
          <div
            className={`w-[270px] py-20 md:w-[360px] md:py-0 md:ml-[220px] md:mt-20 ${
              ticketLanding ? "block" : "hidden"
            }  md:${ticketLandingMd ? "block" : "hidden"}`}
          >
            {" "}
            <HiTicket className="text-[150px] rounded-full bg-slate-200 p-2 mx-auto" />
            <h1 className="text-center font-bold text-xl mt-6" a>
              Let's Create Ticket
            </h1>
            <p className=" text-justify mt-2">
              Create a section if you want to sell multiple ticket types that
              share the same inventory. i.e. Floor, Mezzanine.
            </p>
            <div className="flex mt-6">
              <button
                type="button"
                className="mx-auto py-3 px-6 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700 "
                onClick={() => {
                  setTicketOption(true);
                  setTicketLanding(false);
                }}
              >
                Create Ticket
              </button>
            </div>
          </div>
          {/* ticket option edit */}
          <div
            className={`${ticketOption ? "block" : "hidden"} md:${
              ticketOption ? "relative" : "hidden"
            }`}
          >
            {/* Box Add Ticket */}
            {addTicketBox()}
          </div>
        </div>

        {/* Landing Image Ticket jika sudah ada list ticket */}
        <div
          className={` md:mt-0 ${
            newTicketPage ? "relative" : "hidden"
          } md:mx-auto`}
        >
          <div className="flex flex-col lg:w-[650px] md:w-[500px] md:ml-[140px]">
            <h1 className=" text-xl font-bold pt-2 pb-3 pl-2 ">
              Manage Tickets
            </h1>

            {/* Navbar ADMISSION & PROMO CODES */}
            <div className="flex justify-evenly border-b-[2px] border-slate-300 ">
              <button
                type="button"
                className={`pt-3 pb-2 font-bold w-full rounded-sm hover:bg-slate-200 ${
                  admissionBlue
                    ? "border-b-4 border-blue-400"
                    : "border-b-4 border-transparent"
                }`}
                onClick={() => {
                  setAdmissionPage(true);
                  setAdmissionPageMd(true);
                  setPromCodePage(false);
                  setPromCodePageMd(false);
                  setPromoOption(false);
                  setPromoBlue(false);
                  setAdmissionBlue(true);
                }}
              >
                Admission
              </button>
              <button
                type="button"
                className={`pt-3 pb-2 font-bold w-full rounded-sm hover:bg-slate-200 ${
                  promoBlue
                    ? "border-b-4 border-blue-400"
                    : "border-b-4 border-transparent"
                }`}
                onClick={() => {
                  setAdmissionPage(false);
                  setAdmissionPageMd(false);
                  setPromCodePage(true);
                  setPromCodePageMd(true);
                  setTicketOption(false);
                  setPromoBlue(true);
                  setAdmissionBlue(false);
                }}
              >
                Promo Codes
              </button>
            </div>

            {/* PAGE untuk ADMISSION */}
            <div
              className={`pl-1 mt-10 flex-col pr-1 ${
                admissionPage ? "flex" : "hidden"
              } md:${admissionPageMd ? "flex" : "hidden"}`}
            >
              <div className="flex justify-end w-full pr-10 ">
                <button
                  className=" bg-black rounded-sm py-2 px-3  text-white hover:bg-slate-700 "
                  onClick={() => {
                    setAdmissionPage(false);
                    setTicketOption(true);
                  }}
                >
                  Add Ticket
                </button>
              </div>

              <ul className="mt-10  min-h-[350px] max-h-[480px] overflow-auto ">
                <li className="group flex bg-white justify-evenly py-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-200">
                  <div className="text-md px-1 w-fit">1.</div>
                  <div className="pl-2 pr-2 w-[180px]">
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden text-black font-bold group-hover:overflow-visible group-hover:whitespace-normal">
                      Regular Ticket
                    </p>
                    <p className="flex flex-row items-center gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:whitespace-normal">
                      <span>
                        <FaCircle className="text-[9px] text-slate-500" />
                      </span>
                      Ended Feb 17, 2022 at 19.00
                    </p>
                  </div>
                  <div className="w-[60px]  px-1 whitespace-nowrap text">
                    0/1000
                  </div>
                  <div className="w-[100px] px-1 whitespace-nowrap overflow-hidden text-ellipsis  group-hover:overflow-visible group-hover:whitespace-normal">
                    Rp 1.000.000
                  </div>
                  <div className="px-1">
                    <button
                      onClick={() => {
                        setEditTicket(!editTicket);
                      }}
                      className="focus:text-blue-600"
                    >
                      <RxHamburgerMenu className="cursor-pointer hover:text-blue-600 " />
                    </button>
                    <div
                      className={` -translate-x-[40px] -translate-y-[50px] flex ${
                        editTicket ? "absolute" : "hidden"
                      }`}
                    >
                      <div className="relative flex flex-col text-lg gap-y-2">
                        <button className="rounded-full bg-white p-2 hover:bg-blue-300 shadow-md">
                          <CiEdit />
                        </button>
                        <button className="rounded-full bg-white p-2 shadow-md hover:bg-blue-300">
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group flex bg-white justify-evenly py-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-200">
                  <div className="text-md px-1 w-fit ">2.</div>
                  <div className="pl-2 pr-2 w-[180px]">
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden text-black font-bold group-hover:overflow-visible group-hover:whitespace-normal">
                      Early Bird Ticket
                    </p>
                    <p className="flex flex-row items-center gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:whitespace-normal">
                      <span>
                        <FaCircle className="text-[9px] text-blue-600" />
                      </span>
                      On Sale | Ends today at 19.00
                    </p>
                  </div>
                  <div className="w-[60px]  px-1 whitespace-nowrap text-clip text">
                    0/100
                  </div>
                  <div className="w-[100px] px-1 whitespace-nowrap overflow-hidden text-ellipsis  group-hover:overflow-visible group-hover:whitespace-normal">
                    Rp 70.000
                  </div>
                  <div className="px-1">
                    <RxHamburgerMenu />
                  </div>
                </li>

                <li className="group flex bg-white justify-evenly py-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-200">
                  <div className="text-md px-1 w-fit">3.</div>
                  <div className="pl-2 pr-2 w-[180px]">
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden text-black font-bold group-hover:overflow-visible group-hover:whitespace-normal">
                      VVIP Ticket
                    </p>
                    <p className="flex flex-row items-center gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:whitespace-normal">
                      <span>
                        <FaCircle className="text-[9px] text-green-600" />
                      </span>
                      On Sale | Ends Mar 9, 2023 at 19.00
                    </p>
                  </div>
                  <div className="w-[60px] px-1 whitespace-nowrap">0/100</div>
                  <div className="w-[100px] px-1 whitespace-nowrap overflow-hidden text-ellipsis  group-hover:overflow-visible group-hover:whitespace-normal">
                    Rp 200.000
                  </div>
                  <div className="px-1">
                    <RxHamburgerMenu />
                  </div>
                </li>
              </ul>
              <div className="flex justify-end mt-10 mb-10 pr-2 ">
                <button
                  className=" bg-black rounded-sm py-2 px-8  text-white hover:bg-slate-700 "
                  onClick={() => {
                    navigate("/publish");
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            {/* FUNGSI PRINT TICKET BOX untuk ADD TICKET */}
            <div
              className={`flex justify-center  ${
                ticketOption ? "relative" : "hidden"
              } md:${
                ticketOption ? "absolute" : "hidden"
              } md:-right-[290px] md:top-[29px]`}
            >
              {addTicketBox()}
            </div>
             {/* PAGE untuk PROMO CODES jika tidak ada kode promo */}
             <div
              className={`${promCodePage ? "block" : "hidden"} md:${
                promCodePageMd ? "block" : "hidden"
              }`}
            >
              <div
                className={` mx-auto w-[270px] py-20 md:w-[360px] md:py-0 lg:ml-[160px] md:ml-[100px] md:mt-20 md:mb-20 `}
              >
                <CiDiscount1 className="text-[150px] rounded-full bg-slate-200 p-2 mx-auto" />
                <h1 className="text-center font-bold text-xl mt-6">
                  Create a promo code
                </h1>
                <p className=" text-justify mt-2">
                  Use codes to offer exclusive discounts, deals, and access to
                  your event. You can add them individually.
                </p>
                <div className="flex mt-6">
                  <button
                    type="button"
                    className="mx-auto py-3 px-6 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700 "
                    onClick={() => {
                      setPromoOption(true);
                      setPromCodePage(false);
                    }}
                  >
                    Add a code
                  </button>
                </div>
              </div>
            </div>
            <div
              className={` justify-center ${
                promoOption ? "flex" : "hidden"
              } md:${
                promoOption ? "absolute" : "hidden"
              } md:-right-[290px] md:top-[29px]`}
            >
              {addPromotionBox()}
            </div>
            
           
          </div>
        </div>
      </div>

      <Footer />
    </LayoutPromotor>
  );
};

export default ManageTicket;
