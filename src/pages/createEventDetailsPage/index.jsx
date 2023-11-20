import { useNavigate } from "react-router-dom";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";
import React from "react";
import { AiOutlineCloudUpload, AiOutlineFileImage } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Footer from "../../components/Footer";

const CreateEventDetails = () => {
  const navigate = useNavigate();
  const [media, setMedia] = React.useState(null);
  const [fileName, setFileName] = React.useState("No selected file");

  return (
    <LayoutPromotor>
      <PromotorSubSideBar page="Details" />
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
                type="file"
                accept="image/*"
                className="inputImage hidden bg-slate-200]"
                onChange={({ target: { files } }) => {
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
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="border-t-[1px] -z-50 border-slate-300"></div>
      <div className="flex gap-3 mt-6 justify-end pr-4 pb-6 ">
        <button
          type="button"
          className=" rounded-sm font-bold text-black bg-white w-36 border-[1px] border-slate-500  hover:bg-slate-500 "
        >
          Discard
        </button>
        <button
          type="button"
          className="p-3 w-36 rounded-sm font-bold text-white bg-black  hover:bg-slate-700"
          onClick={() => navigate("/manage/ticket")}
        >
          Save & Continue
        </button>
      </div>
      <Footer />
    </LayoutPromotor>
  );
};

export default CreateEventDetails;
