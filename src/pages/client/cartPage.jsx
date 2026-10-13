import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { MdDeleteOutline } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { PrimaryButton } from "../../components/buttons";
import Footer from "../../components/footer";

export default function CartPage() {
    const { cart, removeFromCart, updateQty, clearCart, subtotal, itemCount } = useCart();
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col gap-[50px] font-raleway">
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-medium">
                    Your Cart {itemCount > 0 && <span className="text-gray-400 text-[16px]">({itemCount} items)</span>}
                </h1>
                {cart.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="text-[13px] text-red-500 underline hover:text-red-600 cursor-pointer"
                    >
                        Clear cart
                    </button>
                )}
            </div>

            {cart.length === 0 ? (
                <div className="w-full flex flex-col items-center py-[80px] gap-[20px]">
                    <p className="text-gray-500">Your cart is empty.</p>
                    <Link to="/products">
                        <PrimaryButton>
                            Start Shopping <LuArrowUpRight />
                        </PrimaryButton>
                    </Link>
                </div>
            ) : (
                <div className="w-full flex flex-col lg:flex-row gap-[30px] items-start">
                    {/* Cart items */}
                    <div className="w-full lg:flex-1 flex flex-col gap-[15px]">
                        {cart.map((item) => (
                            <div
                                key={item.productId}
                                className="w-full flex flex-row items-center gap-[15px] p-[10px] border border-gray-200 rounded-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[70px] h-[70px] object-cover rounded-md"
                                />

                                <div className="flex-1 flex flex-col min-w-0">
                                    <h3 className="text-[14px] md:text-[16px] font-semibold truncate">{item.name}</h3>
                                    <p className="text-[14px] text-gray-500">Rs. {item.price.toFixed(2)}</p>
                                    {item.stock != null && item.qty >= item.stock && (
                                        <p className="text-[11px] text-orange-500">Max stock reached</p>
                                    )}
                                    <p className="text-[13px] font-semibold md:hidden mt-[2px]">
                                        Rs. {(item.price * item.qty).toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => updateQty(item.productId, item.qty - 1)}
                                        disabled={item.qty <= 1}
                                        className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        −
                                    </button>
                                    <span className="w-[32px] text-center text-[14px]">{item.qty}</span>
                                    <button
                                        onClick={() => updateQty(item.productId, item.qty + 1)}
                                        disabled={item.stock != null && item.qty >= item.stock}
                                        className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="w-[90px] text-right text-[14px] font-semibold hidden md:block">
                                    Rs. {(item.price * item.qty).toFixed(2)}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.productId)}
                                    className="w-[36px] h-[36px] shrink-0 flex items-center justify-center text-red-500 border-[2px] border-red-200 rounded-full hover:bg-red-50 duration-300 cursor-pointer"
                                >
                                    <MdDeleteOutline className="text-[18px]" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order summary */}
                    <div className="w-full lg:w-[320px] p-[20px] bg-gray-100 rounded-2xl flex flex-col gap-[15px]">
                        <h2 className="text-[18px] font-semibold">Order Summary</h2>

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
                            onClick={() => navigate("/checkout")}
                            className="w-full px-[25px] py-[10px] bg-green-400 rounded-full flex items-center justify-center gap-[10px] hover:bg-green-500 duration-300 cursor-pointer font-medium"
                        >
                            Checkout <LuArrowUpRight />
                        </button>

                        <Link
                            to="/products"
                            className="text-center text-[13px] text-gray-500 underline hover:text-green-500 duration-300"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
