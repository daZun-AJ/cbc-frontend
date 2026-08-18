import { Routes, Route } from "react-router-dom"
import AdminDashboardPage from "./admin/adminDashboardPage"
import AdminSidebar from "../components/adminSideBar"
import AdminProductsPage from "./admin/adminProductsPage"
import AdminUsersPage from "./admin/adminUsersPage"
import AdminOrdersPage from "./admin/adminOrdersPage"
import AddProductPage from "./admin/addProductPage"
import EditProductPage from "./admin/editProductPage"


export default function AdminPage() {
    
    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gray-50">
            
            <AdminSidebar />

            <div className="flex-1 p-[20px] md:p-[40px] font-raleway">
                <Routes path="/*">
                    <Route path="/" element={<AdminDashboardPage />} />
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/users" element={<AdminUsersPage />} />
                    <Route path="/orders" element={<AdminOrdersPage />} />
                    <Route path="/products/add" element={<AddProductPage />} />
                    <Route path="/products/edit/:id" element={<EditProductPage />} />
                </Routes>
            </div>

        </div>
    )

}