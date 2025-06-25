import { Route, Routes } from "react-router-dom"
import Header from "../components/header"
import HomePage from "./client/homePage"
import AboutUsPage from "./client/aboutUsPage"



export default function Home() {
    
    return (
        <div className="w-full h-screen flex flex-col p-[10px] items-center">
            <Header />

            <div className="w-full h-full flex flex-col items-center">
                <Routes path="/*">
                    <Route path="/*" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                </Routes>
            </div>
        </div>
    )

}