import { LuArrowUpRight } from "react-icons/lu";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="w-full h-full flex flex-col justify-center mt-[40px] gap-[120px]">
            {/* Hero Section */}
            <div className="flex flex-col items-center mt-[40px]">
                <div className="flex flex-col justify-center items-center">
                    <img src="hero-img.png" className="w-[400px] h-auto" />
                    <div className="w-[400px] h-[200px] mt-[-200px] bg-gradient-to-t from-white"></div>
                </div>

                <div className="flex flex-col justify-center items-center mt-[20px] font-raleway">
                    <h1 className="text-[36px]  text-center">Enhance Your Natural Beauty</h1>
                    <p className="text-[18px] text-center">Premium Cosmetics Delivered to Your Door</p>

                    <div className="flex flex-row gap-[10px]">
                        <Link to="/products"><PrimaryButton>Shop Now</PrimaryButton></Link>
                        <SecondaryButton>Learn More <LuArrowUpRight /></SecondaryButton>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="w-full h-fit flex flex-col">
                <div className="font-raleway">
                    <h2 className="text-[20px] font-medium">Discover the Radiance Behind CBC</h2>
                    <p className="text-[14px] mt-[20px] leading-[26px]">Crystal Beauty Care (CBC) is a skincare brand inspired by nature and perfected with science. We believe every individual deserves to glow confidently.</p>
                    <SecondaryButton>Learn More <LuArrowUpRight /></SecondaryButton>
                </div>
            </div>

            <div className="w-full h-[200px] bg-url('about-img.png)"></div>

        </div>
    );
}