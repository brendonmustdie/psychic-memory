'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import Image from "next/image";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import FooterComp from "@/app/components/FooterComp";
import ImageDisplayComp from "@/app/components/ImageDisplayComp";
import GalleryComp from "@/app/components/GalleryComp";
import {useState} from "react";
import DividerComp from "@/app/components/DividerComp";
import SlidesComp from "@/app/components/SlidesComp";


export default function Page() {

    const nourishImages = [
        {
            image: "/images/sqare/Dashboard2.png",
            title: "Dashboard",
            description: "This is the most complicated page - it was important to the client that a ridiculous amount of data could be viewed at a glance. ",
        },
        {
            image: "/images/sqare/ProjectFiles.png",
            title: "Dashboard",
            description: "This is the most complicated page - it was important to the client that a ridiculous amount of data could be viewed at a glance. ",
        },
        {
            image: "/images/sqare/DailyProgressReport.png",
            title: "Dashboard",
            description: "This is the most complicated page - it was important to the client that a ridiculous amount of data could be viewed at a glance. ",
        },


    ]

    const nourishSlides = [
        {
            image: "/images/nourish/nourishSlides/1.png"
        },
        {
            image: "/images/nourish/nourishSlides/2.png",

        },
        {
            image: "/images/nourish/nourishSlides/3.png",

        },
        {
            image: "/images/nourish/nourishSlides/4.png",
        },
        {
            image: "/images/nourish/nourishSlides/5.png",
        },
        {
            image: "/images/nourish/nourishSlides/6.png",

        },
        {
            image: "/images/nourish/nourishSlides/7.png",

        },
        {
            image: "/images/nourish/nourishSlides/8.png",
        },
        {
            image: "/images/nourish/nourishSlides/9.png",
        },
        {
            image: "/images/nourish/nourishSlides/10.png",
        },
        {
            image: "/images/nourish/nourishSlides/11.png",
        },
        {
            image: "/images/nourish/nourishSlides/12.png",
        },
        {
            image: "/images/nourish/nourishSlides/13.png",
        },
        {image: "/images/nourish/nourishSlides/14.png"},
        {image: "/images/nourish/nourishSlides/15.png"},
        {image: "/images/nourish/nourishSlides/16.png"},
        {image: "/images/nourish/nourishSlides/17.png"},
        {image: "/images/nourish/nourishSlides/18.png"},
        {image: "/images/nourish/nourishSlides/19.png"},
        {image: "/images/nourish/nourishSlides/20.png"},
        {image: "/images/nourish/nourishSlides/21.png"},
        {image: "/images/nourish/nourishSlides/22.png"},
        {image: "/images/nourish/nourishSlides/23.png"},
        {image: "/images/nourish/nourishSlides/24.png"},
        {image: "/images/nourish/nourishSlides/25.png"},
        {image: "/images/nourish/nourishSlides/26.png"},
        {image: "/images/nourish/nourishSlides/27.png"},
        {image: "/images/nourish/nourishSlides/28.png"},
        {image: "/images/nourish/nourishSlides/29.png"},
        {image: "/images/nourish/nourishSlides/30.png"},
    ]

    const [galleryArray, setGalleryArray] = useState(nourishImages);
    const [title, setTitle] = useState("User Interface and Experience Design");
    const [slides, setSlides] = useState(false);

    const swapView = (title, galleryArray, slides) => {
        setGalleryArray(galleryArray);
        setTitle(title);
        setSlides(slides);
    };

    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="SQARE"
                        subheading="Redesign:"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Redesign of an app"
                        content={
                            <>
                                <p>
                                    I was hired by Intelligent ELephant specifically to redesign SQARE.
                                </p>
                                <p>
                                    SQARE is a browser-based project management application, specifically for
                                    construction sites.
                                </p>
                                <p>
                                    Ultimately, I also built the front-end for the site in React, but I am under NDA and
                                    can't share the site itself. I can only share the designs. So here they are!
                                </p>
                            </>
                        }
                    />
                }
            />

            <div className={"w-full text-center text-2xl font-handwritten mt-10"}> {title} </div>
            <GalleryComp images={galleryArray}></GalleryComp>
            <FooterComp></FooterComp>
        </main>
    );
}
