"use client";
import Link from "next/link";
import FooterComp from "@/app/components/FooterComp";
import DividerComp from "@/app/components/DividerComp";
import {useState} from "react";

export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const categories = {
        "UI/UX": {
            color: "#1E3A8A",
            hover: "#2A4DD0", // brighter spade blue
            text: "#E0E7FF"
        },
        "Brand Dev": {
            color: "#DC2626",
            hover: "#EF4444", // brighter heart red
            text: "#FFE4E6"
        },
        "Graphic Design": {
            color: "#F59E0B",
            hover: "#FBBF24", // brighter gold
            text: "#1A1A1A"
        },
        "Illustration": {
            color: "#15803D",
            hover: "#22C55E", // brighter club green
            text: "#DCFCE7"
        },
        "Digital Art": {
            color: "#A855F7",
            hover: "#C084FC", // brighter joker purple
            text: "#F5F3FF"
        },
        "Coming Soon": {
            color: "#6B7280",
            hover: "#9CA3AF", // lighter slate
            text: "#F9FAFB"
        },
        "MY PROCESS": {
            color: "#0F172A",
            hover: "#1E293B", // slightly lighter navy
            text: "#93C5FD"
        }
    };

    const projects = [
        {
            image: [
                "/images/SQARE/SQARE_cover.png",
            ],
            title: "Sqare",
            description: "A redesign of the SQARE application for Intelligent Elephant",
            categories: ["UI/UX", "Brand Dev"],
            path: "/projects/sqare",

        },
        // {
        //     image: [
        //         "/images/nourish/NourishImage.png",
        //     ],
        //     title: "Nourish",
        //     description: "A speculative design project for a fictional client",
        //     categories: ["UI/UX", "Graphic Design", "Brand Dev"],
        //     path: "/projects/nourish",
        //
        // },
        // {
        //     image: [
        //         "/images/nature_unmatched/Cover.png",
        //     ],
        //     title: "Unmatched Deck",
        //     description: "Custom illustrations for a personalized Unmatched Card Deck",
        //     categories: ["Illustration", "Digital Art"],
        //     path: "/projects/unmatcheddeck",
        //
        // },
        // {
        //     image: [
        //         "/images/profileTree/Cover.png",
        //     ],
        //     title: "Profiletree task",
        //     description: "I was shortlisted for a job application with ProfileTree, and wasn't hired. But I was proud of my design task - so here it is.  ",
        //     categories: ["UI/UX",],
        //     path: "/projects/profileTree",
        // },
        // {
        //     image: [
        //         "/images/illustrations/cover.png",
        //     ],
        //     title: "Exquisi-Corpse Illustrations",
        //     description: "I made these illustrations for the Exquiste-corpse component on the process page!",
        //     categories: ["Illustration", "Digital Art",],
        //     path: "/projects/exquisiteCorpse",
        // },
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

                    </div>
                </div>
                <DividerComp></DividerComp>


                <div className={""}>

                    <div className={"mx-10 my-5"}>
                        <h1 className={"font-handwritten md:-mb-6 text-lg"}> The main attraction: </h1>
                        <h1 className={"font-serif md:text-9xl text-3xl"}> My Work </h1>

                        <div className={"mt-10 font-serif"}>Filter through my projects with tags!</div>
                        <div className="flex flex-wrap gap-2 mx-10">
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
                        <div className="mx-10 text-sm text-gray-500">
                            Showing: <span className="font-bold">{selectedCategory}</span>
                        </div>
                        <div className="mx-10 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredProjects.map((project) => (
                                <Link key={project.title} href={project.path}>
                                    <div
                                        className="rounded overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 cursor-pointer">

                                        <img
                                            src={project.image}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="p-3 bg-white text-black">

                                            <div className="flex flex-wrap gap-1 mb-2">
                                                {project.categories.map((category) => {
                                                    const cat = categories[category] || {color: "#ccc", text: "#000"};

                                                    return (
                                                        <div
                                                            key={category}
                                                            style={{
                                                                backgroundColor: cat.color,
                                                                color: cat.text
                                                            }}
                                                            className="px-2 py-1 rounded text-xs"
                                                        >
                                                            {category}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className="flex items-center gap-2 font-handwritten">
                                                {project.icon}
                                                {project.title}
                                            </div>

                                            <div className="font-serif text-sm">
                                                {project.description}
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>


                    </div>
                    <DividerComp></DividerComp>

                </div>

            </div>
            <FooterComp></FooterComp>
        </main>
    );
}
