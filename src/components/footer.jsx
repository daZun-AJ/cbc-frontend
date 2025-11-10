import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Footer() {
    return (
        <div className="w-full h-fit bg-gray-100 rounded-2xl flex flex-col p-[10px] mb-[20px] font-raleway md:p-[50px] lg:w-[980px]">
            <Link to='/' className="text-[24px] text-black">CBC</Link>
            <div className="flex flex-col lg:flex-row justify-between mt-[50px]">
                <div className="flex flex-col gap-[10px] mt-[20px]">
                    <p className="w-[250px] text-[14px] text-gray-500">Premium Cosmetics Delivered to Your Door</p>
                    <div className="flex flex-col gap-3 mt-[20px]">
                        <p>Address : 123, Main Road, Colombo (Sri Lanka)</p>
                        <p>Email : Crystalii@example.com</p>
                        <p>Phone : +94 77 12 34 5678</p>
                    </div>
                </div>

                <div className="flex flex-col mt-[40px]">
                    <div className="flex flex-col gap-[20px] md:flex-row">
                        <Link to="/" className="text-[14px] text-black mt-[20px]">Home</Link>
                        <Link to="/about" className="text-[14px] text-black mt-[20px]">About Us</Link>
                        <Link to="/products" className="text-[14px] text-black mt-[20px]">Products</Link>
                        <Link to="/reviews" className="text-[14px] text-black mt-[20px]">Reviews</Link>
                        <Link to="/contact" className="text-[14px] text-black mt-[20px]">Contact</Link>
                    </div>

                    <div className="flex flex-row gap-[10px] text-4xl mt-[40px]">
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <AiFillTikTok />
                    </div>
                </div>
            </div>

            <p className="text-[12px] mt-[40px]">© 2023 Crystal Beauty Care. All rights reserved.</p>
        </div>
    )
}