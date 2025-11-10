import { useState } from "react";
import { FiBox } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";



export default function Header() {

    const [sideDrawerOpened, setSideDrawerOpened] = useState(false)
    
    return(
        <div className="w-full lg:w-[980px] px-[40px] py-[20px] bg-black rounded-full flex justify-between items-center relative z-50 font-raleway">
            <Link to={'/'} className="text-[24px] text-white">CBC</Link>

            <div className="hidden lg:flex gap-[50px] items-center">
                <div className="flex gap-[20px]">
                    <Link to="/" className="text-[16px] text-white">Home</Link>
                    <Link to="/about" className="text-[16px] text-white">About Us</Link>
                    <Link to="/products" className="text-[16px] text-white">Products</Link>
                    <Link to="/reviews" className="text-[16px] text-white">Reviews</Link>
                    <Link to="/contact" className="text-[16px] text-white">Contact</Link>
                </div>

                <div className="flex gap-[20px] items-center">
                    <Link className="p-[10px] border-[2px] border-primary rounded-full text-[16px] text-white hover:bg-green-400/20 duration-300">
                        <FiBox />
                    </Link>
                    <Link to="/cart" className="p-[10px] border-[2px] border-primary rounded-full text-[16px] text-white hover:bg-green-400/20 duration-300">
                        <MdOutlineShoppingCart />
                    </Link>
                    <Link to="/login"
                    className="px-[25px] py-[7px] border-[2px] border-green-400 text-white font-raleway rounded-full flex flex-row gap-[10px] items-center hover:bg-green-400/20 duration-300"
                    >
                        <div className="p-[4px] rounded-full bg-green-400/20">
                            <div className="w-[5px] h-[5px] rounded-full bg-green-400"></div>
                        </div>
                         Login
                    </Link>
                </div>
            </div>

            <div className="p-[5px] border-[2px] border-primary rounded-full text-[24px] text-white lg:hidden cursor-pointer"
            onClick={() => setSideDrawerOpened(true)}
            >
                <RiMenu4Fill />
            </div>

            {/* Side drawer */}
            <div
                className={`fixed top-0 left-0 w-[80%] h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center gap-10 z-40 transform transition-transform duration-500 ease-in-out ${
                    sideDrawerOpened ? 'translate-x-0' : '-translate-x-full'
                }`}
            >

                <div className="p-[5px] border-[2px] border-red-400 rounded-full text-[24px] text-white absolute top-[20px] left-[20px]"
                onClick={() => setSideDrawerOpened(false)}
                >
                    <IoClose />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 font-raleway text-center">
                    <a href="/" className="text-[20px] text-white hover:text-green-400 duration-300 transition-transform transform hover:scale-105">
                        Home
                    </a>
                    <a href="/about" className="text-[20px] text-white hover:text-green-400 duration-300 transition-transform transform hover:scale-105">
                        About Us
                    </a>
                    <a href="/products" className="text-[20px] text-white hover:text-green-400 duration-300 transition-transform transform hover:scale-105">
                        Products
                    </a>
                    <a href="/reviews" className="text-[20px] text-white hover:text-green-400 duration-300 transition-transform transform hover:scale-105">
                        Reviews
                    </a>
                    <a href="/contact" className="text-[20px] text-white hover:text-green-400 duration-300 transition-transform transform hover:scale-105">
                        Contact
                    </a>
                </div>

                <div className="flex gap-[20px] items-center">
                    <Link className="p-[10px] border-[2px] border-primary rounded-full text-[16px] text-white hover:bg-green-400/20 duration-300">
                        <FiBox />
                    </Link>
                    <a href="/cart" className="p-[10px] border-[2px] border-primary rounded-full text-[16px] text-white hover:bg-green-400/20 duration-300">
                        <MdOutlineShoppingCart />
                    </a>
                </div>

                <Link to="/login" 
                className="px-[25px] py-[7px] border-[2px] border-green-400 text-white font-raleway rounded-full flex flex-row gap-[10px] items-center hover:bg-green-400/20 duration-300"
                >
                    <div className="p-[4px] rounded-full bg-green-400/20">
                        <div className="w-[5px] h-[5px] rounded-full bg-green-400"></div>
                    </div>
                    Login
                </Link>
                
            </div>
        </div>
    )

}