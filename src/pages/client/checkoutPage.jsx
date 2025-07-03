import { useLocation, Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { removeFromCart, getCart, getDiscountedTotal } from "../../utils/cart";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CheckoutPage() {
    const location = useLocation();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (location.state && location.state.cart) {
            setCart(location.state.cart);
        } else {
            setCart(getCart());
        }
    }, [location.state]);

    const handleRemove = (productId) => {
        removeFromCart(productId);
        setCart(getCart());
    };

    const getTotal = () => {
        return cart.reduce((sum, item) => sum + item.labeledPrice * item.quantity, 0);
    };


    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col items-center gap-[60px]">
            <div className="w-fit flex ">
                <div className="w-[200px] px-[40px] py-[10px] border-b-2 border-gray-300 text-center text-gray-300 cursor-not-allowed">Cart</div>
                <div className="w-[200px] px-[40px] py-[10px] border-b-2 text-center">Checkout</div>
            </div>

            <div className="w-full flex flex-col gap-2.5 lg:flex-row">
                <div className="w-full p-[10px] flex flex-col border-1 border-gray-200 rounded-md">
                    <h2 className="text-[24px] font-raleway mb-[50px]">Order Summary</h2>

                    <div className="w-full font-raleway flex flex-col gap-[10px]">
                        {
                            cart.map((item) => (
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
                                            <p className="text-[16px]">Qty: {item.quantity}</p>
                                        </div>
                                        <FaRegTrashAlt
                                            onClick={() => handleRemove(item.productId)}
                                            className="text-[16px] text-red-600 cursor-pointer"
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

                    <button className="w-full p-[10px] bg-black text-white rounded-md mb-2">Place Order</button>
                    <Link to="/cart" className="block text-center text-blue-600 text-[14px] hover:underline">Back to Cart</Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
