import Footer from "./components/footer";
import Header from "./components/header";
import ProductCard from "./components/productCard";
import ReviewCard from "./components/reviewCard";



export default function LandingPage() {
    return (
        <div className="w-full h-screen flex flex-col p-[10px] items-center">
            <Header />
            <ProductCard />
            <ReviewCard />
            <Footer />
        </div>
    )
}