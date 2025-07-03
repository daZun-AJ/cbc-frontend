import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Footer from "../../components/footer";
import { useState } from "react";
import { addToCart, getCart, getDiscountedTotal, getTotal, removeFromCart } from "../../utils/cart";
import { Link } from "react-router-dom";


export default function CartPage() {
    
    const [cart, setCart] = useState(getCart());

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col items-center gap-[60px]">
            <div className="w-fit flex ">
                <div className="w-[200px] px-[40px] py-[10px] border-b-2 text-center">Cart</div>
                <div className="w-[200px] px-[40px] py-[10px] border-b-2 border-gray-300 text-center text-gray-300 cursor-not-allowed">Checkout</div>
            </div>

            <div className="w-full flex flex-col gap-2.5 lg:flex-row">
                <div className="w-full p-[10px] flex flex-col border-1 border-gray-200 rounded-md">
                    <h2 className="text-[24px] font-raleway mb-[50px]">Your Cart</h2>

                    <div className="w-full font-raleway flex flex-col gap-[10px] ">
                        {/* product cards */}
                        {
                            cart.map(
                                (item) => {
                                    return (
                                        <div className="flex flex-col gap-[20px] md:flex-row justify-between md:items-center p-[10px] border-1 border-gray-200 rounded-md">
                                            <div key={item.productId} className="flex gap-2.5 items-center">
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
                                                    onClick={() => {
                                                        addToCart(item, -1)
                                                        setCart(getCart())
                                                    }} 
                                                    className="text-[34px]" />
                                                    <p>{item.quantity}</p>
                                                    <CiCirclePlus 
                                                    onClick={() => {
                                                        addToCart(item, 1)
                                                        setCart(getCart())
                                                    }}
                                                    className="text-[34px]" />
                                                </div>

                                                <FaRegTrashAlt
                                                onClick={() => {
                                                    removeFromCart(item.productId)
                                                    setCart(getCart())
                                                }}
                                                className="text-[16px] text-red-600" />
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                        
                        
                    </div>
                </div>
                

                <div className="w-full md:w-[390px] p-[20px] font-raleway bg-gray-200">
                    <div className="w-full flex justify-between mb-[10px]">
                        <h4 className="text-[14px] text-gray-400">Total</h4>
                        <p className="text-[14px] text-gray-400 text-right">Rs. {getTotal().toFixed(2)}</p>
                    </div>
                    <div className="w-full flex justify-between mb-[50px]">
                        <h4 className="text-[14px] text-black font-semibold">Discounted Total</h4>
                        <p className="text-[14px] text-black font-semibold text-right">Rs. {getDiscountedTotal().toFixed(2)}</p>
                    </div>

                    <Link 
                    to="/checkout"
                    state={{cart: cart}}
                    >
                        <button className="w-full p-[10px] bg-black text-white rounded-md">
                            Continue to Checkout
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}