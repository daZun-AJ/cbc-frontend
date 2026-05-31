import { useState } from "react";
import ProductCard from "../../components/productCard";
import Footer from "../../components/footer";
import { products as allProducts } from "../../data/products";

export default function ProductsPage() {
    const [query, setQuery] = useState("");

    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.altNames.some((name) =>
            name.toLowerCase().includes(query.toLowerCase())
        )
    );
    
    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col gap-[50px]">

            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[20px] font-raleway">
                <h1 className="text-[24px] font-medium leading-tight">
                    All Products
                </h1>

                <div className="flex flex-row gap-[10px]">
                    <input
                        type="text"
                        className="w-[400px] border border-gray-400 p-[10px] outline-none"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-[20px]">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.productId}
                            product={product}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No products found.
                    </p>
                )}
            </div>

            <Footer />
        </div>
    );
}