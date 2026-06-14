import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import toast from "react-hot-toast";
import Loading from "../../components/loading";
import ReviewCard from "../../components/reviewCard";
import axios from "axios";


export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAllReviews();
    }, [])

    const fetchAllReviews = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/reviews")
            setReviews(res.data)
        } catch (err) {
            toast.error("Failed to fetch reviews")
            console.log(err);
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <div className="w-full max-w-[1200px] mx-auto px-[10px] mt-[40px] flex flex-col gap-[50px] items-center">
            
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[20px] font-raleway">
                <h1 className="text-[24px] font-medium leading-tight">Reviews</h1>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-[20px]">
                {
                    isLoading ? (
                        <Loading />
                    ) : reviews.length > 0 ? (
                        reviews.slice(0,6).map((item) => {
                            return (
                                <ReviewCard key={item.reviewId} review={item} />
                            )
                        })
                    ) : (
                        <p className="text-center text-gray-500">No reviews found.</p>
                    )
                }
            </div>

            <Footer />
        </div>
    )

}