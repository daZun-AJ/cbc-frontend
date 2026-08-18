export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col gap-[20px] px-[15px] py-[20px] sm:px-[20px] lg:px-0 lg:py-0 lg:gap-[30px]">
            <div>
                <h1 className="text-[22px] sm:text-[24px] font-medium">
                    Dashboard
                </h1>

                <p className="text-[13px] sm:text-[14px] text-gray-500 mt-[4px]">
                    Overview of your store performance
                </p>
            </div>
        </div>
    );
}