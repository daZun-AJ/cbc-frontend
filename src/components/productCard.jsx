import { MdAddShoppingCart } from "react-icons/md";


export default function ProductCard() {
    
    return (
        <div className="w-[170px] h-fit md:w-[280px] p-1 font-raleway hover:shadow-2xl hover:scale-101 duration-300 rounded-md cursor-pointer">
            <img src="product-img.jpg" className="w-full h-[170px] md:h-[280px] object-cover" />
            <div className="flex flex-col">
                <h3 className="text-[12px] font-semibold">Product Name</h3>
                <div className="flex flex-row gap-[10px] mt-[10px] items-center justify-between">
                    <h1 className="text-[18px] font-bold">$100</h1>
                    <button className="w-[40px] h-[40px] border-[2px] border-primary hover:bg-primary/20 rounded-md flex justify-center items-center duration-300">
                        <MdAddShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    )
}