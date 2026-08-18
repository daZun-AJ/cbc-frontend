

export default function StatCard({ icon, label, value, accent }) {
    return (
        <div className="flex-1 min-w-[200px] bg-white rounded-2xl p-[20px] border border-gray-200 flex flex-col gap-[10px]">
            <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-[18px] ${accent}`}>
                {icon}
            </div>
            <p className="text-[13px] text-gray-500">{label}</p>
            <h2 className="text-[26px] font-bold">{value}</h2>
        </div>
    );
}