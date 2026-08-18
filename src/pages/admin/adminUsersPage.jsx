import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../components/loading";

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios
            .get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => setUsers(res.data))
            .catch((err) => {
                toast.error("Failed to fetch users");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const filtered = users.filter(
        (u) =>
            u.firstName?.toLowerCase().includes(query.toLowerCase()) ||
            u.lastName?.toLowerCase().includes(query.toLowerCase()) ||
            u.email?.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-[25px]">
            <div>
                <h1 className="text-[24px] font-medium">Users</h1>
                <p className="text-[14px] text-gray-500">All registered customers and admins</p>
            </div>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search users..."
                className="w-full max-w-[400px] p-[10px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {isLoading ? (
                    <Loading />
                ) : filtered.length === 0 ? (
                    <p className="text-gray-400 text-[14px] py-[40px] text-center">No users found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[14px]">
                            <thead className="bg-gray-50 text-gray-500 text-[12px] uppercase">
                                <tr>
                                    <th className="p-[15px]">Name</th>
                                    <th className="p-[15px]">Email</th>
                                    <th className="p-[15px]">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((user) => (
                                    <tr key={user._id || user.email} className="border-t border-gray-100">
                                        <td className="p-[15px] font-medium">
                                            {user.firstName} {user.lastName}
                                        </td>
                                        <td className="p-[15px] text-gray-500">{user.email}</td>
                                        <td className="p-[15px]">
                                            <span
                                                className={`px-[10px] py-[3px] text-[11px] font-bold rounded-full capitalize ${
                                                    user.role === "admin"
                                                        ? "bg-primary/20 text-green-600"
                                                        : "bg-gray-100 text-gray-600"
                                                }`}
                                            >
                                                {user.role || "customer"}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )

}