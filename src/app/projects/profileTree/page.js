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
        {
            image: "/images/profileTree/Screens1.png",
        },
        {
            image: "/images/profileTree/Screens2.png",
        },
        {
            image: "/images/profileTree/Screens3.png",
        },
        {
            image: "/images/profileTree/Screens4.png",
        },
        {
            image: "/images/profileTree/Screens5.png",
        },
        {
            image: "/images/profileTree/Screens6.png",
        },
        {
            image: "/images/profileTree/Screens7.png",
        },
        {
            image: "/images/profileTree/Screens8.png",
        },
        {
            image: "/images/profileTree/Screens9.png",
        },
        {
            image: "/images/profileTree/Screens10.png",
        },
        {
            image: "/images/profileTree/Screens11.png",
        },
        {
            image: "/images/profileTree/Screens12.png",
        },
        {
            image: "/images/profileTree/Screens13.png",
        },
        {
            image: "/images/profileTree/Screens14.png",
        },
        {
            image: "/images/profileTree/Screens15.png",
        },
        {
            image: "/images/profileTree/Screens16.png",
        },
        {
            image: "/images/profileTree/Screens17.png",
        },
        {
            image: "/images/profileTree/Screens18.png",
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
                        heading="ProfileTree"
                        subheading="Design task"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Profiletree page design"
                        content={
                            <>
                                <p>
                                    I applied for a design position with ProfileTree - an Irish-based SEO company. I got
                                    shortlisted and asked to build this design. While I ultimately did not get selected
                                    for the position, I enjoyed the process and was proud of my work.
                                </p>
                                <p>
                                    You can view the Figma design file here:
                                    <br/>
                                    <a className={"text-blue-500 font-bold underline-offset-4 underline"}
                                       href={"https://www.figma.com/design/c0XMMsgTonf3NqcbKRVOhc/ProfileTree_SEO?node-id=0-1&t=YzZ0YNGWowJxlzVg-1"}>Figma
                                        Design File</a>
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
