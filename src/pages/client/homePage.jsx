import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import { LuArrowUpRight } from "react-icons/lu";
import ProductCard from "../../components/productCard";
import ReviewCard from "../../components/reviewCard";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {

    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
            setProducts(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/reviews")
        .then((res) => {
            setReviews(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="w-full max-w-[1200px] mx-auto px-[20px] mt-[40px] flex flex-col gap-[120px]">

            {/* Hero Section */}
            <div className="w-full flex flex-col items-center gap-[20px]">
                <div className="relative">
                    <img src="hero-img.png" className="w-[400px] h-auto" alt="Hero" />
                    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white pointer-events-none" />
                </div>

                <div className="font-raleway text-center flex flex-col items-center gap-[10px]">
                    <h1 className="text-[32px] md:text-[36px] font-medium leading-tight">
                        Enhance Your Natural Beauty
                    </h1>
                    <p className="text-[16px] md:text-[18px]">
                        Premium Cosmetics Delivered to Your Door
                    </p>
                    <div className="flex flex-wrap justify-center gap-[10px] mt-[10px]">
                        <Link to="/products">
                            <PrimaryButton>Shop Now</PrimaryButton>
                        </Link>
                        <Link to="/about">
                            <SecondaryButton>
                                Learn More <LuArrowUpRight />
                            </SecondaryButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="w-full flex flex-col md:flex-row items-center gap-[30px]">
                <div className="flex-1 font-raleway md:text-left">
                    <h2 className="text-[20px] font-medium">Discover the Radiance Behind CBC</h2>
                    <p className="text-[14px] my-[20px] leading-[26px]">
                        Crystal Beauty Care (CBC) is a skincare brand inspired by nature and perfected with science.
                        We believe every individual deserves to glow confidently.
                    </p>
                    <Link to="/about">
                        <SecondaryButton>
                            Learn More <LuArrowUpRight />
                        </SecondaryButton>
                    </Link>
                </div>

                <div className="flex-1">
                    <img src="about-img.png" className="w-full max-w-[570px] h-auto" alt="About CBC" />
                </div>
            </div>


            {/* products section */}
            <div className="w-full flex flex-col items-center gap-[30px]">
                <div className="w-full flex flex-row justify-between items-center font-raleway">
                    <h2 className="text-[20px] font-medium">Our Products</h2>
                    <Link to="/products" className="text-primary text-[14px] underline hover:text-green-500 duration-300">
                        View All
                    </Link>
                </div>

                <div className="w-full flex flex-wrap gap-[10px] justify-center">
                    {
                        products.slice(0, 4).map((product) => (
                            <ProductCard key={product.productId} product={product} />
                        ))
                    }
                </div>
            </div>


            {/* Testimonial Section */}
            <div className="w-full flex flex-col items-center font-raleway">
                <h1 className="text-[20px] font-medium">What Our Customers Say</h1>

                <div className="w-full flex flex-wrap gap-[10px] mt-[20px] justify-center">
                    {
                        reviews.slice(0, 4).map((review) => (
                            <ReviewCard key={review.reviewId} review={review} />
                        ))
                    }
                </div>

                <Link to="/reviews" className="text-primary text-[14px] underline hover:text-green-500 duration-300 mt-[40px]">
                    View All
                </Link>
            </div>

            <Footer />


        </div>
    );
}
