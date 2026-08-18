import { useEffect, useState } from "react";
import axios from 'axios'
import Loading from "../../components/loading";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineAttachMoney, MdOutlineInventory2, MdOutlinePendingActions, MdOutlineShoppingBag } from "react-icons/md";
import StatCard from "../../components/statCard";

export default function AdminDashboardPage() {

    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token")
        const headers = { Authorization: `Bearer ${token}` };
        const base = import.meta.env.VITE_BACKEND_URL;

        Promise.allSettled([
            axios.get(base + "/api/products"),
            axios.get(base + "/api/orders", { headers }),
            axios.get(base + "/api/users", { headers }),
        ]).then(([productsRes, ordersRes, usersRes]) => {
            const products = productsRes.status === "fulfilled" ? productsRes.value.data : [];
            const orders = ordersRes.status === "fulfilled" ? ordersRes.value.data : [];
            const users = usersRes.status === "fulfilled" ? usersRes.value.data : [];

            const pending = orders.filter((o) => o.status === "pending").length;
            const revenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);

            setStats({
                productCount: products.length,
                orderCount: orders.length,
                pendingCount: pending,
                userCount: users.length,
                revenue,
                recentOrders: orders.slice(0, 5),
            });
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="flex flex-col gap-[20px] px-[15px] py-[20px] sm:px-[20px] lg:px-0 lg:py-0 lg:gap-[30px]">
            <div>
                <h1 className="text-[22px] sm:text-[24px] font-medium">
                    Dashboard
                </h1>

                <p className="text-[13px] sm:text-[14px] text-gray-500 mt-[4px]">
                    Overview of your store performance
                </p>
            </div>

            <div className="flex flex-wrap gap-[15px]">
                <StatCard
                    icon={<MdOutlineInventory2 />}
                    label="Total Products"
                    value={stats.productCount}
                    accent="bg-primary/20 text-green-600"
                />
                <StatCard
                    icon={<MdOutlineShoppingBag />}
                    label="Total Orders"
                    value={stats.orderCount}
                    accent="bg-blue-100 text-blue-600"
                />
                <StatCard
                    icon={<MdOutlinePendingActions />}
                    label="Pending Orders"
                    value={stats.pendingCount}
                    accent="bg-yellow-100 text-yellow-600"
                />
                <StatCard
                    icon={<HiOutlineUsers />}
                    label="Total Users"
                    value={stats.userCount}
                    accent="bg-purple-100 text-purple-600"
                />
                <StatCard
                    icon={<MdOutlineAttachMoney />}
                    label="Revenue"
                    value={`Rs. ${stats.revenue.toFixed(2)}`}
                    accent="bg-primary/20 text-green-600"
                />
            </div>

        </div>
        
    );
}