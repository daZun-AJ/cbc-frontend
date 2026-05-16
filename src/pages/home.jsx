import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage";
import Header from "../components/header";
import ContactPage from "./client/contactPage";

export default function Home() {
    
    return (
        <div className="w-full h-screen flex flex-col p-[10px] items-center">
            <Header />

            <div className="w-full h-full flex flex-col items-center">
                <Routes path="/*">
                    <Route path="/*" element={<LandingPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </div>
    )

}