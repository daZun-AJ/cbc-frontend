export default function AdminDashboard() {
    
    return (
        <div className="w-full h-full py-[20px] px-[20px] overflow-y-auto">
            <div>
                <h1 className="text-[24px] font-bold">Welcome Back to the Admin Dashboard !</h1>
                <div className="w-full h-[1px] bg-gray-400 mt-[10px] mb-[20px]"></div>
            </div>

            {/* Stat Cards */}
            <div className="w-full flex flex-wrap gap-[10px] mb-[30px]">
                <div className="flex-1 min-w-[220px] h-[150px] flex flex-col justify-between bg-gray-100 rounded-xl p-[10px] border border-gray-300 shadow">
                    <h2 className="text-[14px] text-gray-500 font-bold">Customers</h2>
                    <h1 className="text-[48px] text-right text-blue-600 font-bold">10</h1>
                </div>
                <div className="flex-1 min-w-[220px] h-[150px] flex flex-col justify-between bg-gray-100 rounded-xl p-[10px] border border-gray-300 shadow">
                    <h2 className="text-[14px] text-gray-500 font-bold">Products</h2>
                    <h1 className="text-[48px] text-right text-blue-600 font-bold">10</h1>
                </div>
                <div className="flex-1 min-w-[220px] h-[150px] flex flex-col justify-between bg-gray-100 rounded-xl p-[10px] border border-gray-300 shadow">
                    <h2 className="text-[14px] text-gray-500 font-bold">Orders</h2>
                    <h1 className="text-[48px] text-right text-blue-600 font-bold">10</h1>
                </div>
                <div className="flex-1 min-w-[220px] h-[150px] flex flex-col justify-between bg-gray-100 rounded-xl p-[10px] border border-gray-300 shadow">
                    <h2 className="text-[14px] text-gray-500 font-bold">Reviews</h2>
                    <h1 className="text-[48px] text-right text-blue-600 font-bold">10</h1>
                </div>
            </div>
        </div>
    );
}
