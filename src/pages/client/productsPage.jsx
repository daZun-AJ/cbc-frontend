import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../components/loading";


export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
            .then((res) => {
                setProducts(res.data);    
                setIsLoading(false);
            }).catch((err) => {
                toast.error("Failed to fetch products");
                console.log(err);
            })
        }, [isLoading]
    )

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col gap-[50px]">
            
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[20px] font-raleway">
                <h1 className="text-[24px] font-medium leading-tight">All Products</h1>
                <div className="flex flex-row gap-[10px]">
                    <input 
                    type="text" 
                    className="w-[300px] border-[1px] border-gray-400 p-[10px] outline-none"
                    placeholder="Search"
                    />
                    <button className="p-[10px] bg-black text-white">
                        Search
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-[20px]">
                {
                    isLoading ?
                    <Loading /> 
                    :
                    products.map((product) => {
                        return <ProductCard key={product._id} product={product} />;
                    })
                }
            </div>

        </div>
    )
}