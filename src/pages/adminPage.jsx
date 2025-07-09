import { AiOutlineProduct } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiBox, FiLogOut } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { TbSmartHome } from "react-icons/tb";
import { Link, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/adminDashboard";
import AdminUsers from "./admin/adminUsers";
import AdminProducts from "./admin/adminProducts";
import AdminOrders from "./admin/adminOrders";
import AdminReviews from "./admin/adminReviews";




export default function AdminPage() {

    return (
        <div className="w-full h-screen justify-center items-center p-[10px] flex gap-[10px]">
            {/* Sidebar */}
            <div className="w-[300px] h-full flex flex-col justify-between bg-black text-white font-raleway rounded-[20px] p-[20px]">
                <div>
                    <h1 className="text-[24px]">CBC</h1>

                    <div className="mt-[40px]">
                        <h3 className="text-[14px] text-gray-400 font-bold">General</h3>

                        <div className="mt-[10px]">
                            <Link to="/admin/" className="flex flex-row gap-[10px] p-[10px] hover:bg-gray-700 rounded-[10px] duration-300">
                                <TbSmartHome className="text-[20px]" /> Dashboard
                            </Link>

                            <Link to="/admin/users" className="flex flex-row gap-[10px] p-[10px] hover:bg-gray-700 rounded-[10px]">
                                <HiOutlineUsers className="text-[20px]" /> Users
                            </Link>

                            <Link to="/admin/products" className="flex flex-row gap-[10px] p-[10px] hover:bg-gray-700 rounded-[10px]">
                                <AiOutlineProduct className="text-[20px]" /> Products
                            </Link>

                            <Link to="/admin/orders" className="flex flex-row gap-[10px] p-[10px] hover:bg-gray-700 rounded-[10px]">
                                <FiBox className="text-[20px]" /> Orders
                            </Link>

                            <Link to="/admin/reviews" className="flex flex-row gap-[10px] p-[10px] hover:bg-gray-700 rounded-[10px]">
                                <BiMessageAltDetail className="text-[20px]" /> Reviews
                            </Link>
                        </div>
                    </div>
                </div>

                <Link
                    to="/logout"
                    className="text-[14px] text-white flex flex-row gap-[10px] p-[10px] rounded-[5px] items-center mt-[10px] hover:bg-white/10 hover:text-red-400 duration-300"
                    >
                    <FiLogOut className="text-[20px]" /> Logout
                </Link>
            </div>

            <div className="w-[calc(100%-300px)] h-full p-[10px] bg-white overflow-auto">
                <Routes path="/*">
                    <Route path="/*" element={<AdminDashboard />} />
                    <Route path="/users" element={<AdminUsers />} />
                    <Route path="/products" element={<AdminProducts />} />
                    <Route path="/orders" element={<AdminOrders />} />
                    <Route path="/reviews" element={<AdminReviews />} />
                </Routes>
            </div>
        </div>
    )
}