import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { data } from "../Landing/data";
import {
  HiOutlineShare,
  HiOutlineHeart,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineMinus,
  HiOutlinePlus,
} from "react-icons/hi2";

const DetailEvent = (props) => {
  const param = useParams();
  const dataDetail = [...data].filter((value) => value.id === parseInt(param.id))[0];
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="content-detail flex flex-col px-4 py-2 md:px-24 md:py-6 lg:px-44 lg:py-12 gap-6">
          <div className="main-banner w-full md:h-[460px] border-2 rounded-3xl overflow-hidden shadow-sm relative">
            <div className="hidden lg:block w-full h-full">
              <img className="w-full h-full object-fill blur-lg" src={dataDetail.picture} alt="" />
            </div>
            <div className="aspect-video h-full md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2">
              <img className="w-full h-full object-fill" src={dataDetail.picture} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg text-gray-500">{dataDetail.date}</span>
            <div className="flex gap-2">
              <span className="w-10 h-10 p-2 hover:bg-slate-100 transition-all duration-200 rounded-full">
                <HiOutlineHeart size={"100%"} />
              </span>
              <span className="w-10 h-10 p-2 hover:bg-slate-100 transition-all duration-200  rounded-full">
                <HiOutlineShare size={"100%"} />
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col h-fit w-full lg:w-[60%] gap-10">
              <span className=" text-2xl md:text-4xl lg:text-5xl font-extrabold">
                {dataDetail.title}
              </span>
              <div className="flex items-center w-full bg-gray-100 rounded-md  p-4 justify-between">
                <div className="flex items-center gap-4">
                  <div className="aspect-square w-10 border-2 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
                      alt=""
                    />
                  </div>
                  <span className="font-bold">By {dataDetail.promotor}</span>
                </div>
                <button
                  className=" bg-gray-800 py-3 px-6 md:px-10 lg:px-12 rounded-md text-sm text-white"
                  type="button"
                >
                  Follow
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl md:text-2xl font-bold">Date & Time</span>
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 p-2">
                    <HiOutlineCalendar size={"100%"} />
                  </span>
                  <span className="text-gray-500 max-sm:text-sm">
                    {dataDetail.date}, {dataDetail.startHour} - {dataDetail.endHour}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl md:text-2xl font-bold">Location</span>
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 p-2">
                    <HiOutlineMapPin size={"100%"} />
                  </span>
                  <span className="text-gray-500 max-sm:text-sm">{dataDetail.location}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl md:text-2xl font-bold">About this event</span>
                <p className="text-gray-500 max-sm:text-sm">{dataDetail.detail}</p>
              </div>
              <div className="flex flex-col gap-4" id="ticket-lists">
                <span className="text-xl md:text-2xl font-bold">Available tickets</span>
                <div className="ticket-item flex flex-col border-2 rounded-xl p-4 gap-3 bg-slate-200">
                  <span className="text-xl font-medium text-gray-800">Event - Reguler</span>
                  <span className="text-sm text-gray-500">Sales ends in 29 Oktober 2023</span>
                  <hr class="h-px border-0 bg-slate-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold">Rp. 50.000,00</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 p-2 hover:bg-slate-100 transition-all duration-200 rounded-full">
                        <HiOutlineMinus size={"100%"} />
                      </span>
                      <span className="font-semibold">0</span>
                      <span className="w-10 h-10 p-2 hover:bg-slate-100 transition-all duration-200 rounded-full">
                        <HiOutlinePlus size={"100%"} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky max-lg:bottom-0 max-lg:bg-white lg:flex w-full lg:w-[30%] lg:relative shadow-sm">
              <div className="sticky flex flex-col items-center top-20 w-full h-fit border rounded-lg shadow-sm p-4">
                <span className="block p-6 text-lg">{dataDetail.price}</span>
                <a className="w-full" href="#ticket-lists">
                  <button className="bg-gray-800 py-3 px-12 w-full rounded-md text-sm text-white">
                    Get Ticket
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailEvent;
