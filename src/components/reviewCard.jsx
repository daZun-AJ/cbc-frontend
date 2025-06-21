



export default function ReviewCard() {

    return (
        <div className="w-full md:w-[350px] h-[200px] border-[1px] border-gray-300 rounded-md flex flex-col justify-between p-[10px]">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, obcaecati eum. Ab quod, reiciendis, enim alias, aliquid minus.</p>

            <div>
                <div className="flex flex-row gap-[10px]">
                    <img src="product-img.jpg" className="w-[50px] h-[50px] rounded-full" alt="" />
                    <div>
                        <h1 className="text-[16px] font-semibold">John Doe</h1>
                        <p className="text-[12px]">Customer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}