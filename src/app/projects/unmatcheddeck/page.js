import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import Image from "next/image";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import NextProjectComp from "@/app/components/NextProjectComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import ImageSlider from "@/app/components/ImageDisplayComp";
import ImageDisplayComp from "@/app/components/ImageDisplayComp";


export default function Page() {
    const illustrations=[
        {image: "/images/nature-unmatched/ElainesGetOut.png"},
        {image: "/images/nature-unmatched/FrankBlocksThePath.png"},
        {image: "/images/nature-unmatched/FrankWandersOff.png"},
        {image: "/images/nature-unmatched/knight3.png"},
        {image: "/images/nature-unmatched/pizzabox.png"},
        {image: "/images/nature-unmatched/planted.png"},
        {image: "/images/nature-unmatched/pruning.png"},
        {image: "/images/nature-unmatched/resistTheUrge.png"},
        {image: "/images/nature-unmatched/soup.png"},
        {image: "/images/nature-unmatched/SurpriseBumSmack.png"},

    ]
    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>


            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="Unmatched Deck"
                        subheading="Personal Project:"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Nature-inspired Deck"
                        content={
                            <>
                                <p>
                                    Unmatched is a card-based board game. It centres around the idea of unbalanced characters (Dracula, Sherlock Holmes, Invisible Man, Dr Jekyll & Mr Hyde) with their own unique deck of cards.
                                </p>
                                <p>
                                    There are hundreds of fan-made characters, with fan-made decks.
                                </p>
                                <p>
                                    When someone I love became obsessed with Unmatched, I knew exactly what had to be done; He needed a custom deck based on himself.
                                </p>
                            </>
                        }
                    />
                }
            />
        <ImageDisplayComp imageArray={illustrations}></ImageDisplayComp>
        </main>
    );
}
