import LayoutPromotor from "../../components/PromotorLayout"
import PromotorSubSideBar from "../../components/PromotorSubSideBar"

const PublishPage = () => {
    



    return <LayoutPromotor>
      <PromotorSubSideBar page="Tickets" eventTitle={eventBasic_infoParsed.eventTitle} day={dayName[eventStart.getDay()]} month={monthName[eventStart.getMonth()]} date={eventStart.getDate()} year={eventStart.getFullYear()} start_hour={eventBasic_infoParsed.eventStartHour} />

    </LayoutPromotor>
}

export default PublishPage