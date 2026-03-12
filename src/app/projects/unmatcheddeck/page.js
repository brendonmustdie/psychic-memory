import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import Image from "next/image";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import NextProjectComp from "@/app/components/NextProjectComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import ImageSlider from "@/app/components/ImageDisplayComp";
import ImageDisplayComp from "@/app/components/ImageDisplayComp";
import GalleryComp from "@/app/components/GalleryComp";


export default function Page() {
    const illustrations = [
        {
            image: "/images/nature_unmatched/FrankBlocksThePath.png",
            title: "Frank Blocks The Path",
            description: "This is a digital illustration of a dog named Frank, blocking the path.",
        },
        {
            image: "/images/nature_unmatched/FrankWandersOff.png",
            title: "Frank Wanders Off",
            description: "This is a digital illustration of a dog named Frank, wandering off.",

        },
        {
            image: "/images/nature_unmatched/knight3.png",
            title: "Nazgul's Recycling",
            description: "This is a digital illustration of a Lord of The Rings Nazgul, in a recycling logo.",
        },
        {
            image: "/images/nature_unmatched/pizzabox.png",
            title: "Mr Perfect",
            description: "This is a digital illustration of a pizza box with from Pizza Perfect, where the drawings on the box reference inside jokes",
        },
        {
            image: "/images/nature_unmatched/planted.png",
            title: "Planted",
            description: "This is a digital illustration of a seedling, planted by yellow gloves.",
        },
        {
            image: "/images/nature_unmatched/pruning.png",
            title: "Pruning",
            description: "This is a digital illustration of a red pair of pruning scissors.",
        },
        {
            image: "/images/nature_unmatched/resistTheUrge.png",
            title: "Resist The Urge",
            description: "This is a digital illustration of a couch being dragged over the floor..",
        },
        {
            image: "/images/nature_unmatched/soup.png",
            title: "No Soup For You",
            description: "This is a digital illustration of a spilled bowl of tomato soup.",
        },
        {
            image: "/images/nature_unmatched/SurpriseBumSmack.png",
            title: "Drain Cat's Bum Smack",
            description: "This is a digital illustration of a cat named Elaine, who we rescued from a drain, raising her paw to smack.",
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
                                    Unmatched is a card-based board game. It centres around the idea of unbalanced
                                    characters (Dracula, Sherlock Holmes, Invisible Man, Dr Jekyll & Mr Hyde) with their
                                    own unique deck of cards.
                                </p>
                                <p>
                                    There are hundreds of fan-made characters, with fan-made decks.
                                </p>
                                <p>
                                    When someone I love became obsessed with Unmatched, I knew exactly what had to be
                                    done; He needed a custom deck based on himself.
                                </p>
                            </>
                        }
                    />
                }
            />
            <GalleryComp images={illustrations}></GalleryComp>
        </main>
    );
}
