import { Route, Routes } from "react-router-dom"
import Header from "../components/header"
import HomePage from "./client/homePage"
import AboutUsPage from "./client/aboutUsPage"
import ContactPage from "./client/contactPage"
import ProductsPage from "./client/productsPage"
import ProductOverviewPage from "./client/productOverviewPage"
import CartPage from "./client/cartPage"
import CheckoutPage from "./client/checkoutPage"



export default function Home() {
    
    return (
        <div className="w-full h-screen flex flex-col p-[10px] items-center">
            <Header />

            <div className="w-full h-full flex flex-col items-center">
                <Routes path="/*">
                    <Route path="/*" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/overview/:id" element={<ProductOverviewPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </div>
        </div>
    )

}