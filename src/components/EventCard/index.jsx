import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" flex flex-col w-full h-full  mx-auto cursor-pointer shadow-md hover:shadow-2xl transition-all ease-linear duration-200"
        onClick={() => navigate(`/event/detail/${props.data.id}`)}
      >
        <div className=" aspect-video border">
          <img className=" object-cover w-full h-full" src={props.data.picture} alt="" />
        </div>
        <div className="flex flex-col px-4 py-6 gap-3">
          <span className=" text-lg font-bold line-clamp-3">{props.data.title}</span>
          <span className=" text-sm font-semibold text-gray-500 line-clamp-2">
            {props.data.date},{props.data.starthour}
          </span>
          <span className=" text-sm max-w-[90%] text-gray-500 line-clamp-1">
            {props.data.location}
          </span>
          <span className="text-sm font-bold text-gray-500">{props.data.price}</span>
          <span className=" text-base font-medium">{props.data.promotor}</span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
