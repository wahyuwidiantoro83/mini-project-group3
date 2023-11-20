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
            Event Title,
          </p>
          <p className="pl-8 text-sm ">Wed, Oct 10, 2023 19:00</p>
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
          <p>Event Name</p>
          <p className=" text-sm">
            Wed,<span>10 October 2023 </span>
          </p>
          <p className="text-sm ">
            19:00 - <span>23:00</span>{" "}
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
