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
          <img
            className=" object-cover w-full h-full"
            src={`http://localhost:2066/public/event/${props.data.image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col px-4 py-6 gap-2">
          <span className=" text-xl font-semibold line-clamp-3">{props.data.name}</span>
          <span className=" text-sm font-semibold text-gray-500 line-clamp-2">
            {new Date(props.data.startDate + " " + props.data.startHour).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </span>
          <span className=" text-sm max-w-[90%] text-gray-500 line-clamp-1">
            {props.data.city.city === "Online"
              ? "Online"
              : `${props.data.address}, ${props.data.city.city}`}
          </span>
          <span className="text-sm font-bold text-gray-500">
            {props.data.tickets[0].start_at === 0
              ? "FREE"
              : props.data.tickets[0].start_at.toLocaleString("id", {
                  style: "currency",
                  currency: "idr",
                })}
          </span>
          <span className=" text-base font-medium">{props.data.auth.accountDetail.name}</span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
