import { useState } from "react";

export default function ImageSlider({ props }) {
    const images = props.images;
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="w-full h-full">
            <img className="w-full h-[400px] object-cover" src={images[currentIndex]} alt="" />

            <div className="w-full h-[100px] flex items-center gap-2">
                {
                    images?.map((image, index) => (
                        <img key={index} className="w-[90px] h-[90px] object-cover cursor-pointer" src={image} alt="" onClick={() => setCurrentIndex(index)} />
                    ))
                }
            </div>
        </div>
    )
}