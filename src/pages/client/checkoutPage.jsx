import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../../context/cartContext";
import { getCurrentUser, getToken } from "../../utils/auth";
import Footer from "../../components/footer";

const inputClass =
    "w-full p-[12px] border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-[14px]";

export default function CheckoutPage() {
    const { cart, subtotal, itemCount, clearCart } = useCart();
    const navigate = useNavigate();
    const user = getCurrentUser();

    const [name, setName] = useState(user ? `${user.firstName} ${user.lastName}` : "");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [placing, setPlacing] = useState(false);

    function validate() {
        const e = {};
        if (name.trim().length < 2) e.name = "Please enter your full name";
        if (!/^\+?\d{9,15}$/.test(phone.replace(/[\s-]/g, ""))) e.phone = "Enter a valid phone number";
        if (address.trim().length < 10) e.address = "Please enter your full delivery address";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    async function handlePlaceOrder() {
        if (placing) return;
        if (!validate()) return;

        const token = getToken();
        if (!token) {
            toast.error("Please login to place your order");
            navigate("/login");
            return;
        }

        setPlacing(true);
        try {
            const response = await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/orders",
                {
                    name: name.trim(),
                    phone: phone.trim(),
                    address: address.trim(),
                    products: cart.map((item) => ({
                        productId: item.productId,
                        quantity: item.qty,
                    })),
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("Order placed successfully");
            navigate("/order-success", { replace: true, state: { order: response.data.order } });
            clearCart();
        } catch (err) {
            console.error(err);
            if (err.response?.status === 403) {
                toast.error("Session expired. Please login again");
                navigate("/login");
            } else {
                toast.error(err.response?.data?.message || "Failed to place order");
            }
            setPlacing(false);
        }
    }

    // Empty cart
    if (cart.length === 0) {
        return (
            <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col items-center gap-[20px] font-raleway">
                <div className="py-[80px] flex flex-col items-center gap-[20px]">
                    <p className="text-gray-500">Your cart is empty. Add something before checking out.</p>
                    <Link
                        to="/products"
                        className="px-[25px] py-[7px] bg-green-400 rounded-full hover:bg-green-500 duration-300"
                    >
                        Browse Products
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Not logged in
    if (!user) {
        return (
            <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col items-center gap-[20px] font-raleway">
                <div className="py-[80px] flex flex-col items-center gap-[20px] text-center">
                    <h1 className="text-[22px] font-semibold">Login required</h1>
                    <p className="text-gray-500">Please login to your account to place your order.</p>
                    <div className="flex gap-[15px]">
                        <Link
                            to="/login"
                            className="px-[25px] py-[7px] bg-green-400 rounded-full hover:bg-green-500 duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-[25px] py-[7px] border-[2px] border-green-400 rounded-full hover:bg-green-400/20 duration-300"
                        >
                            Register
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col gap-[50px] font-raleway">
            <nav className="text-sm text-gray-500 font-medium -mb-[30px]">
                <Link to="/cart" className="hover:text-green-500 transition">Cart</Link>
                <span className="mx-1">›</span>
                <span className="text-black">Checkout</span>
            </nav>

            <h1 className="text-[24px] font-medium">Checkout</h1>

            <div className="w-full flex flex-col lg:flex-row gap-[30px] items-start">
                {/* Delivery details */}
                <div className="w-full lg:flex-1 flex flex-col gap-[20px]">
                    <h2 className="text-[18px] font-semibold">Delivery Details</h2>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[13px] text-gray-600">Full Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Your name"
                            className={`${inputClass} ${errors.name ? "border-red-400" : "border-gray-300"}`}
                        />
                        {errors.name && <p className="text-[12px] text-red-500">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[13px] text-gray-600">Email</label>
                        <input
                            value={user.email}
                            disabled
                            className={`${inputClass} border-gray-200 bg-gray-100 text-gray-500`}
                        />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[13px] text-gray-600">Phone Number</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            placeholder="e.g. 0771234567"
                            className={`${inputClass} ${errors.phone ? "border-red-400" : "border-gray-300"}`}
                        />
                        {errors.phone && <p className="text-[12px] text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-[13px] text-gray-600">Delivery Address</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            rows={4}
                            placeholder="House no, street, city, postal code"
                            className={`${inputClass} resize-none ${errors.address ? "border-red-400" : "border-gray-300"}`}
                        />
                        {errors.address && <p className="text-[12px] text-red-500">{errors.address}</p>}
                    </div>

                    <div className="p-[15px] border border-gray-200 rounded-md">
                        <p className="text-[14px] font-semibold">Payment Method</p>
                        <p className="text-[13px] text-gray-500 mt-[4px]">
                            Cash on Delivery. Pay when your order arrives.
                        </p>
                    </div>
                </div>

                {/* Order summary */}
                <div className="w-full lg:w-[360px] p-[20px] bg-gray-100 rounded-2xl flex flex-col gap-[15px]">
                    <h2 className="text-[18px] font-semibold">Order Summary ({itemCount})</h2>

                    <div className="flex flex-col gap-[12px] max-h-[300px] overflow-y-auto pr-[4px]">
                        {cart.map((item) => (
                            <div key={item.productId} className="flex items-center gap-[10px]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[48px] h-[48px] object-cover rounded-md"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-[13px] font-semibold truncate">{item.name}</p>
                                    <p className="text-[12px] text-gray-500">
                                        {item.qty} × Rs. {item.price.toFixed(2)}
                                    </p>
                                </div>
                                <p className="text-[13px] font-semibold">
                                    Rs. {(item.qty * item.price).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <hr className="border-gray-300" />

                    <div className="flex justify-between text-[14px] text-gray-600">
                        <span>Subtotal</span>
                        <span>Rs. {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[14px] text-gray-600">
                        <span>Delivery</span>
                        <span>Free</span>
                    </div>

                    <hr className="border-gray-300" />

                    <div className="flex justify-between text-[16px] font-bold">
                        <span>Total</span>
                        <span>Rs. {subtotal.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        disabled={placing}
                        className="w-full px-[25px] py-[10px] bg-green-400 rounded-full font-medium hover:bg-green-500 duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {placing ? "Placing order..." : "Place Order"}
                    </button>

                    <Link
                        to="/cart"
                        className="text-center text-[13px] text-gray-500 underline hover:text-green-500 duration-300"
                    >
                        Back to cart
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
