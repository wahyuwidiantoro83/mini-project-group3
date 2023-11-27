import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiNumberOneBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
  PiNumberFourBold,
  PiCheckBold,
} from "react-icons/pi";
const PromotorSubSideBar = (props) => {

  const menuSideBar = [
    { name: "Basic Info", number: <PiNumberOneBold />, numberSm:<PiNumberCircleOneBold/> },
    { name: "Details", number: <PiNumberTwoBold />, numberSm:<PiNumberCircleTwoBold/> },
    { name: "Tickets", number: <PiNumberThreeBold />, numberSm:<PiNumberCircleThreeBold/> },
    { name: "Publish", number: <PiNumberFourBold />, numberSm:<PiNumberCircleFourBold/> },
  ];
  const dayName =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
  const monthName =[
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
  ];
  const printMenuSidebarSm = () => {
    return menuSideBar.map((val,idx)=> {
      if (props.page===val.name){
        return <li key={idx} className="flex items-center justify-center gap-1 bg-white text-black w-full font-bold rounded-sm cursor-pointer">{val.numberSm}{val.name}</li>
      }
      return <li key={idx} className="flex items-center justify-center gap-1 w-full cursor-pointer py-1 hover:text-black hover:font-bold">{val.numberSm}{val.name}</li>
    })
  }

  const printMenuSidebar = () => {
    return menuSideBar.map((val, idx) => {
      if (props.page === val.name) {
        return (
          <li key={idx} className="flex items-center h-12 gap-2 pl-2 bg-slate-500">
            <div className="text-xl border-r-[1px] border-black">
              {val.number}
            </div>
            {val.name}
          </li>
        );
      }
      return (
        <li key={idx} className="flex items-center h-12 gap-2 pl-2">
          <div className="text-xl border-r-[1px] border-black">
            {val.number}
          </div>
          {val.name}
        </li>
      );
    });
  };

  return (
    <div>
      {/* SUB SIDEBAR UNTUK SM */}
      <div className="relative bg-slate-300 w-full md:hidden">
        <div className="pt-1 pb-3 items-end  gap-3">
          <p className="flex text-md pl-4 gap-2 w-fit ">
            {" "}
            <span className="cursor-pointer font-bold hover:text-blue-600">
              {"<"}
            </span>
            {props.eventTitle},
          </p>
          <p className="pl-8 text-sm ">{dayName[props.day]}, {monthName[props.month]} {props.date}, {props.year} {props.start_hour}</p>
        </div>
        <div className=" w-full">
          <ul className="flex justify-evenly  text-sm">
          {printMenuSidebarSm()}
            
          </ul>
        </div>
      </div>

      {/* SUB SIDEBAR UNTUK MD & LG */}
      <div className="hidden -z-20 fixed ml-[64px] w-[140px] h-screen bg-slate-200  border-l-[2px] border-l-orange-400  pt-4 md:block lg:w-[200px]">
        <div className="flex px-2 flex-col border-b-[1px] h-fit pb-6 border-b-black gap-y-1">
          <p>{props.eventTitle}</p>
          <p className=" text-sm">
            {dayName[props.day]},<span>{props.date} {monthName[props.month]} {props.year} </span>
          </p>
          <p className="text-sm ">
            {props.start_hour} - <span>{props.end_hour}</span>{" "}
          </p>
        </div>
        <div className="">
          <ul className="flex flex-col">
            {printMenuSidebar()}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default PromotorSubSideBar;
