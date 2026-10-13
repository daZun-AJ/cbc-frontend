import { useState } from "react";
import { FiBox, FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cartContext";
import { getCurrentUser, logoutUser } from "../utils/auth";
import ProfileMenu, { Avatar } from "./profileMenu";

function CartLink({ count, onClick }) {
    return (
        <Link
            to="/cart"
            onClick={onClick}
            className="relative p-[10px] border-[2px] border-primary rounded-full text-[16px] text-white hover:bg-green-400/20 duration-300"
        >
            <MdOutlineShoppingCart />
            {count > 0 && (
                <span className="absolute -top-[8px] -right-[8px] min-w-[18px] h-[18px] px-[4px] rounded-full bg-green-400 text-black text-[11px] font-bold flex items-center justify-center">
                    {count}
                </span>
            )}
        </Link>
    );
}

function LoginLink({ onClick }) {
    return (
        <Link
            to="/login"
            onClick={onClick}
            className="px-[25px] py-[7px] border-[2px] border-green-400 text-white font-raleway rounded-full flex flex-row gap-[10px] items-center hover:bg-green-400/20 duration-300"
        >
            <div className="p-[4px] rounded-full bg-green-400/20">
                <div className="w-[5px] h-[5px] rounded-full bg-green-400"></div>
            </div>
            Login
        </Link>
    );
}

export default function Header() {
    const [sideDrawerOpened, setSideDrawerOpened] = useState(false);
    const [user, setUser] = useState(getCurrentUser);
    const { itemCount } = useCart();
    const navigate = useNavigate();

    function handleLogout() {
        logoutUser();
        setUser(null);
        setSideDrawerOpened(false);
        toast.success("Logged out successfully");
        navigate("/");
    }

    const closeDrawer = () => setSideDrawerOpened(false);
    const drawerLinkClass =
        "text-[20px] text-white hover:text-green-400 duration-300 transition-transform transform hover:scale-105";

    return (
        <div className="w-full lg:w-[980px] px-[40px] py-[20px] bg-black rounded-full flex justify-between items-center relative z-50 font-raleway">
            <Link to={"/"} className="text-[24px] text-white">CBC</Link>

            {/* Desktop */}
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
                    <CartLink count={itemCount} />

                    {user ? (
                        <ProfileMenu user={user} onLogout={handleLogout} />
                    ) : (
                        <LoginLink />
                    )}
                </div>
            </div>

            {/* Mobile menu button */}
            <div
                className="p-[5px] border-[2px] border-primary rounded-full text-[24px] text-white lg:hidden cursor-pointer"
                onClick={() => setSideDrawerOpened(true)}
            >
                <RiMenu4Fill />
            </div>

            {/* Side drawer */}
            <div
                className={`fixed top-0 left-0 w-[80%] h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center gap-10 z-40 transform transition-transform duration-500 ease-in-out ${
                    sideDrawerOpened ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div
                    className="p-[5px] border-[2px] border-red-400 rounded-full text-[24px] text-white absolute top-[20px] left-[20px] cursor-pointer"
                    onClick={closeDrawer}
                >
                    <IoClose />
                </div>

                {/* Profile (mobile) */}
                {user && (
                    <div className="flex flex-col items-center gap-[8px] text-white">
                        <Avatar user={user} size={64} />
                        <p className="font-semibold text-[18px]">{user.firstName} {user.lastName}</p>
                        <p className="text-[12px] text-gray-400">{user.email}</p>
                        <span className="px-[10px] py-[1px] rounded-full bg-green-400/20 text-green-400 text-[11px] font-semibold capitalize">
                            {user.role}
                        </span>
                    </div>
                )}

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 font-raleway text-center">
                    <Link to="/" onClick={closeDrawer} className={drawerLinkClass}>Home</Link>
                    <Link to="/about" onClick={closeDrawer} className={drawerLinkClass}>About Us</Link>
                    <Link to="/products" onClick={closeDrawer} className={drawerLinkClass}>Products</Link>
                    <Link to="/reviews" onClick={closeDrawer} className={drawerLinkClass}>Reviews</Link>
                    <Link to="/contact" onClick={closeDrawer} className={drawerLinkClass}>Contact</Link>
                    {user?.role === "admin" && (
                        <Link to="/admin" onClick={closeDrawer} className={drawerLinkClass}>Admin Panel</Link>
                    )}
                </div>

                <div className="flex gap-[20px] items-center">
                    <Link className="p-[10px] border-[2px] border-primary rounded-full text-[16px] text-white hover:bg-green-400/20 duration-300">
                        <FiBox />
                    </Link>
                    <CartLink count={itemCount} onClick={closeDrawer} />
                </div>

                {user ? (
                    <button
                        onClick={handleLogout}
                        className="px-[25px] py-[7px] border-[2px] border-red-400 text-red-400 rounded-full flex items-center gap-[10px] hover:bg-red-400/20 duration-300 cursor-pointer"
                    >
                        <FiLogOut />
                        Logout
                    </button>
                ) : (
                    <LoginLink onClick={closeDrawer} />
                )}
            </div>
        </div>
    );
}
