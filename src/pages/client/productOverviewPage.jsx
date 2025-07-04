import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import { MdAddShoppingCart } from "react-icons/md";
import ImageSlider from "../../components/imageSlider";
import Loading from "../../components/loading";
import Footer from "../../components/footer";
import { addToCart, getCart } from "../../utils/cart";
import toast from "react-hot-toast";

export default function ProductOverviewPage() {
    const { id: productId } = useParams();
    const [status, setStatus] = useState("loading");
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
                setStatus("success");
            })
            .catch((err) => {
                console.error(err);
                setStatus("error");
            });
    }, [productId]);

    return (
        <div className="max-w-[1200px] mx-auto px-4 mt-12 font-raleway text-black">
            <nav className="text-sm text-gray-500 font-medium mb-6">
                <Link to="/" className="hover:text-green-500 transition">Home</Link>
                <span className="mx-1">›</span>
                <Link to="/products" className="hover:text-green-500 transition">Products</Link>
                <span className="mx-1">›</span>
                <span className="text-black">{product?.name || "Product"}</span>
            </nav>

            {status === "loading" && <Loading />}

            {status === "error" && (
                <p className="text-red-500 text-center text-lg">Product not found.</p>
            )}

            {status === "success" && product && (
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-[420px] h-[500px]">
                        <ImageSlider props={{ images: product.images }} />
                    </div>

                    <div className="w-full lg:w-[510px] flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-black mb-2">
                                {product.name}
                                {product.altNames.map((alt, index) => (
                                    <span key={index} className="text-gray-400">{" | " + alt}</span>
                                ))}
                            </h1>

                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-4">
                                    {product.labeledPrice !== product.price && (
                                        <span className="line-through text-gray-400 text-sm">
                                            Rs. {product.labeledPrice}
                                        </span>
                                    )}
                                    <span className="text-green-500 text-2xl font-semibold">
                                        Rs. {product.price.toFixed(2)}
                                    </span>
                                </div>
                                <span className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </div>

                            <hr className="border-gray-300 mb-4" />

                            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-4">
                                <SecondaryButton
                                onClick={() => {
                                    console.log("Old Cart");
                                    console.log(getCart())
                                    addToCart(product, 1)
                                    console.log("new cart")
                                    console.log(getCart())
                                    toast.success("Product Added to cart")
                                }}
                                className="bg-black text-white hover:bg-gray-900 transition-all">
                                    Add to Cart <MdAddShoppingCart className="ml-2" />
                                </SecondaryButton>
                                {product.stock > 0 && (
                                    <PrimaryButton 
                                    className="bg-green-600 hover:bg-green-700 transition-all text-white"
                                    onClick={() => {
                                        navigate("/checkout", {
                                             state: [{ 
                                                productId: product.productId,
                                                name: product.name,
                                                image: product.images[0],
                                                price: product.price,
                                                labeledPrice: product.labeledPrice,
                                                quantity: 1
                                              }] 
                                            }
                                        )
                                    }}
                                    >
                                        Buy Now
                                    </PrimaryButton>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
}
