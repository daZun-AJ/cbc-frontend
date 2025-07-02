import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../components/loading";
import Footer from "../../components/footer";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    // Fetch all products on page load
    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products");
            setProducts(res.data);
        } catch (err) {
            toast.error("Failed to fetch products");
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = async (value) => {
        setQuery(value);
        setIsLoading(true);

        if (value.trim() === "") {
            fetchAllProducts();
            return;
        }

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/products/search/${value}`
            );
            setProducts(response.data);
        } catch (error) {
            toast.error("Failed to fetch products");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col gap-[50px]">
            
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[20px] font-raleway">
                <h1 className="text-[24px] font-medium leading-tight">All Products</h1>
                <div className="flex flex-row gap-[10px]">
                    <input 
                        type="text" 
                        className="w-[400px] border-[1px] border-gray-400 p-[10px] outline-none"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-[20px]">
                {
                    isLoading ? (
                        <Loading />
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No products found.</p>
                    )
                }
            </div>

            <Footer />
        </div>
    );
}
