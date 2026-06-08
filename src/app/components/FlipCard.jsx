"use client";

import Image from "next/image";
import Link from "next/link";

export default function FlipCard({image, title, description, suit, value, link}) {
    return (
        <Link href={link}>
            <div className="w-full aspect-[5/7] group [perspective:1200px] ">
                <div
                    className="relative w-full h-full transition-transform duration-500"
                    style={{transformStyle: "preserve-3d"}}
                >

                    {/* FRONT */}
                    <div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{backfaceVisibility: "hidden"}}
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* BACK */}
                    <div
                        className="absolute inset-0 rounded-xl bg-white"
                        style={{
                            transform: "rotateY(180deg)",
                            backfaceVisibility: "hidden",
                        }}
                    >
                        {/* Top-left corner */}
                        <div className="absolute top-2 left-2 flex items-center gap-1">
                            <div className={"text-black font-bold text-xl lg:text-3xl"}>{value}</div>
                            <div>{suit}</div>
                        </div>

                        {/* Bottom-right corner (rotated) */}
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 rotate-180">
                            <div className={"text-black font-bold text-xl lg:text-3xl"}>{value}</div>
                            <div>{suit}</div>
                        </div>
                        <div className="absolute bottom-2 left-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Click to reveal
                        </div>
                        <div className="font-serif h-full flex items-center justify-center text-center mx-4">
                            <div>
                                <div className={"text-black font-bold text-xl"}>{title}</div>
                                <div className={"text-black"}>{description}</div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* FLIP TRIGGER */}
                <style jsx>{`
                    .group:hover > div {
                        transform: rotateY(180deg);
                    }
                `}</style>
            </div>
        </Link>
    );
}