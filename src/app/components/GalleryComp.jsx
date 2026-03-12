'use client'
import React, {useEffect} from "react";
import {useState} from "react";

export default function GalleryComp({images, header}) {

    const [selectedImage, setSelectedImage] = useState(0);

    const openImage = (index) => {
        setSelectedImage(index);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        setSelectedImage(0);
    }, [images]);

    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <div className={"w-full"}>
            <div className={"text-xl font-bold font-handwritten mx-auto w-1/2 text-center my-4"}>{header}</div>
            <div className={"grid grid-cols-2 gap-1"}>
                <div className={"grid md:col-span-2 w-full bg-white m-4 rounded-lg"}>
                    <img className={"h-100 m-auto p-1 object-contain"} src={images[selectedImage].image} alt=""/>
                </div>
                <div>
                    <div className={"grid grid-cols-2 w-full"}>
                        <button onClick={prevImage} className={" p-2 m-2 flex flex-row group"}>
                            <div>
                                <div className={"group-hover:hidden flex"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-caret-left" viewBox="0 0 16 16">
                                        <path
                                            d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
                                    </svg>
                                    <div className={"m-2 font-handwritten"}> Previous</div>


                                </div>
                                <div className={"hidden group-hover:flex"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                    <div className={"m-2 font-handwritten font-bold"}> Previous</div>

                                </div>
                            </div>
                        </button>
                        <button onClick={nextImage} className={"p-2 m-2 flex flex-row group"}>
                            <div>
                                <div className={"group-hover:hidden flex"}>
                                    <div className={"m-2 font-handwritten"}> Next</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-caret-right" viewBox="0 0 16 16">
                                        <path
                                            d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                                    </svg>
                                </div>
                                <div className={"hidden group-hover:flex"}>
                                    <div className={"m-2 font-handwritten font-bold"}> Next</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>


                                </div>
                            </div>
                        </button>
                    </div>

                    <div
                        className={"text-white m-4 font-bold font-handwritten text-lg px-6"}>{images[selectedImage].title}</div>
                    <div className={"text-white m-4 px-10 font-serif"}>{images[selectedImage].description}</div>
                </div>
            </div>
            <div className={"m-2 grid-cols-3 grid gap-2"}>
                {images.map((imageObject, index) => (
                    <div key={index} className={"bg-white border-black hover:border-white border-2 m-2 rounded-lg"}>
                        <img className={"h-80 p-1 m-auto object-cover"} key={index} src={imageObject.image}
                             onClick={() => openImage(index)}
                             alt={""}></img>
                        <div>{imageObject.title}</div>
                    </div>
                ))}
            </div>
        </div>


    )
}