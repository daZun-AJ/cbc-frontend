import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		if (isLoading) {
			const token = localStorage.getItem("token");
			if (!token) {
				alert("Please login first");
				return;
			}
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
					headers: {
						Authorization: "Bearer " + token,
					},
				})
				.then((res) => {
					setOrders(res.data);
					setIsLoading(false);
				})
				.catch((e) => {
					alert(
						"Error fetching orders: " +
							(e.response?.data?.message || "Unknown error")
					);
					setIsLoading(false);
				});
		}
	}, [isLoading]);

    return (
        <div className="w-full h-full py-[20px] overflow-y-scroll px-[20px]">

            {/* Title */}
            <div className="mb-[30px]">
                <h1 className="text-[24px] font-bold mb-2">Manage Orders</h1>
                <p className="text-[12px] text-gray-400 max-w-[600px]">
                    View and manage customer orders.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Order ID</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Email</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Products</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Labeled Total (Rs.)</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Total (Rs.)</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Date</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr
                                key={order._id || index}
                                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <td className="px-6 py-4 whitespace-nowrap font-mono">{order.orderId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">{order.products.length}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-semibold">
                                    Rs. {order.labeledTotal.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">
                                    Rs. {order.total.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-semibold ${
                                            order.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : order.status === "completed"
                                                ? "bg-green-100 text-green-700"
                                                : order.status === "cancelled"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {new Date(order.date).toLocaleDateString("en-GB")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2">
                                        <button
                                            className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors duration-300"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors duration-300"
                                            title="Delete"
                                        >
                                            <FaRegTrashCan />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
