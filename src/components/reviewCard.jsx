


export default function ReviewCard() {
    
    return (
        <div className="w-full md:w-[350px] h-fit border-[1px] border-gray-300 rounded-md flex flex-col justify-between gap-5 p-[10px] font-raleway hover:shadow-2xl duration-300">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum enim architecto reiciendis at iusto possimus illum perferendis eum alias laudantium, magnam distinctio! Eligendi enim tempora mollitia dignissimos nisi. Ratione, itaque.</p>

            <div>
                <div className="flex flex-row gap-[10px]">
                    <img src="product-img.jpg" className="w-[50px] h-[50px] rounded-full" alt="" />
                    <div>
                        <h1 className="text-[16px] font-semibold">reviewer name</h1>
                        <p className="text-[12px]">xample@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )

}