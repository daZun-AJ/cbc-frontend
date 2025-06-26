import { MdAddShoppingCart } from "react-icons/md";


export default function ProductCard({ product }) {
    
    return (
        <div className="w-[170px] h-fit md:w-[280px] p-1 font-raleway hover:shadow-2xl hover:scale-101 duration-300 rounded-md cursor-pointer">
            <div className="relative">
                <img 
                src={product.images[0]} 
                className="w-full h-[170px] md:h-[280px] object-cover" 
                />
                <p
                    className={`mt-2 inline-block px-2 py-1 text-[10px] font-bold rounded-full absolute top-[5px] left-[5px]
                    ${product.isAvailable && product.stock > 0 ? 'bg-[#05DF7240] text-green-600' : 'bg-red-600/40 text-red-600'}`}
                >
                    {product.isAvailable && product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
            </div>
            
            <div className="flex flex-col">
                <h3 className="text-[12px] md:text-[14px] font-semibold md-[10px]">{product.name}</h3>
                <div className="flex flex-row gap-[10px] mt-[10px] items-center justify-between">
                    <h1 className="text-[18px] font-bold">Rs. {product.price}</h1>
                    <button className="w-[40px] h-[40px] border-[2px] border-primary hover:bg-primary/20 rounded-md flex justify-center items-center duration-300 cursor-pointer">
                        <MdAddShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    )
}