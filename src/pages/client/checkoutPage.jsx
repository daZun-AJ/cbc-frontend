import { useLocation, Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { getCart } from "../../utils/cart";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function CheckoutPage() {
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (location.state && Array.isArray(location.state)) {
            setCart(location.state); 
        } else if (location.state?.products) {
            setCart(location.state.products); 
        } else {
            setCart(getCart());
        }
    }, [location.state]);

    function getTotal() {
        return cart.reduce((total, item) => total + item.labeledPrice * item.quantity, 0);
    }

    function getDiscountedTotal() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    function removeFroCart(index) {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    function changeQuantity(index, quantity) {
        const newQuantity = cart[index].quantity + quantity;
        if (newQuantity <= 0) {
            removeFroCart(index);
        } else {
            const newCart = [...cart];
            newCart[index].quantity = newQuantity;
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    }

    async function placeOrder() {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Please login to place order");
            return;
        }

        if (!phone.trim() || !address.trim()) {
            toast.error("Please enter address and phone number");
            return;
        }

        const orderInfo = {
            products: cart.map(item => ({
                productId: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            address,
            phone
        };

        try {
            const response = await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/orders",
                orderInfo,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success("Order placed successfully");
            console.log(response.data);
            localStorage.removeItem("cart");
            setCart([]);
            setAddress("");
            setPhone("");
        } catch (err) {
            toast.error("Failed to place order");
            console.log(err);
        }
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col items-center gap-[60px]">
            <div className="w-fit flex ">
                <div className="w-[200px] px-[40px] py-[10px] border-b-2 border-gray-300 text-center text-gray-300 cursor-not-allowed">Cart</div>
                <div className="w-[200px] px-[40px] py-[10px] border-b-2 text-center">Checkout</div>
            </div>

            <div className="w-full flex flex-col gap-2.5 lg:flex-row">
                <div className="w-full h-fit p-[10px] flex flex-col border-1 border-gray-200 rounded-md">
                    <h2 className="text-[24px] font-raleway mb-[50px]">Order Summary</h2>

                    <div className="w-full font-raleway flex flex-col gap-[10px]">
                        {
                            cart.map((item, index) => (
                                <div key={item.productId} className="flex flex-col gap-[20px] md:flex-row justify-between md:items-center p-[10px] border-1 border-gray-200 rounded-md">
                                    <div className="flex gap-2.5 items-center">
                                        <img src={item.image} className="w-[70px] h-[70px] object-cover" />
                                        <div>
                                            <h3 className="text-[16px] font-medium">{item.name}</h3>
                                            <p className="text-[12px] text-gray-400">ID: {item.productId}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-[50px] justify-between items-center">
                                        <h3 className="text-[20px]">Rs. {item.price.toFixed(2)}</h3>
                                        <div className="flex gap-2.5 items-center">
                                            <CiCircleMinus
                                                onClick={() => changeQuantity(index, -1)}
                                                className="text-[34px] cursor-pointer"
                                            />
                                            <p>{item.quantity}</p>
                                            <CiCirclePlus
                                                onClick={() => changeQuantity(index, 1)}
                                                className="text-[34px] cursor-pointer"
                                            />
                                        </div>
                                        <FaRegTrashAlt
                                            className="text-[16px] text-red-600 cursor-pointer"
                                            onClick={() => removeFroCart(index)}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-[390px] p-[20px] font-raleway bg-gray-200">
                    <div className="w-full flex justify-between mb-[10px]">
                        <h4 className="text-[14px] text-gray-400">Total</h4>
                        <p className="text-[14px] text-gray-400 text-right">Rs. {getTotal().toFixed(2)}</p>
                    </div>
                    <div className="w-full flex justify-between mb-[50px]">
                        <h4 className="text-[14px] text-black font-semibold">Discounted Total</h4>
                        <p className="text-[14px] text-black font-semibold text-right">Rs. {getDiscountedTotal().toFixed(2)}</p>
                    </div>

                    <div className="w-full flex flex-col justify-between mb-[50px]">
                        <input
                            type="text"
                            placeholder="Please enter your phone number"
                            className="w-full p-[10px] bg-white text-[14px] border-1 border-gray-200 rounded-md mb-[10px]"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                        <textarea
                            placeholder="Please enter your address"
                            className="w-full h-[100px] p-[10px] bg-white text-[14px] border-1 border-gray-200 rounded-md mb-[10px]"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        />
                    </div>

                    <button
                        className="w-full p-[10px] bg-black text-white rounded-md mb-2"
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>
                    <Link to="/cart" className="block text-center text-blue-600 text-[14px] hover:underline">Back to Cart</Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
