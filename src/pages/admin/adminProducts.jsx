import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="w-full h-full py-[20px] overflow-y-scroll px-[20px] relative">
            {/* Add Product Button */}
            <Link to="/admin/add-product">
                <button className="bg-blue-600 text-white px-[20px] py-[10px] rounded-[5px] hover:bg-blue-700 duration-300 fixed bottom-[20px] right-[20px] flex flex-row gap-[10px] items-center">
                    <FaPlus /> Add Product
                </button>
            </Link>

            {/* Title */}
            <div className="mb-[30px]">
                <h1 className="text-[24px] font-bold mb-2">Manage Products</h1>
                <p className="text-[12px] text-gray-400 max-w-[600px]">
                    View, edit, and manage all products in your system.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Product ID</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Image</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Labeled Price</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Price</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Stock</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={product.productId || index}
                                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">{product.productId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                        src={product.images[0]} // assuming your API returns an "image" field (URL)
                                        alt={product.name}
                                        className="w-[50px] h-[50px] object-cover rounded"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">
                                    Rs. {product.labeledPrice?.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-semibold">
                                    Rs. {product.price?.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2">
                                        <button
                                            className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors duration-300"
                                            title="Edit"
                                            onClick={() => {
                                                navigate(`/admin/edit-product`, {
                                                    state: product,
                                                });
                                            }}
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
