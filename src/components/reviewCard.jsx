


export default function ReviewCard({ item }) {
    
    return (
        <div className="w-full md:w-[350px] h-fit border-[1px] border-gray-300 rounded-md flex flex-col justify-between gap-5 p-[10px] font-raleway hover:shadow-2xl duration-300">
            <p>{item.review}</p>

            <div>
                <div className="flex flex-row gap-[10px]">
                    <img src="product-img.jpg" className="w-[50px] h-[50px] rounded-full" alt="" />
                    <div>
                        <h1 className="text-[16px] font-semibold">{item.name}</h1>
                        <p className="text-[12px]">{item.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}