import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEdit, MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import Loading from "../../components/loading";
import { PrimaryButton } from "../../components/buttons";

export default function AdminProductsPage() {

    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        setIsLoading(true);
        axios
            .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => {
                toast.error("Failed to fetch products");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    async function handleDelete(productId) {
        if (!window.confirm("Delete this product? This cannot be undone.")) return;

        setDeletingId(productId);
        const token = localStorage.getItem("token");

        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Product deleted");
            setProducts((prev) => prev.filter((p) => p.productId !== productId));
        } catch (err) {
            toast.error("Failed to delete product");
            console.log(err);
        } finally {
            setDeletingId(null);
        }
    }

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.productId.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-[25px]">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-[15px]">
                <div>
                    <h1 className="text-[24px] font-medium">Products</h1>
                    <p className="text-[14px] text-gray-500">Manage your product catalog</p>
                </div>

                <PrimaryButton onClick={() => navigate("/admin/products/add")} className="mt-0 w-fit">
                    <MdOutlineAdd /> Add Product
                </PrimaryButton>
            </div>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full max-w-[400px] p-[10px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {isLoading ? (
                    <Loading />
                ) : filtered.length === 0 ? (
                    <p className="text-gray-400 text-[14px] py-[40px] text-center">No products found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[14px]">
                            <thead className="bg-gray-50 text-gray-500 text-[12px] uppercase">
                                <tr>
                                    <th className="p-[15px]">Product</th>
                                    <th className="p-[15px]">ID</th>
                                    <th className="p-[15px]">Price</th>
                                    <th className="p-[15px]">Stock</th>
                                    <th className="p-[15px]">Status</th>
                                    <th className="p-[15px] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((product) => (
                                    <tr key={product.productId} className="border-t border-gray-100">
                                        <td className="p-[15px] flex items-center gap-[10px]">
                                            <img
                                                src={product.images?.[0]}
                                                alt={product.name}
                                                className="w-[40px] h-[40px] object-cover rounded-md"
                                            />
                                            <span className="font-medium">{product.name}</span>
                                        </td>
                                        <td className="p-[15px] text-gray-500">{product.productId}</td>
                                        <td className="p-[15px]">Rs. {product.price}</td>
                                        <td className="p-[15px]">{product.stock}</td>
                                        <td className="p-[15px]">
                                            <span
                                                className={`px-[10px] py-[3px] text-[11px] font-bold rounded-full ${
                                                    product.isAvailable && product.stock > 0
                                                        ? "bg-primary/20 text-green-600"
                                                        : "bg-red-100 text-red-600"
                                                }`}
                                            >
                                                {product.isAvailable && product.stock > 0 ? "In Stock" : "Out of Stock"}
                                            </span>
                                        </td>
                                        <td className="p-[15px]">
                                            <div className="flex justify-end gap-[10px]">
                                                <Link
                                                    to={`/admin/products/edit/${product.productId}`}
                                                    className="w-[34px] h-[34px] flex items-center justify-center border-[2px] border-gray-300 rounded-full hover:bg-gray-100 duration-300"
                                                >
                                                    <MdOutlineEdit />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(product.productId)}
                                                    disabled={deletingId === product.productId}
                                                    className="w-[34px] h-[34px] flex items-center justify-center text-red-500 border-[2px] border-red-200 rounded-full hover:bg-red-50 duration-300 cursor-pointer disabled:opacity-50"
                                                >
                                                    <MdDeleteOutline />
                                                </button>
                                            </div>
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