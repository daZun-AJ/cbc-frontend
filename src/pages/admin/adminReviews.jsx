import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/reviews").then((res) => {
            setReviews(res.data);
        });
    }, []);

    return (
        <div className="w-full h-full py-[20px] overflow-y-scroll px-[20px] relative">
            <div className="mb-[30px]">
                <h1 className="text-[24px] font-bold mb-2">Manage Reviews</h1>
                <p className="text-[12px] text-gray-400 max-w-[600px]">
                    Review management panel for user feedback and ratings.
                </p>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Review ID</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Email</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Rating</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Review</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Images</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Date</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr
                                key={review._id || index}
                                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <td className="px-6 py-4 whitespace-nowrap font-mono">{review.reviewId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{review.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{review.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-yellow-600">
                                    {review.rating} / 5
                                </td>
                                <td className="px-6 py-4 max-w-[300px] truncate" title={review.review}>
                                    {review.review}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {review.images && review.images.length > 0 ? (
                                        <span className="text-blue-600 font-semibold">
                                            {review.images.length} image{review.images.length > 1 ? "s" : ""}
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">No images</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {new Date(review.date).toLocaleDateString("en-GB")}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2">
                                        <button
                                            className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors duration-300"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors duration-300"
                                            title="Delete"
                                        >
                                            <FaRegTrashCan />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
