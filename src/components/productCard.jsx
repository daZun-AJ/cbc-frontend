import { MdAddShoppingCart } from "react-icons/md";



export default function ProductCard() {
    
    return (
        <div className="w-[170px] h-fit md:w-[280px] p-1 font-raleway hover:shadow-2xl hover:scale-101 duration-300 rounded-md cursor-pointer">
            <div className="relative">
                <img 
                src="/public/product-img.jpg" 
                alt="product image"
                className="w-full h-[170px] md:w-[280px] object-cover" 
                />
                <p
                className="mt-2 inline-block px-2 py-1 text-[10px] font-bold rounded-full absolute top-[5px] right-[5px] bg-[#05DF7240] text-green-600"
                >
                    in stock
                </p>
            </div>

            <div className="flex flex-col">
                <h3 className="text-[12px] md:text-[14px] font-semibold md-[10px]">product name</h3>
                <div className="flex flex-row gap-[10px] mt-[10px] items-center justify-between">
                    <h1 className="text-[18px] font-bold">Rs. 2222</h1>
                    <button className="w-[40px] h-[40px] border-[2px] border-primary hover:bg-primary/20 rounded-md flex justify-center items-center duration-300 cursor-pointer">
                        <MdAddShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    )

}