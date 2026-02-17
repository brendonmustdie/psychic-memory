import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import Image from "next/image";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import FooterComp from "@/app/components/FooterComp";
import ImageDisplayComp from "@/app/components/ImageDisplayComp";


export default function Page() {
    const nourishImages = [
        {image: "/images/nourish/AboutYou.png"},
        {image: "/images/nourish/AboutYou2.png"},
        {image: "/images/nourish/DietaryRestrictions.png"},
        {image: "/images/nourish/Log-in.png"},
        {image: "/images/nourish/LogYourMood.png"},
        {image: "/images/nourish/Menu.png"},
        {image: "/images/nourish/Onboarding.png"},
        {image: "/images/nourish/RecommendedMenu.png"},
        {image: "/images/nourish/Sign-up.png"},
    ]

    const nourishSlides = [
        {image: "/images/nourish/nourishSlides/1.png"},
        {image: "/images/nourish/nourishSlides/2.png"},
        {image: "/images/nourish/nourishSlides/3.png"},
        {image: "/images/nourish/nourishSlides/4.png"},
        {image: "/images/nourish/nourishSlides/5.png"},
        {image: "/images/nourish/nourishSlides/6.png"},
        {image: "/images/nourish/nourishSlides/7.png"},
        {image: "/images/nourish/nourishSlides/8.png"},
        {image: "/images/nourish/nourishSlides/9.png"},
        {image: "/images/nourish/nourishSlides/10.png"},
        {image: "/images/nourish/nourishSlides/11.png"},
        {image: "/images/nourish/nourishSlides/12.png"},
        {image: "/images/nourish/nourishSlides/13.png"},
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
    return (
        <main className="min-h-screen">
            <WarningLabelComp></WarningLabelComp>
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
            <h2 className={"font-handwritten  lg:text-3xl flex m-10 w-80"}> Brand Identity Guidelines:</h2>
            <ImageDisplayComp imageArray={nourishSlides}></ImageDisplayComp>


            <h2 className={"font-handwritten  lg:text-3xl flex m-10 w-80"}> User Interface:</h2>
            <ImageDisplayComp imageArray={nourishImages}></ImageDisplayComp>


            <FooterComp></FooterComp>












        </main>
    );
}
