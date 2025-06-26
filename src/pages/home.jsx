import { Route, Routes } from "react-router-dom"
import Header from "../components/header"
import HomePage from "./client/homePage"
import AboutUsPage from "./client/aboutUsPage"
import ContactPage from "./client/contactPage"
import ProductsPage from "./client/productsPage"



export default function Home() {
    
    return (
        <div className="w-full h-screen flex flex-col p-[10px] items-center">
            <Header />

            <div className="w-full h-full flex flex-col items-center">
                <Routes path="/*">
                    <Route path="/*" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </div>
    )

}