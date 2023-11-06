import React from "react";
import { AiOutlineDown } from "react-icons/ai";


const SelectOption = (props) => {
    const [itemValue, setItemValue] = React.useState(`${props.name}`)

    const printOption = (item)=>{
        return item.map((val,idx)=>{
            return <li
            key={idx}
            className="hover:bg-slate-300 w-full pl-2 py-1 rounded-sm"
            onClick={()=>setItemValue(`${props.val}`)}>
                {item.val}
            </li>
        })
    }
    return <div
    className="flex justify-between px-2 py-2 items-center bg-gray-200 mt-2 w-36 cursor-pointer shadow-lg rounded-sm"
  >
    <ul className=" flex">
        {printOption()}
    </ul>
    <span>
      <AiOutlineDown />
    </span>
  </div>;
};

export default SelectOption