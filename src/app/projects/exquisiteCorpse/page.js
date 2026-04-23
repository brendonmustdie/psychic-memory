'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import FooterComp from "@/app/components/FooterComp";
import GalleryComp from "@/app/components/GalleryComp";
import {useState} from "react";
import SlidesComp from "@/app/components/SlidesComp";


export default function Page() {

    const profileTree = [
        {image: "/images/illustrations/apple.png"},
        {image: "/images/illustrations/chesspiece.png"},
        {image: "/images/illustrations/frog.png"},
        {image: "/images/illustrations/ladybug.png"},
        {image: "/images/illustrations/russiandoll.png"},
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
            <div className={"w-full text-center text-2xl font-handwritten mt-10"}> Design task</div>
            <GalleryComp images={profileTree}></GalleryComp>
            <FooterComp></FooterComp>
        </main>
    );
}
