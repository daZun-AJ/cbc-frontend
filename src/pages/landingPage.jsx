import Header from "../components/header";
import homeImg from "/home-img.png"
import { GoArrowUpRight } from "react-icons/go";
import { SiAndela } from "react-icons/si";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../components/buttons";
import { LuArrowUpRight } from "react-icons/lu";
import ProductCard from "../components/productCard";
import ReviewCard from "../components/reviewCard";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col p-[10px] items-center font-raleway">

      <div className="w-full flex flex-col items-center justify-center mt-[50px]">
        {/* image */}
        <div className="flex flex-col items-center">
            <img
            src={homeImg}
            alt="hero section image"
            className="w-90 h-auto "
            />
            <div className="w-150 h-70 absolute top-[30%] md:top-[29%]  bg-linear-to-t from-white to-transparent"/>
        </div>
        {/* contents */}
        <div className="mt-[60px] flex flex-col items-center md:mt-[100px]">
            <h1 className="text-2xl md:text-4xl font-bold">Discover Your Natural Beauty</h1>
            <p className="mt-[10px] text-center text-gray-400 md:w-[500px]">Explore premium skincare and makeup products designed to make you feel confident, radiant, and beautiful every day.</p>
            <div className="mt-[20px] flex gap-3">
                <button className="px-[20px] py-[10px] rounded-full border-1 flex items-center gap-1">
                    Shop Now
                    <GoArrowUpRight />
                </button>
                <button className="px-[20px] py-[10px] bg-black text-primary rounded-full flex items-center">
                    Explore Us
                </button>
            </div>
            {/* tagline */}
            <div className="mt-[30px] p-[5px] bg-primary/10 rounded-full">
                <p className="text-primary font-medium flex items-center gap-1.5">
                    <SiAndela />
                    Glow starts with self-care
                </p>
            </div>
        </div>

        {/* Quick Features */}
        <div className="my-[100px] w-[calc(100%-10px)] gap-1 flex flex-wrap items-center justify-center">
            <div className="w-[190px] md:w-[250px] p-[10px] flex flex-col items-center">
                <IoCheckmarkDoneCircle className="text-2xl mb-[10px] text-red-600" />
                <h3 className="font-semibold text-center">100% Authentic Products</h3>
                <p className="text-[12px] text-center text-gray-400">Carefully selected beauty products from trusted brands.</p>
            </div>
            <div className="w-[190px] md:w-[250px] p-[10px] flex flex-col items-center">
                <MdLocalShipping className="text-2xl mb-[10px] text-blue-600" />
                <h3 className="font-semibold text-center">Fast Islandwide Delivery</h3>
                <p className="text-[12px] text-center text-gray-400">Get your favorite cosmetics delivered quickly to your doorstep.</p>
            </div>
            <div className="w-[190px] md:w-[250px] p-[10px] flex flex-col items-center">
                <FaLeaf className="text-2xl mb-[10px] text-primary" />
                <h3 className="font-semibold text-center">Skin-Friendly Choices</h3>
                <p className="text-[12px] text-center text-gray-400">Gentle, high-quality formulas for every skin type.</p>
            </div>
            <div className="w-[190px] md:w-[250px] p-[10px] flex flex-col items-center">
                <FaBasketShopping className="text-2xl mb-[10px] text-gray-500" />
                <h3 className="font-semibold text-center">Easy Online Shopping</h3>
                <p className="text-[12px] text-center text-gray-400">Browse, order, and enjoy beauty shopping with ease.</p>
            </div>
        </div>

        {/* About Section */}
        <div className="my-[100px] w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
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
        <div className="my-[100px] w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-col items-center justify-center gap-10">
            <div className="w-full flex flex-row justify-between items-center font-raleway">
                <h2 className="text-[20px] font-medium">Our Products</h2>
                <Link to="/products" className="text-primary text-[14px] underline hover:text-green-500 duration-300">
                    View All
                </Link>
            </div>

            <div className="w-full flex flex-wrap gap-[10px] justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>

        {/* Testimonial Section */}
        <div className="w-full flex flex-col items-center font-raleway mb-[50px]">
            <h1 className="text-[20px] font-medium">What Our Customers Say</h1>
            <div className="w-full flex flex-wrap gap-[10px] mt-[20px] justify-center items-center">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <Link to="/reviews" className="text-primary text-[14px] underline hover:text-green-500 duration-300 mt-[40px]">
                View All
            </Link>
        </div>

        <Footer />

      </div>
    </div>
  );
}