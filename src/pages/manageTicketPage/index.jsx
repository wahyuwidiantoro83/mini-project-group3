import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";
import { HiTicket } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import ScrollToTop from "../../hooks/scrollToTop";

const ManageTicket = () => {
  const [ticketOption, setTicketOption] = React.useState(false);
  const [ticketLanding, setTicketLanding] = React.useState(true);
  const [buttonPaid, setButtonPaid] = React.useState(false);
  const [buttonFree, setButtonFree] = React.useState(false);
  const [countMax, setCountMax] = React.useState(0);
  const [countMax2, setCountMax2] = React.useState(0);
  const [newTicketPage, setNewTicketPage] = React.useState(false);
  const [ticketLandingMd, setTicketLandingMd] = React.useState(true);
  const [admissionPage, setAdmissionPage] = React.useState(false);
  const [admissionBlue, setAdmissionBlue] = React.useState(true);
  const [promoBlue, setPromoBlue] = React.useState(false);
  const [admissionPageMd, setAdmissionPageMd] = React.useState(false);
  const [editTicket, setEditTicket] = React.useState(false);
  const [promCodePage, setPromCodePage] = React.useState(false);
  const [promCodePageMd, setPromCodePageMd] = React.useState(false);
  const [promoLanding, setPromoLanding] = React.useState(true);
  const [promoOption, setPromoOption] = React.useState(false);
  const [newPromPage, setNewPromPage] = React.useState(false);
  const [toggleModal, setToggleModal] = React.useState(false);
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

  // ini untuk setting SESSION STORAGE
  // SEESION STORAGE UNTUK TICKET
  const [ticketFee, setTicketFee] = React.useState("");
  const [ticketName, setTicketName] = React.useState("");
  const [ticketStock, setTicketStock] = React.useState("");
  const [ticketPrice, setTicketPrice] = React.useState("");
  const [ticketSalesStartDate, setTicketSalesStartDate] = React.useState("");
  const [ticketSalesEndDate, setTicketSalesEndDate] = React.useState("");
  const [ticketSalesStartHour, setTicketSalesStartHour] = React.useState("");
  const [ticketSalesEndHour, setTicketSalesEndHour] = React.useState("");

  // SESSION STORAGE UNTUK PROMO
  const [promoName, setPromoName] = React.useState("");
  const [promoLimit, setPromoLimit] = React.useState("");
  const [discountAmount, setDiscountAmount] = React.useState("");
  const [applyTo, setApplyTo] = React.useState([]);
  const [ticketNameInModal, setTicketNameInModal] = React.useState([]);

  const navigate = useNavigate();

  // DATA TICKET UNTUK DI PUSH KE SESSION STORAGE
  const [dataTicket, setDataTicket] = React.useState([]);
  // DATA PROMO UNTUK DI PUSH KE SESSION STORAGE
  const [dataPromo, setDataPromo] = React.useState([]);

  // Setting get session storage event info basic and detail
  const eventBasic_info = sessionStorage.getItem("basic_info");
  const eventBasic_infoParsed = JSON.parse(eventBasic_info);
  const eventStart = new Date(eventBasic_infoParsed.eventDateStart);

  const printDataTicket = () => {
    const today = new Date();
    // console.log("nambah tidak?",dataTicket);
    return dataTicket.map((val, idx) => {
      if (today > new Date(val.ticketSalesEnd)) {
        return (
          <li
            key={idx}
            className="group flex bg-white justify-evenly py-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-200"
          >
            <div className="text-md px-1 w-fit">{idx + 1}</div>
            <div className="pl-2 pr-2 w-[180px]">
              <p className="whitespace-nowrap text-ellipsis overflow-hidden text-black font-bold group-hover:overflow-visible group-hover:whitespace-normal">
                {val.ticketName}
              </p>
              <p className="flex flex-row items-center gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:whitespace-normal">
                <span>
                  <FaCircle className="text-[9px] text-slate-500" />
                </span>
                Ended {monthName[new Date(val.ticketSalesEnd).getMonth()]}{" "}
                {new Date(val.ticketSalesEnd).getDate() < 10
                  ? `0${new Date(val.ticketSalesEnd).getDate()}`
                  : new Date(val.ticketSalesEnd).getDate()}
                , {new Date(val.ticketSalesEnd).getFullYear()} at{" "}
                {new Date(val.ticketSalesEnd).getHours() < 10
                  ? `0${new Date(val.ticketSalesEnd).getHours()}`
                  : new Date(val.ticketSalesEnd).getHours()}
                :
                {new Date(val.ticketSalesEnd).getMinutes() < 10
                  ? `0${new Date(val.ticketSalesEnd).getMinutes()}`
                  : new Date(val.ticketSalesEnd).getMinutes()}
              </p>
            </div>
            <div className="w-[60px]  px-1 whitespace-nowrap text">
              0/{val.ticketStock}
            </div>
            <div className="w-[100px] px-1 whitespace-nowrap overflow-hidden text-ellipsis  group-hover:overflow-visible group-hover:whitespace-normal">
              Rp {parseInt(val.ticketPrice).toLocaleString("id")}
            </div>
            <div className={`button${idx} relative flex text-lg gap-2`}>
              <button
                className="rounded-sm bg-white p-2 hover:bg-blue-300 shadow-md"
                onClick={() => console.log("masuk bang")}
              >
                <CiEdit />
              </button>
              <button
                className="rounded-sm bg-white p-2 shadow-md hover:bg-blue-300 "
                onClick={() => {
                  let getTicketPrint = sessionStorage.getItem("ticket-info");
                  let getTicketPrintParsed = JSON.parse(getTicketPrint);
                  getTicketPrintParsed.splice(idx, 1);
                  let getTicketPrintStringified =
                    JSON.stringify(getTicketPrintParsed);
                  sessionStorage.setItem(
                    "ticket-info",
                    getTicketPrintStringified
                  );
                  setDataTicket(getTicketPrintParsed);
                }}
              >
                <RiDeleteBinLine />
              </button>
            </div>
          </li>
        );
      } else {
        if (new Date(val.ticketSalesEnd).getDate() === new Date().getDate()) {
          return (
            <li
              key={idx}
              className="group flex bg-white justify-evenly py-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-200"
            >
              <div className="text-md px-1 w-fit ">{idx + 1}</div>
              <div className="pl-2 pr-2 w-[180px]">
                <p className="whitespace-nowrap text-ellipsis overflow-hidden text-black font-bold group-hover:overflow-visible group-hover:whitespace-normal">
                  {val.ticketName}
                </p>
                <p className="flex flex-row items-center gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:whitespace-normal">
                  <span>
                    <FaCircle className="text-[9px] text-blue-600" />
                  </span>
                  On Sale | Ends today at{" "}
                  {new Date(val.ticketSalesEnd).getHours() < 10
                    ? `0${new Date(val.ticketSalesEnd).getHours()}`
                    : new Date(val.ticketSalesEnd).getHours()}
                  :
                  {val.ticketSalesEnd.getMinutes() < 10
                    ? `0${new Date(val.ticketSalesEnd).getMinutes()}`
                    : new Date(val.ticketSalesEnd).getMinutes()}
                </p>
              </div>
              <div className="w-[60px]  px-1 whitespace-nowrap text-clip text">
                0/{val.ticketStock}
              </div>
              <div className="w-[100px] px-1 whitespace-nowrap overflow-hidden text-ellipsis  group-hover:overflow-visible group-hover:whitespace-normal">
                Rp {parseInt(val.ticketPrice).toLocaleString("id")}
              </div>

              <div className={`button${idx} relative flex text-lg gap-2`}>
                <button
                  className="rounded-sm bg-white p-2 hover:bg-blue-300 shadow-md"
                  onClick={() => console.log("masuk bang")}
                >
                  <CiEdit />
                </button>
                <button
                  className="rounded-sm bg-white p-2 shadow-md hover:bg-blue-300 "
                  onClick={() => {
                    let getTicketPrint = sessionStorage.getItem("ticket-info");
                    let getTicketPrintParsed = JSON.parse(getTicketPrint);
                    getTicketPrintParsed.splice(idx, 1);
                    let getTicketPrintStringified =
                      JSON.stringify(getTicketPrintParsed);
                    sessionStorage.setItem(
                      "ticket-info",
                      getTicketPrintStringified
                    );
                    setDataTicket(getTicketPrintParsed);
                  }}
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </li>
          );
        } else {
          return (
            <li className="group flex bg-white justify-evenly py-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-200">
              <div className="text-md px-1 w-fit">{idx + 1}</div>
              <div className="pl-2 pr-2 w-[180px]">
                <p className="whitespace-nowrap text-ellipsis overflow-hidden text-black font-bold group-hover:overflow-visible group-hover:whitespace-normal">
                  {val.ticketName}
                </p>
                <p className="flex flex-row items-center gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden group-hover:overflow-visible group-hover:whitespace-normal">
                  <span>
                    <FaCircle className="text-[9px] text-green-600" />
                  </span>
                  On Sale | Ends{" "}
                  {monthName[new Date(val.ticketSalesEnd).getMonth()]}{" "}
                  {new Date(val.ticketSalesEnd).getDate() < 10
                    ? `0${new Date(val.ticketSalesEnd).getDate()}`
                    : new Date(val.ticketSalesEnd).getDate()}
                  , {new Date(val.ticketSalesEnd).getFullYear()} at{" "}
                  {new Date(val.ticketSalesEnd).getHours() < 10
                    ? `0${new Date(val.ticketSalesEnd).getHours()}`
                    : new Date(val.ticketSalesEnd).getHours()}
                  :
                  {new Date(val.ticketSalesEnd).getMinutes() < 10
                    ? `0${new Date(val.ticketSalesEnd).getMinutes()}`
                    : new Date(val.ticketSalesEnd).getMinutes()}
                </p>
              </div>
              <div className="w-[60px] px-1 whitespace-nowrap">0/100</div>
              <div className="w-[100px] px-1 whitespace-nowrap overflow-hidden text-ellipsis  group-hover:overflow-visible group-hover:whitespace-normal">
                Rp {parseInt(val.ticketPrice).toLocaleString("id")}
              </div>
              <div className={`button${idx} relative flex text-lg gap-2`}>
                <button
                  className="rounded-sm bg-white p-2 hover:bg-blue-300 shadow-md"
                  onClick={() => {}}
                >
                  <CiEdit />
                </button>
                <button
                  className="rounded-sm bg-white p-2 shadow-md hover:bg-blue-300 "
                  onClick={() => {
                    let getTicketPrint = sessionStorage.getItem("ticket-info");
                    let getTicketPrintParsed = JSON.parse(getTicketPrint);
                    getTicketPrintParsed.splice(idx, 1);
                    let getTicketPrintStringified =
                      JSON.stringify(getTicketPrintParsed);
                    sessionStorage.setItem(
                      "ticket-info",
                      getTicketPrintStringified
                    );
                    setDataTicket(getTicketPrintParsed);
                  }}
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </li>
          );
        }
      }
    });
  };

  const printDiscountTo = () => {
    if (dataTicket) {
      return dataTicket.map((val, idx) => {
        return (
          <tr
            key={idx}
            className="group cursor-default group-hover:bg-slate-300 h-12"
          >
            <td className="group-hover:bg-slate-300">
              <input
                type="checkbox"
                name="applyDiscountTo"
                id=""
                value={val.ticketName}
              />
            </td>
            <td className="group-hover:bg-slate-300">{val.ticketName}</td>
            <td className="group-hover:bg-slate-300">
              Rp {val.ticketPrice.toLocaleString("id")}
            </td>
          </tr>
        );
      });
    }
  };

  const printTicketLanding = () => {
    // React.useEffect(() => {
    //   let getTicket = sessionStorage.getItem("ticket-info");
    //   let getTicketParse = JSON.parse(getTicket);
    //   setDataTicket(getTicketParse);
    // }, [ticketLanding]);

    const onHandleAdmissionTicketLanding = () => {
      setAdmissionPage(true);
      setAdmissionPageMd(true);
      setPromCodePage(false);
      setPromCodePageMd(false);
      setPromoOption(false);
      setPromoBlue(false);
      setAdmissionBlue(true);
    };

    const onHandlePromoTicketLanding = () => {
      setAdmissionPage(false);
      setAdmissionPageMd(false);
      setPromCodePage(true);
      setPromCodePageMd(true);
      setTicketOption(false);
      setPromoBlue(true);
      setAdmissionBlue(false);
    };

    if (!sessionStorage.getItem("ticket-info")) {
      console.log("masuk tidak ada data");
      return (
        <div className={`w-full justify-center flex md:h-[658px]`}>
          <div
            className={` w-[270px] py-20 md:w-[360px] md:py-0 md:ml-[220px] md:mt-20 ${
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
        </div>
      );
    } else {
      return (
        <div className={` md:mt-0  md:mx-auto`}>
          <div className="flex flex-col lg:w-[700px] md:w-[530px]">
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
                onClick={onHandleAdmissionTicketLanding}
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
                onClick={onHandlePromoTicketLanding}
              >
                Promo Codes
              </button>
            </div>
          </div>
          <div>{admissionPageContent()}</div>
          <div>{promoCodesPageContent()}</div>
        </div>
      );
    }
  };

  const admissionPageContent = () => {
    // useEffect(() => {
    //   if (sessionStorage.getItem("ticket-info")){
    //     let getTicket = sessionStorage.getItem("ticket-info")
    //     setDataTicket(JSON.parse(getTicket))
    //   };
    // }, []);

    const onHandleSave = () => {
      setAdmissionPage(false);
      setTicketOption(true);
    };
    return (
      <>
        <div
          className={`pl-1 mt-9 flex-col pr-1 ${
            admissionPage ? "flex" : "hidden"
          } md:${admissionPageMd ? "flex" : "hidden"}`}
        >
          <div className="flex justify-end w-full pr-10 ">
            <button
              className=" bg-black rounded-sm py-2 px-3  text-white hover:bg-slate-700 "
              onClick={onHandleSave}
            >
              Add Ticket
            </button>
          </div>

          <ul className="mt-7 min-h-[350px] max-h-[480px] overflow-auto ">
            {printDataTicket()}
          </ul>
          <div className="flex justify-end my-5 mb-10 pr-2 ">
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
      </>
    );
  };

  const printDataPromo = () => {
    console.log("data Promo di print", dataPromo);
    return dataPromo.map((val, idx) => {
      console.log("masuk persiapan map");
      return (
        <li key={idx} className="flex justify-between py-5 px-1">
          <div className=" text-ellipsis overflow-hidden w-[120px]">
            {val.promoName}
          </div>
          <div className="w-[77px] overflow-hidden text-ellipsis">
            Rp {parseInt(val.discountAmount).toLocaleString("id")}
          </div>
          <div className="w-[70px] text-ellipsis overflow-hidden">
            0/{val.promoLimit}
          </div>
          <div className=" text-ellipsis overflow-hidden w-[120px]">
            {val.applyTo.join(", ")}
          </div>
          <div className={`button${idx} relative w-[70px] flex text-lg gap-2`}>
            <button
              className="rounded-sm bg-white p-2 hover:bg-blue-300 shadow-md"
              onClick={() => console.log("masuk bang")}
            >
              <CiEdit />
            </button>
            <button
              className="rounded-sm bg-white p-2 shadow-md hover:bg-blue-300 "
              onClick={() => {
                let getPromoPrint = sessionStorage.getItem("promo-info");
                let getPromoPrintParsed = JSON.parse(getPromoPrint);
                getPromoPrintParsed.splice(idx, 1);
                let getPromoPrintStringified =
                  JSON.stringify(getPromoPrintParsed);
                sessionStorage.setItem("promo-info", getPromoPrintStringified);
                setDataPromo(getPromoPrintParsed);

                if (sessionStorage.getItem("promo-info").length < 1) {
                  sessionStorage.removeItem("promo-info");
                }
              }}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        </li>
      );
    });
  };

  const promoCodesPageContent = () => {
    // useEffect(()=>{
    //   printDataPromo()
    // },[promCodePageMd])
    // useEffect(() => {
    //   printDataPromo();
    // }, []);
    if (!sessionStorage.getItem("promo-info")) {
      return (
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
              Use codes to offer exclusive discounts, deals, and access to your
              event. You can add them individually.
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
      );
    } else {
      return (
        <div
          className={` mt-9 flex-col px-2 ${
            promCodePage ? "flex" : "hidden"
          } md:${promCodePageMd ? "block" : "hidden"}`}
        >
          <div className="flex justify-end w-full pr-10 ">
            <button
              className=" bg-black rounded-sm py-2 px-3  text-white hover:bg-slate-700 "
              onClick={() => {
                setPromoOption(true);
                setPromCodePage(false);
              }}
            >
              Add a code
            </button>
          </div>

          <ul className="mt-7 min-h-[350px] max-h-[480px] overflow-auto md:min-h-[410px] md:overflow-hidden">
            <li className="flex justify-between bg-slate-200 py-5 px-1">
              <div className=" text-ellipsis overflow-hidden w-[120px]">
                Name
              </div>
              <div className="w-[77px]">Discount</div>
              <div className="w-[70px]">Uses</div>
              <div className=" text-ellipsis overflow-hidden w-[120px]">
                Applies to
              </div>
              <div className="w-[70px]">Action</div>
            </li>
            {printDataPromo()}
          </ul>
        </div>
      );
    }
  };

  const addTicketBox = () => {
    const onHandleSaveTicketBox = () => {
      setNewTicketPage(true);
      setTicketLandingMd(false);
      setTicketOption(false);
      setAdmissionPage(true);
      setAdmissionPageMd(true);

      let ticketInfo = [
        {
          ticketFee,
          ticketName,
          ticketStock,
          ticketPrice,
          ticketSalesStartDate,
          ticketSalesEndDate,
          ticketSalesStartHour,
          ticketSalesEndHour,
          ticketSalesStart: ticketSalesStartDate + "T" + ticketSalesStartHour,
          ticketSalesEnd: ticketSalesEndDate + "T" + ticketSalesEndHour,
        },
      ];

      if (!sessionStorage.getItem("ticket-info")) {
        setDataTicket(ticketInfo);
        console.log("awal data ticket", sessionStorage.getItem("ticket-info"));
        let dataTicketStringified = JSON.stringify(ticketInfo);
        sessionStorage.setItem("ticket-info", dataTicketStringified);

        setButtonPaid(false);
        setButtonFree(false);
        setTicketFee("");
        setTicketSalesEndHour("");
        setTicketSalesStartHour("");
        setTicketSalesEndDate("");
        setTicketSalesStartDate("");
        setTicketName("");
        setTicketPrice("");
        setTicketStock("");
      } else {
        let getTicket = sessionStorage.getItem("ticket-info");
        console.log("ini get ticket", getTicket);
        let addTicketParsed = JSON.parse(getTicket);
        addTicketParsed.push(...ticketInfo);
        console.log("ini addticket parsed", addTicketParsed);
        let addTicketStringified = JSON.stringify(addTicketParsed);
        console.log("ini addticket setelah di push ", addTicketStringified);
        sessionStorage.setItem("ticket-info", addTicketStringified);
        setDataTicket(addTicketParsed);

        setButtonPaid(false);
        setButtonFree(false);
        setTicketFee("");
        setTicketSalesEndHour("");
        setTicketSalesStartHour("");
        setTicketSalesEndDate("");
        setTicketSalesStartDate("");
        setTicketName("");
        setTicketPrice("");
        setTicketStock("");
      }
    };

    const onHandleCancelTicketBox = () => {
      setTicketOption(false);
      setTicketLanding(true);
      setAdmissionPage(true);

      // RESTART VALUE
      setButtonPaid(false);
      setButtonFree(false);
      setTicketFee("");
      setTicketSalesEndHour("");
      setTicketSalesStartHour("");
      setTicketSalesEndDate("");
      setTicketSalesStartDate("");
      setTicketName("");
      setTicketPrice("");
      setTicketStock("");
    };

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
                setTicketFee("paid");
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
                setTicketFee("free");
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
                value={ticketName}
              />
            </div>
            <div className="w-full mx-auto text-xs text-right mt-1">
              {countMax}/50
            </div>
          </div>

          {/* Ticket Stock */}
          <div className="flex flex-col  mt-4">
            <div className="w-full bg-slate-100  pl-2 rounded-sm shadow-md mx-auto">
              <p className="text-sm pt-1 text-slate-600">
                Available Quantity<span className=" text-red-400">*</span>
              </p>
              <input
                className="ticketName bg-slate-100 focus:outline-none py-1 text-sm "
                type="number"
                placeholder="0"
                onChange={(e) => {
                  setTicketStock(e.target.value);
                }}
                value={ticketStock}
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
                  onChange={(e) => {
                    setTicketPrice(e.target.value);
                  }}
                  value={ticketPrice}
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
                      onChange={(e) => {
                        setTicketSalesStartDate(e.target.value);
                      }}
                      value={ticketSalesStartDate}
                    />
                  </label>
                </div>
                <div className="flex items-center w-fit bg-slate-200 px-2 py-1 rounded-sm shadow-md mt-4">
                  <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                    Sales Ends
                    <input
                      type="date"
                      className="bg-slate-200 text-slate-800 focus:outline-none"
                      onChange={(e) => {
                        setTicketSalesEndDate(e.target.value);
                      }}
                      value={ticketSalesEndDate}
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
                      onChange={(e) => {
                        setTicketSalesStartHour(e.target.value);
                      }}
                      value={ticketSalesStartHour}
                    />
                  </label>
                </div>
                <div className="flex items-center w-fit bg-slate-200 px-2 py-1 rounded-sm shadow-md mt-4">
                  <label className="flex flex-col w-[120px] text-slate-600 text-sm">
                    End Time
                    <input
                      type="time"
                      className="bg-slate-200 text-slate-800 focus:outline-none"
                      onChange={(e) => {
                        setTicketSalesEndHour(e.target.value);
                      }}
                      value={ticketSalesEndHour}
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
              onClick={onHandleCancelTicketBox}
            >
              Cancel
            </button>
            <button
              type="button"
              className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
              onClick={onHandleSaveTicketBox}
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
                  setCountMax2(e.target.value.length);
                  setPromoName(e.target.value);
                }}
                value={promoName}
              />
            </div>
            <div className="w-full mx-auto text-xs text-right mt-1">
              {countMax2}/50
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
                onChange={(e) => {
                  setPromoLimit(e.target.value);
                }}
                value={promoLimit}
              />
            </div>
          </div>

          {/* Discount amount */}
          <div className="flex flex-col mt-5 gap-y-2">
            <p>Input your discount amount by nominal or percentage</p>
            <div className="flex justify-between">
              <div className="pl-2 shadow-md flex items-center gap-3 h-[50px] w-[170px] bg-slate-100 ">
                <span className=" font-bold text-sm">Rp</span>
                <input
                  className="discountBy w-full pr-1 bg-slate-100 focus:outline-none py-1 text-sm "
                  type="number"
                  placeholder="0"
                  onChange={(e) => {
                    setDiscountAmount(e.target.value);
                  }}
                  value={discountAmount}
                />
              </div>
            </div>
          </div>

          {/* Apply Code to */}
          <div className="mt-9 gap-y-2 flex flex-col md:pr-2">
            <p>Apply your discount to :</p>
            <div>
              <input
                type="radio"
                name="applyDiscount"
                id=""
                value={applyTo}
                onChange={() => {
                  let allTicket = [];
                  allTicket = dataTicket.map((val, idx) => {
                    return val.ticketName;
                  });
                  setApplyTo(allTicket);
                }}
              />{" "}
              All Visible Ticket
              <br />
            </div>
            <div className="flex gap-1 justify-between">
              <div>
                <input
                  type="radio"
                  name="applyDiscount"
                  id=""
                  value={applyTo}
                />{" "}
                Only certain visible ticket
              </div>
              <span
                className=" text-slate-600 cursor-pointer hover:text-blue-600"
                onClick={() => setToggleModal(true)}
              >
                Select
              </span>
            </div>
          </div>

          {/* Save & Cancel Promo Button */}
          <div className="flex gap-3 mt-[86px] justify-end pb-6 md:mt-[15px] ">
            <button
              type="button"
              className=" rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
              onClick={() => {
                setPromCodePage(true);
                setPromoOption(false);

                setPromoName("");
                setPromoLimit("");
                setDiscountAmount("");
                setApplyTo(
                  (document.querySelector(
                    'input[name="applyDiscount"]:checked'
                  ).checked = false)
                );
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
              onClick={() => {
                setNewPromPage(true);
                setPromCodePage(true);
                setPromoOption(false);

                let promoInfo = [
                  {
                    promoName,
                    promoLimit,
                    discountAmount,
                    applyTo,
                  },
                ];

                if (!sessionStorage.getItem("promo-info")) {
                  setDataPromo(promoInfo);
                  console.log("dataPromo nih", dataPromo);
                  let dataPromoStringified = JSON.stringify(promoInfo);
                  sessionStorage.setItem("promo-info", dataPromoStringified);

                  setPromoName("");
                  setPromoLimit("");
                  setDiscountAmount("");
                  setApplyTo(
                    (document.querySelector(
                      'input[name="applyDiscount"]:checked'
                    ).checked = false)
                  );
                } else {
                  let getPromo = sessionStorage.getItem("promo-info");
                  let addPromoParsed = JSON.parse(getPromo);
                  addPromoParsed.push(...promoInfo);
                  let addPromoStringified = JSON.stringify(addPromoParsed);
                  sessionStorage.setItem("promo-info", addPromoStringified);
                  setDataPromo(addPromoParsed);

                  setPromoName("");
                  setPromoLimit("");
                  setDiscountAmount("");
                  setApplyTo(
                    (document.querySelector(
                      'input[name="applyDiscount"]:checked'
                    ).checked = false)
                  );
                }
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  const modalApplyDiscount = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
        <div className="bg-white w-[350px] rounded-sm py-4 px-4">
          <table className="w-full">
            <tr className=" text-left">
              <th></th>
              <th>Ticket Name</th>
              <th>Price</th>
            </tr>
            {printDiscountTo()}
          </table>
          <div className=" border-t-[1px] border-slate-300 pt-4 mt-5 flex justify-end gap-4">
            <button
              className="hover:text-blue-600 active:text-blue-800"
              onClick={() => setToggleModal(false)}
            >
              Cancel
            </button>
            <button
              className="hover:text-blue-600 active:text-blue-800"
              onClick={() => {
                setToggleModal(false);
                let checkedTicket = [];
                let checkedBox = document.getElementsByName("applyDiscountTo");
                for (let i = 0; i < checkedBox.length; i++) {
                  if (checkedBox[i].checked) {
                    checkedTicket.push(checkedBox[i].value);
                  }
                }
                setApplyTo(checkedTicket);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [openModal, setOpenModal]=React.useState(false)
  const modalBox = ()=>{
    document.body.style.overflow=openModal?"hidden":"auto"
    return <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-[350px] rounded-sm py-8 px-4 shadow-lg">
        <p className=" text-center font-semibold">Are you sure want to delete this event?</p>
        <div className="flex justify-center gap-3 mt-[50px]">
        <button className="rounded-sm font-bold text-black bg-white w-[100px] border-[1px] border-slate-500  hover:bg-slate-500 "
        onClick={()=>{setOpenModal(false)
        document.body.style.overflow="auto"}}>No</button>
        <button className="rounded-sm  text-white bg-black w-[100px] border-[1px] border-slate-500  hover:bg-slate-500 "
        onClick={()=>{
          sessionStorage.removeItem("basic_info")
          sessionStorage.removeItem("details")
          document.body.style.overflow="auto"
          navigate("/promotor")
        }}>Yes</button>
        </div>
      </div>
    </div>
  }


  React.useEffect(() => {});
  {
    ScrollToTop();
  }
  return (
    <LayoutPromotor>
      <div className="flex flex-col  md:flex-row ">
        <PromotorSubSideBar
          page="Tickets"
          eventTitle={eventBasic_infoParsed.eventTitle}
          day={eventStart.getDay()}
          month={eventStart.getMonth()}
          date={eventStart.getDate()}
          year={eventStart.getFullYear()}
          start_hour={eventBasic_infoParsed.eventStartHour}
          end_hour={eventBasic_infoParsed.eventEndHour}
        />
        <div className=" md:flex md:flex-col md:ml-[250px] lg:ml-[300px]">
          {printTicketLanding()}
          {/* <div className="">{admissionPageContent()}</div>
          <div className="">{promoCodesPageContent()}</div> */}
        </div>

        {/* PAGE untuk PROMO CODES jika tidak ada kode promo */}

        <div
          className={` flex justify-center  ${
            ticketOption ? "relative" : "hidden"
          } md:${
            ticketOption ? "absolute" : "hidden"
          } md:-right-[0px] md:top-[63px]`}
        >
          {addTicketBox()}
        </div>

        <div
          className={` justify-center ${promoOption ? "flex" : "hidden"} md:${
            promoOption ? "absolute" : "hidden"
          } md:-right-[0px] md:top-[60px]`}
        >
          {addPromotionBox()}
        </div>
      </div>
      <div className={`${toggleModal ? "visible " : "invisible"}`}>
        {modalApplyDiscount()}
      </div>
      <div className={`${openModal ? "visible " : "invisible"}`}>
          {modalBox()}
      </div>
      <Footer />
    </LayoutPromotor>
  );
};

export default ManageTicket;
