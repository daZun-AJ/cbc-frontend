import { IoMailUnreadOutline } from "react-icons/io5";
import Footer from "../../components/footer";
import { FiSmartphone } from "react-icons/fi";
import { RiBuilding2Line } from "react-icons/ri";


export default function ContactPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center max-w-[1200px] gap-[120px] mx-auto">
            <div className="w-full  px-[20px] mt-[40px] flex flex-col lg:flex-row justify-between font-raleway">
                <h1 className="text-[76px] md:text-[124px] md:w-[570px]">Let’s Connect!</h1>

                <div className="w-full md:w-[490px]">
                    <p className="text-[16px]">Have questions about our products, your order, or just want to say hello? We’re here for you! At Crystal Beauty Care, your experience means everything to us</p>
                    <div className="flex flex-col gap-[30px] px-[30px] py-[40px] bg-gray-200 mt-[100px]">
                        <div className="mb-[20px]">
                            <h3 className="text-[19px] font-semibold mb-[20px]">Reach Us Anytime</h3>
                            <p className="text-[12px]">Our friendly support team is ready to assist you with any inquiries. We typically respond within 24–48 hours.</p>
                        </div>

                        <div className="flex items-center gap-[20px]">
                            <IoMailUnreadOutline className="w-[40px] h-[40px]" />
                            <div>
                                <h3 className="text-[14px] font-semibold">support@cbcbeauty.com</h3>
                                <p className="text-[12px]">For product inquiries, feedback, or order support.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <FiSmartphone className="w-[40px] h-[40px]" />
                            <div>
                                <h3 className="text-[14px] font-semibold">+94 77 123 4567</h3>
                                <p className="text-[12px]">Available Monday to Friday – 9:00 AM to 5:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <RiBuilding2Line className="w-[40px] h-[40px]" />
                            <div>
                                <h3 className="text-[14px] font-semibold">Crystal Beauty Care (Pvt) Ltd.</h3>
                                <p className="text-[12px]">No. 24, Bloom Street, Colombo 07, Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}