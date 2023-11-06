import React from 'react';
import { BsCalendarEvent, BsTicketPerforated } from 'react-icons/bs';
import { BiHomeAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const PromotorSideBar = (props) => {
    const navigate = useNavigate()
    const [sidebarOption, setSideBarOption] = React.useState([{
        name:"home",
        icon:<BiHomeAlt2/>,
        path:"/promotor/",
        desc : "Home"
    },
    {
        name:"manage",
        icon : <BsCalendarEvent/>,
        path:"/manage/event",
        desc : "Manage Event"
    },
    {
        name:"ticket",
        icon : <BsTicketPerforated />,
        path:"/manage/ticket",
        desc : "Manage Ticket"
    },
])

const printSidebarMenu = () => {
    return sidebarOption.map ((val,idx) => {
        return <li key={idx}
        id={val.name}
        className=" flex flex-col text-center w-full cursor-pointer py-4 rounded-sm text-2xl hover:bg-slate-800 hover:text-white"
        onClick={()=>navigate(val.path)}>
        <span className='my-2 mx-auto'>{val.icon}</span>
        <span className='text-xs  hidden md:block'>{val.desc}</span>
        </li>
    })
}
// const printSidebarMenu2 = () => {
//     return sidebarOption.map ((val,idx) => {
//         return <li key={idx}
//         id={val.name}
//         className=" flex flex-col text-center w-full cursor-pointer py-2 text-xl rounded-full hover:bg-slate-400 hover:text-white"
//         onClick={()=>navigate(val.path)}>
//         <span className='my-2 mx-auto'>{val.icon}</span>
//         </li>
//     })
// }
    return (
        <div>
        <div className="  fixed h-full hidden bg-black text-white md:flex w-16">
            <ul className='flex w-full flex-col'>
                {printSidebarMenu()}
            </ul>
        </div>
        {/* <div className=' fixed flex left-24 top-20 md:hidden'>
         <ul className='rounded-full  bg-slate-500/80 flex w-96 h-fit'>
            {printSidebarMenu2()}
         </ul>
        </div> */}

        </div>
    )
}

export default PromotorSideBar