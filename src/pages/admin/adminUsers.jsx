import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users").then((res) => {
            setUsers(res.data);
        });
    }, []); // Add empty dependency array so it only fetches once

    return (
        <div className="w-full h-full py-[20px] overflow-y-scroll px-[20px] relative">
            <Link to="/admin/add-admin"><button className="bg-blue-600 text-white px-[20px] py-[10px] rounded-[5px] hover:bg-blue-700 duration-300 fixed bottom-[20px] right-[20px] flex flex-row gap-[10px] items-center"><FaPlus /> Add Admin</button></Link>

            <div className="mb-[30px]">
                <h1 className="text-[24px] font-bold mb-2">Manage Users</h1>
                <p className="text-[12px] text-gray-400 max-w-[600px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus mollitia vitae vero ipsam voluptas asperiores natus sed, dolorem rerum aperiam recusandae.
                </p>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Email</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Role</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user._id || index}
                                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">{user.firstName} {user.lastName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap capitalize">
                                    {user.role === "admin" ? <p className="text-blue-600 font-bold">Admin</p> : "User"}
                                </td>
                                <td className={"px-6 py-4 whitespace-nowrap capitalize " + (user.isBlocked ? "text-red-600 font-bold" : "text-green-600 font-bold") }>{!user.isBlocked ? "Active" : "Blocked"}</td>
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
