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
            image: "/images/nourish/Onboarding.png",
            title: "Onboarding Page for Nourish App",
            description: "This is the first page the user sees when opening the app for the first time after installing.",
        },
        {
            image: "/images/nourish/Log-in.png",
            title: "Log-in app for Nourish App",
            description: "This is the log-in page for the nourish app",
        },
        {
            image: "/images/nourish/Sign-up.png",
            title: "Sign Up",
            description: "This is the sign-up page for the nourish app",
        },
        {
            image: "/images/nourish/AboutYou.png",
            title: "About You",
            description: "This is the page that collects the information about users in order to properly recommend meals. ",

        },
        {
            image: "/images/nourish/AboutYou2.png",
            title: "About You",
            description: "This is the page that collects the information about users in order to properly recommend meals. ",

        },
        {
            image: "/images/nourish/DietaryRestrictions.png",
            title: "About You",
            description: "This is the page that collects the information about users in order to properly recommend meals. ",

        },

        {
            image: "/images/nourish/LogYourMood.png",
            title: "About You",
            description: "This is the page that collects the information about users in order to properly recommend meals. ",

        },
        {
            image: "/images/nourish/Menu.png",
            title: "About You",
            description: "This is the page that collects the information about users in order to properly recommend meals. ",

        },

        {
            image: "/images/nourish/RecommendedMenu.png",
            title: "About You",
            description: "This is the page that collects the information about users in order to properly recommend meals. ",

        },

    ]

    const nourishSlides = [
        {
            image: "/images/nourish/nourishSlides/1.png",

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
                        heading="Nourish"
                        subheading="Speculative Client:"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Nourish: A Case Study"
                        content={
                            <>
                                <p>
                                    Nourish is a fictional subscription-based
                                    healthy meal prep service focused on mood
                                    support.
                                </p>
                                <p>
                                    Meals are dietitian-developed and delivered
                                    weekly.
                                </p>
                                <p>
                                    Nourish is targeting busy young professionals
                                    (ages 22–25) who struggle to eat well.
                                </p>
                            </>
                        }
                    />
                }
            />
            <div className={"w-1/3 grid grid-cols-2 gap-1 m-auto"}>
                <button onClick={() => swapView("User Interface and Experience Design", nourishImages, false)}
                        className={"font-serif bg-white h-10 rounded-full text-black"}> UI/ UX Design
                </button>
                <button onClick={() => swapView("Brand Development", nourishSlides, true)}
                        className={"font-serif bg-white h-10 rounded-full text-black"}> Brand Development
                </button>
            </div>
            <DividerComp></DividerComp>
            <div className={"w-full text-center text-2xl font-handwritten mt-10"}> {title} </div>
            {slides ?
                <SlidesComp images={galleryArray}></SlidesComp> :
                <GalleryComp images={galleryArray}></GalleryComp>}
            <FooterComp></FooterComp>
        </main>
    );
}
