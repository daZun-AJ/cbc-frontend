import { LuArrowUpRight } from "react-icons/lu";
import { SecondaryButton } from "../../components/buttons";
import Footer from "../../components/footer";



export default function AboutUsPage() {
    
    return (
        <div className="w-full lg:max-w-[1200px] flex flex-col items-center justify-center gap-[100px] font-raleway">
            <div className="w-full flex flex-col items-center mt-[40px]">
                <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
                    <h1 className="md:w-[500px] text-[48px] md:text-[58px]">Our Story, Vision and Valuse</h1>
                    <div className="flex flex-col items-end">
                        <p>Where Natural Beauty Meets Modern Science</p>
                        <SecondaryButton>Explore Our Products <LuArrowUpRight /></SecondaryButton>
                    </div>
                </div>

                <div className="w-full h-[400px] bg-[url('about-img.png')] bg-no-repeat bg-cover bg-center rounded-[20px] mt-[20px]"></div>
            </div>
            
            <div className="w-full flex flex-col justify-between lg:flex-row items-center gap-2 mt-[40px]">
                <p className="w-full leading-[26px]  md:w-[500px] md:text-[26px] font-semibold text-gray-500 md:leading-[36px] mb-[20px]">
                    "Crystal Beauty Care began with a simple belief—beauty should be pure, kind, and empowering. Founded by a team of passionate skincare enthusiasts in 2023, CBC was created to fill the gap between honest ingredients and visible results. Inspired by nature and driven by science, our mission is to provide high-quality cosmetic products that celebrate your individuality without compromising your health or the planet."
                </p>
                
                <img src="about-img.png" className="w-full h-[320px] lg:w-[500px] md:h-[500px] object-cover rounded-2xl" />
            </div>

            <div>
                <h2 className="text-[32px] font-semibold">Empowering Confidence Through Natural Beauty</h2>
                <p className="mt-[20px]">At CBC, our vision is to promote self-love, transparency, and sustainability in beauty. We envision a world where skincare enhances your natural charm and becomes a ritual of self-care, not just a routine. With each product, we strive to build trust and confidence—helping you feel beautiful, inside and out.</p>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-[20px]">
                <div className="w-full p-[20px] bg-gray-50">
                    <h3 className="text-[24px] font-semibold">Clean. Safe. Effective</h3>
                    <p className="mt-[10px]">Our commitment to ingredient integrity is at the heart of everything we create. We meticulously select plant-powered, dermatologist-approved ingredients and avoid all harsh, toxic substances. Every product is tested for safety, gentleness, and real results.</p>
                    <div className="w-full flex flex-col gap-[10px] mt-[20px] mb-[20px]">
                        <p>No Parabens</p>
                        <p>No Sulfates or Silicones</p>
                        <p>Cruelty-Free Certified</p>
                        <p>Skin-Safe for All Types</p>
                    </div>
                </div>
                <div className="w-full p-[20px] bg-primary/10">
                    <h3 className="text-[24px] font-semibold">Clean. Safe. Effective</h3>
                    <p className="mt-[10px]">Our commitment to ingredient integrity is at the heart of everything we create. We meticulously select plant-powered, dermatologist-approved ingredients and avoid all harsh, toxic substances. Every product is tested for safety, gentleness, and real results.</p>
                    <div className="w-full flex flex-col gap-[10px] mt-[20px] mb-[20px]">
                        <p>No Parabens</p>
                        <p>No Sulfates or Silicones</p>
                        <p>Cruelty-Free Certified</p>
                        <p>Skin-Safe for All Types</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );

}