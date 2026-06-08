"use client";
import FooterComp from "@/app/components/FooterComp";
import DividerComp from "@/app/components/DividerComp";
import {useState} from "react";
import {useMemo} from "react";
import Image from "next/image";
import FlipCard from "@/app/components/FlipCard.jsx";
import PokerChipComp from "@/app/components/PokerChipComp.jsx";
import Link from "next/link";

export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState("ALL");


    const suits = {
        spade: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#5C5C5C"
                className="bi bi-suit-spade-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
            </svg>
        ),

        diamond: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#DC2626"
                className="bi bi-suit-diamond-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg>
        ),

        club: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#5C5C5C"
                className="bi bi-suit-club-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/>
            </svg>
        ),

        heart: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#DC2626"
                className="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
            </svg>
        ),
    };

    const values = [
        "A", "K", "Q", "J", "10"
    ]


    const categories = {
        "UI/UX": {
            color: "#8E6906",
            text: "#E0E7FF"
        },
        "Brand Dev": {
            color: "#47114F",
            hover: "#EF4444", // brighter heart red
            text: "#FFE4E6"
        },
        "Illustration": {
            color: "#243442",
            hover: "#22C55E", // brighter club green
            text: "#DCFCE7"
        },
        "Digital Art": {
            color: "#6A1515",
            hover: "#C084FC", // brighter joker purple
            text: "#F5F3FF"
        },
        "3D Model": {
            color: "#08321E",
            hover: "#9CA3AF", // lighter slate
            text: "#F9FAFB"
        },
    };


    const projects = [
        {
            image: [
                "/images/profileTree/6.png",
            ],
            title: "ProfileTree",
            description: "A redesign of the SQARE application for Intelligent Elephant",
            categories: ["UI/UX"],
            path: "/projects/profileTree",
            suit: "text",

        },
        {
            image: [
                "/images/SQARE/2.png",
            ],
            title: "Sqare",
            description: "A redesign of the SQARE application for Intelligent Elephant",
            categories: ["UI/UX", "Brand Dev"],
            path: "/projects/sqare",

        },
        {
            image: [
                "/images/nature_unmatched/5.png",
            ],
            title: "Unmatched",
            description: "The design of a custom deck for the boardgame Unmatched",
            categories: ["Digital Art", "Illustration",],
            path: "/projects/unmatcheddeck",

        },

        {
            image: [
                "/images/illustrations/4.png",
            ],
            title: "Exquisite Corpse",
            description: "I made these illustrations for the Exquiste-corpse component in a previous iteration of my portfolio!",
            categories: ["Digital Art", "Illustration",],
            path: "/projects/exquisiteCorpse",
        },
        {
            image: [
                "/images/fishFactoryModels/fishFactoryCover.png",
            ],
            title: "Factory Models",
            description: "I made these models for a passion project of Luke Eales",
            categories: ["3D Model"],
            path: "/projects/fishFactory",
        },

        {
            image: [
                "/images/nourish/1.png",
            ],
            title: "Nourish",
            description: "A speculative design project for a fictional client",
            categories: ["UI/UX", "Brand Dev"],
            path: "/projects/nourish",

        },
        // {
        //     image: [
        //         "/images/illustrations/cover.png",
        //     ],
        //     title: "Clicker",
        //     description: "I made these illustrations for the Exquiste-corpse component on the process page!",
        //     categories: ["Illustration", "Digital Art",],
        //     path: "/projects/clicker",
        // },
    ];

    const linkedIn = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                          className="bi bi-linkedin" viewBox="0 0 16 16">
        <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>

    const filteredProjects =
        selectedCategory === "ALL"
            ? projects
            : projects.filter((project) =>
                project.categories.includes(selectedCategory)
            );

    const categoryCounts = projects.reduce((acc, project) => {
        project.categories.forEach((cat) => {
            acc[cat] = (acc[cat] || 0) + 1;
        });
        return acc;
    }, {});

    const availableCategories = Object.keys(categories).filter(
        (cat) => categoryCounts[cat] > 0
    );


    const decoratedProjects = useMemo(() => {
        return filteredProjects.map((project) => {

            return {
                ...project,

            };
        });
    }, [filteredProjects]);


    return (
        <main>
            <div className="">
                <div className={"grid grid-cols-3"}>
                    <div className={"my-10 mx-5 flex flex-row"}>
                    </div>
                    <div className={"my-5"}>
                        <div className={"text-center text-lg font-serif font-bold"}>Brendon Kruger's</div>
                        <div className={"text-center text-3xl font-handwritten font-bold"}>Portfolio</div>
                    </div>
                    <div className={"text-right my-10 mx-5"}>
                        <Link href={"https://www.linkedin.com/in/brendon-kruger-a5a846232/"}> {linkedIn} </Link>
                    </div>
                </div>
                <DividerComp></DividerComp>


                <div className={""}>
                    <div className={"md:hidden bg-yellow-400 w-full flex-row flex content-center justify-center p-2"}>
                        <div className={"text-black font-bold"}>Warning!</div>
                        <div className={"mx-2 text-black"}> This site is better on desktop.</div>
                    </div>
                    <div className={"mx-10 my-5"}>
                        <h1 className={"font-handwritten md:-mb-6 text-lg"}> The main attraction: </h1>
                        <h1 className={"font-serif md:text-9xl text-3xl"}> My Work </h1>

                        <div className={"mt-10 font-serif"}>Filter through my projects with tags!</div>
                        <div className="flex flex-wrap gap-2 md:mx-10">
                            <div className="flex flex-wrap gap-2 my-5">
                                {["ALL", ...availableCategories].map((category) => {
                                    const isActive = selectedCategory === category;
                                    const isAll = category === "ALL";
                                    const cat = categories[category];

                                    const count = isAll ? projects.length : categoryCounts[category];

                                    return (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}

                                            className="px-3 py-1 rounded-full border text-sm transition"
                                            style={{
                                                backgroundColor: isActive
                                                    ? "white"
                                                    : (isAll ? "#000" : cat.color),

                                                color: isActive
                                                    ? "#000"
                                                    : (isAll ? "#fff" : cat.text),

                                                borderColor: isAll
                                                    ? "#000"
                                                    : cat.color,
                                            }}
                                        >
                                            <span>{category}</span>

                                            <span className="ml-2 text-xs opacity-80">
                    {count}
                </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="md:mx-10 text-sm text-gray-500">
                            Showing: <span className="font-bold">{selectedCategory}</span>
                        </div>
                        <div className="md:mx-10 my-5 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {decoratedProjects.map((project, index) => {
                                const suitValues = Object.values(suits);
                                const randomSuit =
                                    suitValues[Math.floor(Math.random() * suitValues.length)];
                                const randomValue = values[Math.floor(Math.random() * values.length)];
                                return (
                                    <div key={index}>
                                        <div className={"font-bold font-handwritten"}>{project.title}</div>
                                        <FlipCard link={project.path} image={project.image[0]} title={project.title}
                                                  description={project.description} suit={randomSuit}
                                                  value={randomValue}></FlipCard>
                                        <div className="grid grid-cols-3">
                                            {project.categories.map((category) => (
                                                <PokerChipComp
                                                    key={category}
                                                    colour={categories[category].color}
                                                    text={category}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}


                        </div>

                    </div>
                    <DividerComp></DividerComp>

                </div>
            </div>
            <FooterComp></FooterComp>
        </main>
    );
}
