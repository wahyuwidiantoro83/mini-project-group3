import PromotorHeader from "../PromotorHeader"
import PromotorSideBar from "../PromotorSideBar"

const LayoutPromotor = (props) => {
    return <div className="flex flex-col">
        <PromotorHeader/>
        <PromotorSideBar/>
        {props.children}
    </div>
}

export default LayoutPromotor