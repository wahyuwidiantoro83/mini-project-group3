import { useNavigate } from "react-router-dom";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";
import React from "react";
import { AiOutlineCloudUpload, AiOutlineFileImage } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hooks/scrollToTop";
import axios from "axios";
import { API_URL } from "../../helper";

const CreateEventDetails = () => {
  const navigate = useNavigate();
  const [media, setMedia] = React.useState(null);
  const [fileName, setFileName] = React.useState("No selected file");
  const [eventDesc, setEventDesc]=React.useState("")
  const [imageFile,setImageFile]=React.useState("")

  const eventBasic_info = sessionStorage.getItem("basic_info")
  const eventBasic_infoParsed = JSON.parse(eventBasic_info)
  const eventStart = new Date (eventBasic_infoParsed.eventDateStart)

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
          document.body.style.overflow="auto"
          navigate("/promotor")
        }}>Yes</button>
        </div>
      </div>
    </div>
  }

  {ScrollToTop()}
  return (
    <LayoutPromotor>
      <PromotorSubSideBar page="Details" eventTitle={eventBasic_infoParsed.eventTitle} day={eventStart.getDay()} month={eventStart.getMonth()} date={eventStart.getDate()} year={eventStart.getFullYear()} start_hour={eventBasic_infoParsed.eventStartHour} end_hour={eventBasic_infoParsed.eventEndHour} />
      <div className="w-full pb-7 pl-5 pr-10 md:w-[500px] md:mx-auto lg:w-[600px]">
        {/* Maint Event Image */}
        <form action="" className=" md:ml-14">
          <div className="pt-4 border-b-[1px] border-slate-300 pb-8">
            <legend className="text-4xl text font-bold">
              Main Event Image
            </legend>
            <p className="text-sm mt-3 mb-3">
              This is the first image attendees will see at the top of your
              listing.
            </p>
            <div
              className="mx-auto w-full h-[250px] flex flex-col rounded-sm border-2 border-dashed bg-slate-200  border-blue-300 items-center justify-center cursor-pointer"
              onClick={() => {
                document.querySelector(".inputImage").click();
              }}
            >
              <input
              id="file"
                type="file"
                accept="image/*"
                className="inputImage hidden bg-slate-200]"
                onChange={({ target: { files } }) => {
                  console.log("ini files dalam gambar",files);
                  setImageFile(files[0])
                  console.log("ini image file", imageFile);
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setMedia(URL.createObjectURL(files[0]));
                  }
                }}
              />
              {media ? (
                <img src={media} className=" h-full " alt={fileName} />
              ) : (
                <>
                  <AiOutlineCloudUpload className=" text-5xl text-slate-600" />
                  <p className="text-slate-600">Browse your event image</p>
                </>
              )}
            </div>
            <div className="flex items-center w-full mx-auto justify-between pt-2">
              <AiOutlineFileImage className=" text-lg" />
              <span className="flex items-center text-sm">
                {fileName} -{" "}
                <TiDeleteOutline
                  className=" text-lg"
                  onClick={() => {
                    setFileName("No selected file");
                    setMedia(null);
                  }}
                />
              </span>
            </div>
          </div>

          {/* Event Description */}
          <div className="mt-2">
            <legend className="text-4xl text font-bold">Description</legend>
            <p className="text-sm mt-3 mb-3">
              Add more details to your event like your schedule, sponsors or
              featured guess
            </p>
            <div className="h-[150px]">
              <textarea
                name=""
                id=""
                className=" border-b-[2px] border-blue-500 p-2 text-sm bg-slate-200 h-full w-full focus:outline-none resize-none"
                onChange={(e)=>setEventDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="border-t-[1px] -z-50 border-slate-300"></div>
      <div className="flex gap-3 mt-6 justify-end pr-4 pb-6 ">
        <button
          type="button"
          className="rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
          onClick={()=>{setOpenModal(true)}}
        >
          Discard
        </button>
        <button
          type="button"
          className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
          onClick={() => {
            
              // setting axios untuk post image
            const file = document.querySelector("#file")
            console.log("ini image file", imageFile);
            const formData = new FormData();
            formData.append("fileUpload",imageFile)
            console.log("ini formdata",formData);
             API_URL.post("/create/event",formData).then((res)=>{
              console.log(res);
             })

            const resultDetails = {fileName,eventDesc}
            const resultDetailsStringified = JSON.stringify(resultDetails)
            sessionStorage.setItem("details", resultDetailsStringified)
            navigate("/manage/ticket")
          }}
        >
          Save & Continue
        </button>
      </div>
      <div className={`${openModal ? "visible " : "invisible"}`}>
          {modalBox()}
      </div>
      <Footer />
    </LayoutPromotor>
  );
};

export default CreateEventDetails;
