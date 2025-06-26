export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="relative w-24 h-24">
                {/* Clockwise Spinner (Green) */}
                <div className="absolute inset-0 rounded-full border-t-4 border-green-500 animate-spin"></div>

                {/* Counter-Clockwise Spinner (Black) */}
                <div className="absolute inset-0 rounded-full border-b-4 border-black animate-[spin_1s_linear_infinite_reverse]"></div>

                {/* Center Ping Dot (Green) */}
                <div className="absolute inset-4 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
            </div>
        </div>
    );
}
