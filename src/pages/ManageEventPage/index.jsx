import React, { useEffect } from "react";
import LayoutPromotor from "../../components/PromotorLayout";
import { HiMagnifyingGlass, HiOutlineTrash } from "react-icons/hi2";
import { FiEdit2, FiEye } from "react-icons/fi";
import {  useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import axios from "axios";
import { API_URL_PROMOTOR } from "../../helper";

const ManageEvent = () => {
  const [promotorName,setPromotorName] = React.useState("")
  const navigate = useNavigate()
    const [showOption,setShowOption] = React.useState(false) 
  const [myEvent, setMyEvent] = React.useState([
   
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

  const getPromotorEvent = async () =>{
    try{
      const response = await axios.get("http://localhost:2066/manage/event")
      console.log(response);
      console.log("ini adalah data murni",response.data.result);
      console.log("ini adalah data murni",response.data.result[0].name);

    }catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const getDataEvent = async ()=>{
      const getToken = localStorage.getItem("token")
      try {
        const response = await API_URL_PROMOTOR.post("/auth/checkrole",{},{headers:{Authorization: `Bearer ${getToken}`}})
        console.log("ini role data",response.data);
        setPromotorName(response.data.result.name)

        const getEvent = await API_URL_PROMOTOR.get("/manage-event",{headers:{Authorization: `Bearer ${getToken}`}})
        console.log("ini get event FE",getEvent.data.result);
        setMyEvent(getEvent.data.result)

      } catch (error) {
        console.log("Error get data", error);
      }
    }
    getDataEvent()
  },[])

  return (
    <LayoutPromotor accountName={promotorName}>
      <div className="flex flex-col ml-5 mt-5 md:ml-28">
        <h1 className=" text-5xl text font-bold">Manage My  Event</h1>
        <div>
          <button
            type="button"
            className="mt-16 p-4 rounded-lg font-bold text-white bg-black hover:bg-slate-800"
            onClick={()=>navigate("/promotor/create-event")}
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
          <ul>
            <li className="bg-yellow-200 ">
              <div>hai</div>
            </li>
          </ul>
      </div>
      <Footer/>
    </LayoutPromotor>
  );
};

export default ManageEvent;
