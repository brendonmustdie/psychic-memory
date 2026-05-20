import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/dist/css/splide.min.css";

// Hard-coded image style
const imageStyle = {
    width: "300px",
    height: "150px",
    borderRadius: "20px",
    border: "1px solid #FFFFFF33",
    objectFit: "cover",
};

function AutoCarousel({images = []}) {
    return (
        <div className="relative flex h-full bg-black">
            <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop",
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 1,
                        },
                        arrows: false,
                        pagination: false,
                        fixedWidth: "300px",
                        gap: "12px",
                    }}
                    extensions={{AutoScroll}}
                >
                    {images.map((src, index) => (
                        <SplideSlide key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                style={imageStyle}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default AutoCarousel;