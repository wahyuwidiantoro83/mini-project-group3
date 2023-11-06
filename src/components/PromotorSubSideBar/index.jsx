import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
  PiNumberFourBold,
  PiCheckBold,
} from "react-icons/pi";
const PromotorSubSideBar = (props) => {
  return (
    <div>
      {/* SUB SIDEBAR UNTUK SM */}
      <div className="absolute top-[70px] bg-black w-full md:hidden">
        <div className="pt-1 pb-3 items-end text-white gap-3">
          <p className="flex text-md pl-4 gap-2 w-fit font-light">
            {" "}
            <span className="cursor-pointer font-bold hover:text-blue-600">
              {"<"}
            </span>
            Event Title,
          </p>
          <p className="pl-8 text-sm font-extralight">
            Wed, Oct 10, 2023 19:00
          </p>
        </div>
        <div className=" w-full">
          <ul className="flex justify-evenly  text-white text-sm">
            <li className="flex items-center justify-center gap-1 w-full cursor-pointer py-1 hover:bg-slate-300 hover:text-black hover:font-bold">
              {" "}
              <PiNumberCircleOneBold />
              Basic Info
            </li>
            <li className="flex items-center justify-center gap-1 bg-white text-black w-full font-bold cursor-pointer">
              {" "}
              <PiNumberCircleTwoBold />
              Details
            </li>
            <li className="flex items-center justify-center gap-1 w-full cursor-pointer hover:bg-slate-300 hover:text-black  hover:font-bold">
              <PiNumberCircleThreeBold />
              Tickets
            </li>
            <li className="flex items-center justify-center gap-1 w-full cursor-pointer hover:bg-slate-300 hover:text-black hover:font-bold">
              <PiNumberCircleFourBold />
              Publish
            </li>
          </ul>
        </div>
      </div>

      {/* SUB SIDEBAR UNTUK MD & LG */}
      <div className="hidden fixed -z-50 ml-[64px] w-[140px] h-screen bg-slate-900 text-white border-l-[2px] border-l-orange-400  pt-4 md:block lg:w-[200px]">
        <div className="flex px-2 flex-col border-b-[1px] h-fit pb-6 border-b-orange-400 gap-y-1">
          <p>Event Name</p>
          <p className=" text-sm font-thin">
            Wed,<span>10 October 2023 </span>
          </p>
          <p className="text-sm font-thin">
            19:00 - <span>23:00</span>{" "}
          </p>
        </div>
        <div className="">
          <ul className="flex flex-col">
            <li className="flex items-center h-12 gap-2 pl-2">
              <PiCheckBold/>
              Basic Info
            </li>
            <li className="flex items-center h-12 gap-2 pl-2 bg-slate-500">
              <PiNumberTwoBold className="text-xl border-r-[1px]" />
              Details
            </li>
            <li className="flex items-center h-12 gap-2 pl-2">
              <PiNumberThreeBold className="text-xl border-r-[1px]" />
              Tickets
            </li>
            <li className="flex items-center h-12 gap-2 pl-2">
              <PiNumberFourBold className="text-xl border-r-[1px]" />
              Publish
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromotorSubSideBar;
