import React from "react";
import LayoutPromotor from "../../components/PromotorLayout";
import { HiMagnifyingGlass, HiOutlineTrash } from "react-icons/hi2";
import { FiEdit2, FiEye } from "react-icons/fi";
import {  useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const ManageEvent = () => {
  const navigate = useNavigate()
    const [showOption,setShowOption] = React.useState(false) 
  const [myEvent, setMyEvent] = React.useState([
    {
      name: "Event1",
      category: "food",
      date: "01/August/2022",
      sold: "",
      status: "",
    },
    {
        name: "Event2",
        category: "education",
        date: "11/August/2022",
        sold: "",
        status: "",
      },
  ]);

  const printMyEvent = () => {
    return myEvent.map((val, idx) => {
      return (
        <tr key={idx} className="group">
          <td className="border border-slate-500 group-hover:bg-slate-200" >{idx + 1}</td>
          <td className="border border-slate-500 group-hover:bg-slate-200" >{val.name}</td>
          <td className="border border-slate-500 group-hover:bg-slate-200" >{val.category}</td>
          <td className="border border-slate-500 group-hover:bg-slate-200">{val.sold}</td>
          <td className="border border-slate-500 group-hover:bg-slate-200">{val.date}</td>
          <td className="border border-slate-500 group-hover:bg-slate-200">{val.status}</td>
          <td className={`invisible group-hover:visible group`}>
          <span>
              <button type="button"><FiEye/></button>
            </span>
          <span>
              <button type="button"><FiEdit2/></button>
            </span>
            <span>
              <button type="button"><HiOutlineTrash/></button>
            </span>
          </td>
        </tr>
      );
    });
  };

  return (
    <LayoutPromotor>
      <div className="flex flex-col ml-5 mt-5 md:ml-28">
        <h1 className=" text-5xl text font-bold">Manage My Event</h1>
        <div>
          <button
            type="button"
            className="mt-16 p-4 rounded-lg font-bold text-white bg-black hover:bg-slate-800"
            onClick={()=>navigate("/create/event")}
          >
            Create Your Event!
          </button>
        </div>
        <div className="flex mt-8 h-12 w-fit bg-gray-200  focus:outline-blue-500 rounded-lg shadow-sm">
          <span className=" ml-2 flex my-auto ">
            <HiMagnifyingGlass />
          </span>
          <input
            className="focus:outline-none bg-gray-200 ml-2"
            type="text"
            placeholder="Search your Event"
          />
        </div>
        <table className=" border-collapse mt-6">
          <thead> 
            <tr>
              <th className=" bg-gray-700 text-white border border-slate-500">No.</th>
              <th className="bg-gray-700 text-white border border-slate-500">Event</th>
              <th className="bg-gray-700 text-white border border-slate-500">Category</th>
              <th className="bg-gray-700 text-white border border-slate-500">Sold</th>
              <th className=" bg-gray-700 text-white border border-slate-500">Date</th>
              <th className="bg-gray-700 text-white border border-slate-500">Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{printMyEvent()}</tbody>
        </table>
      </div>
      <Footer/>
    </LayoutPromotor>
  );
};

export default ManageEvent;
