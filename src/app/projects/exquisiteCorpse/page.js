'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import FooterComp from "@/app/components/FooterComp";
import GalleryComp from "@/app/components/GalleryComp";
import {useState} from "react";
import SlidesComp from "@/app/components/SlidesComp";
import Process from "@/app/components/Process.jsx";

export default function Page() {

    const illustrations = [
        {
            image: "/images/illustrations/apple.png",
            title: "Apple"
        },
        {
            image: "/images/illustrations/chesspiece.png",
            title: "Chesspiece"
        },
        {
            image: "/images/illustrations/frog.png",
            title: "Frog"
        },
        {
            image: "/images/illustrations/ladybug.png",
            title: "Ladybug"
        },
        {
            image: "/images/illustrations/russiandoll.png",
            title: "Russiandoll"
        },
    ]

    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="Exquisite-Copse"
                        subheading="Digital Illustrations for my"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Exquisite-Corpse Illustrations"
                        content={
                            <>
                                <p>
                                    I made these for a fun exquisite-corpse component for a section of this portfolio.
                                    And I thought they were too cute to be hidden there. I drew this in Krita.
                                </p>
                            </>
                        }
                    />
                }
            />
            <Process></Process>
            <div className={"font-serif"}>But here's a look at the actual illustrations...</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {illustrations.map((illustration) => (
                    <div
                        key={illustration.title}
                        className="relative group overflow-hidden"
                    >
                        <img
                            src={illustration.image}
                            alt={illustration.description}
                            className="w-full block"
                        />

                        {/* Mobile text */}
                        <div className="md:hidden p-3 bg-white text-black">
                            <h3 className="text-lg font-bold mb-1">
                                {illustration.title}
                            </h3>
                            <p className="text-sm">
                                {illustration.description}
                            </p>
                        </div>

                        {/* Desktop overlay */}
                        <div
                            className="
                    hidden md:flex
                    absolute inset-0
                    bg-black/80
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    flex-col justify-center items-center
                    text-white p-4 text-center
                "
                        >
                            <h3 className="text-lg font-bold mb-2">
                                {illustration.title}
                            </h3>

                            <p className="text-sm">
                                {illustration.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <FooterComp></FooterComp>
        </main>
    );
}
