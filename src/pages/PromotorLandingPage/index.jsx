import Navbar from "../../components/Navbar"
import PromotorHeader from "../../components/PromotorHeader"
import PromotorLandingImagesm from "../../assets/PromotorLandingImagesm.jpg";
import PromotorLandingImage from "../../assets/PromotorLandingImage.jpg"
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hooks/scrollToTop";


const PromotorLandingPage = () => {
    const navigate = useNavigate()
    {ScrollToTop()}
    return (
        <div>
            {/* <PromotorHeader/> */}
            <PromotorHeader/>
            <div className="flex flex-col h-[400px] bg-cover bg-center md:h-[430px] " style={{backgroundImage:`url("${PromotorLandingImage}")`}}>
                <div className="mx-auto text-white font-bold text-5xl text-center mt-6 p-4 md: h-fit w-fit  rounded-full">Create Your <span className=" text-orange-500">Event</span> Based on <span className=" text-orange-500">Market</span>.</div>
                <button type="button" className="bg-orange-500 font-semibold w-fit text-white mx-auto rounded-full px-6 py-3 my-32  hover:bg-orange-600 md:my-52" onClick={()=>navigate("/create/event")}>Start Your Event!</button>
            </div>
            <Footer/>
        </div>
    )
}

export default PromotorLandingPage