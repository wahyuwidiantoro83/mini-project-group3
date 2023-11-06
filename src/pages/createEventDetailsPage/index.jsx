import { useNavigate } from "react-router-dom";
import LayoutPromotor from "../../components/PromotorLayout";
import PromotorSubSideBar from "../../components/PromotorSubSideBar";

const CreateEventDetails = () => {
  const navigate = useNavigate();

  return (
   <LayoutPromotor>
       <PromotorSubSideBar />
      <div className="flex mt-[93px] h-fit">
        <div className="flex w-full pl-4 pr-4 pt-4">
          <form action="">

            {/* Maint Event Image */}
            <div>
            <legend className="text-4xl text font-bold">Main Event Image</legend>
            <p className="text-[0.8rem] mt-3">This is the first image attendees will see at the top of your listing.</p>
            </div>

          </form>
        </div>
      </div>
     </LayoutPromotor>

  );
};

export default CreateEventDetails;
