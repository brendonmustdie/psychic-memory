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

    const funStuff = [
        {
            image: "/images/funStuff/birthday1.png",
        },
        {
            image: "/images/funStuff/birthday2.png",
        },
        {
            image: "/images/funStuff/Halloween1.png",
        },
        {
            image: "/images/funStuff/halloween2.png",
        },
        {
            image: "/images/funStuff/halloween3.png",
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
                        heading="Fun stuff"
                        subheading="Design in my Personal Life:"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Personal, Fun Stuff"
                        content={
                            <>
                                <p>
                                    As a child, my mother went through great lengths to encorage design in everyday
                                    life. One of my best memories is the creation of physical birthday party
                                    invitations.
                                </p>
                                <p>
                                    In adulthood, I realized there was no reason to drop this tradition. Most of these
                                    are my birthday invitations, but any graphic I make will land here eventually.
                                </p>

                            </>
                        }
                    />
                }
            />
            <div className={"w-full text-center text-2xl font-handwritten mt-10"}> Fun Stuff</div>
            <SlidesComp images={funStuff}></SlidesComp>
            <FooterComp></FooterComp>
        </main>
    );
}
