import { Link, Navigate, useLocation } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../../components/footer";

export default function OrderSuccessPage() {
    const { state } = useLocation();
    const order = state?.order;

    // opened directly (refresh / typed URL) - nothing to show
    if (!order) return <Navigate to="/" replace />;

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col items-center gap-[50px] font-raleway">
            <div className="w-full max-w-[520px] flex flex-col items-center gap-[15px] text-center py-[30px]">
                <FiCheckCircle className="text-[64px] text-green-500" />
                <h1 className="text-[24px] font-semibold">Thank you for your order!</h1>
                <p className="text-gray-500 text-[14px]">
                    Your order has been placed. We will contact you on {order.phone} to confirm delivery.
                </p>

                <div className="w-full mt-[10px] p-[20px] bg-gray-100 rounded-2xl flex flex-col gap-[10px] text-left text-[14px]">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Order ID</span>
                        <span className="font-semibold">{order.orderId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Status</span>
                        <span className="font-semibold capitalize">{order.status}</span>
                    </div>
                    <div className="flex justify-between gap-[20px]">
                        <span className="text-gray-500">Deliver to</span>
                        <span className="font-semibold text-right">{order.name}, {order.address}</span>
                    </div>
                    <hr className="border-gray-300" />
                    {order.products.map((p) => (
                        <div key={p.productInfo.productId} className="flex justify-between gap-[20px]">
                            <span className="truncate">{p.quantity} × {p.productInfo.name}</span>
                            <span>Rs. {(p.quantity * p.productInfo.price).toFixed(2)}</span>
                        </div>
                    ))}
                    <hr className="border-gray-300" />
                    <div className="flex justify-between text-[16px] font-bold">
                        <span>Total</span>
                        <span>Rs. {order.total.toFixed(2)}</span>
                    </div>
                </div>

                <Link
                    to="/products"
                    className="mt-[10px] px-[25px] py-[8px] bg-green-400 rounded-full hover:bg-green-500 duration-300 font-medium"
                >
                    Continue Shopping
                </Link>
            </div>

            <Footer />
        </div>
    );
}
