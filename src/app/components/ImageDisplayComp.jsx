"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageDisplayComp({ imageArray }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? imageArray.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === imageArray.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Image Container */}
            <div className="relative w-full h-full">
                <Image
                    src={imageArray[currentIndex].image}
                    alt={`illustration-${currentIndex}`}
                    fill
                    className="object-contain transition-all duration-500"
                    priority
                />
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 text-white px-4 py-3 rounded-full text-xl"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                     className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 text-white px-4 py-3 rounded-full text-xl"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                     className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            </button>
        </div>
    );

}
