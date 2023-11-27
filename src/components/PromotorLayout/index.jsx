import Footer from "../Footer"
import PromotorHeader from "../PromotorHeader"
import PromotorSideBar from "../PromotorSideBar"

const LayoutPromotor = (props) => {
    return <div className="flex flex-col">
        <PromotorHeader accountName={props.accountName}/>
        <PromotorSideBar/>
        {props.children}
    </div>
}

export default LayoutPromotor