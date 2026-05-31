import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage";
import Header from "../components/header";
import ContactPage from "./client/contactPage";
import AboutUsPage from "./client/aboutUsPage";
import ProductsPage from "./client/productsPage";

export default function Home() {
    
    return (
        <div className="w-full h-screen flex flex-col p-[10px] items-center">
            <Header />

            <div className="w-full h-full flex flex-col items-center">
                <Routes path="/*">
                    <Route path="/*" element={<LandingPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
            </div>
        </div>
    )

}