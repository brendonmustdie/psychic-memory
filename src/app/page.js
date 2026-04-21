"use client";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import ScreenLayoutComp from "@/app/components/ScreenLayoutComp";
import HeaderComp from "@/app/components/HeaderComp";
import GenericContentComp from "@/app/components/GenericContentComp";
import ProjectComp from "@/app/components/ProjectComp";
import XPComp from "@/app/components/XPComp";
import Link from "next/link";
import FooterComp from "@/app/components/FooterComp";
import Process from "@/app/components/Process";
import DividerComp from "@/app/components/DividerComp";
import {useState} from "react";
import XPCardComp from "@/app/components/XPCardComp";
// import {projectHmrEvents} from "next/dist/build/swc/generated-native";

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
    const progress = [
        {
            image: ["/images/illustrations/cover.png"],
            title: "My Processs",
            description: "Before you look at my work...check my process.",
            categories: ["MY PROCESS"],
            path: "/projects/process"
        },
    ]

    const projects = [

        {
            image: [
                "/images/nourish/NourishImage.png",
            ],
            title: "Nourish",
            description: "A speculative design project for a fictional client",
            categories: ["UI/UX", "Graphic Design", "Brand Dev"],
            path: "/projects/nourish",

        },
        {
            image: [
                "/images/nature_unmatched/Cover.png",
            ],
            title: "Unmatched Deck",
            description: "Custom illustrations for a personalized Unmatched Card Deck",
            categories: ["Illustration", "Digital Art"],
            path: "/projects/unmatcheddeck",

        },
        {
            image: [
                "/images/profileTree/Cover.png",
            ],
            title: "Profiletree task",
            description: "I was shortlisted for a job application with ProfileTree, and wasn't hired. But I was proud of my design task - so here it is.  ",
            categories: ["UI/UX",],
            path: "/projects/profileTree",
        },
        // {
        //     image: [
        //         "/images/illustrations/cover.png",
        //     ],
        //     title: "Exquisi-Corpse Illustrations",
        //     description: "I made these illustrations for the Exquiste-corpse component on the process page!",
        //     categories: ["Illustration", "Digital Art",],
        //     path: "/projects/profileTree",
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
                <div className={"md:hidden"}>
                    <div className={"text-construction-yellow m-3 font-serif"}>Please mind the dust! I'm building
                        something beautiful!
                    </div>
                    <WarningLabelComp></WarningLabelComp>
                </div>


                <ScreenLayoutComp leftComponent={<HeaderComp heading={"Portfolio"} subheading={"Brendon Kruger's"}/>}
                                  rightComponent={<GenericContentComp
                                      heading="About Me"
                                      content={
                                          <>
                                              <p className={"font-bold text-lg"}> Jack of all Trades, Master of None.
                                                  Often
                                                  times better than Master of
                                                  One.</p>
                                              <div className={"h-2"}></div>
                                              <p>I'm the Lead Designer at Intelligent Elephant and Evra, as well as a
                                                  junior front-end developer for Intelligent Elephant.</p>
                                              <p>My deviating interests lead me to get my undergraduate and honours
                                                  degree in Digital Art; where I studied Interactive Writing,
                                                  Interactive Media, and Game Development.</p>
                                              <p>I'm a creative and results-driven UI/UX designer, and I have 2 years of
                                                  prodessional experience in user-centered and visual design across
                                                  multiple platforms. My professional interests branch through multiple
                                                  fields, and make me a better designer.</p>
                                              <p>I'm skilled at collaborating with clients, developers, and
                                                  cross-functional
                                                  teams to deliver user-centric and aesthetically compelling design
                                                  solutions.</p>
                                              <p>I'm proficient in Notion, Figma, Adobe Creative Suite, and Sketch.</p>
                                              <p className={"font-bold mt-2 mb-2"}>Ask me about my current special
                                                  interest:</p>
                                              <div className={"flex flex-row gap-1 mb-5"}>
                                                  <div className={"bg-red-900 px-2"}>Painting techniques,</div>
                                                  <div className={"bg-green-950 px-2"}>Tattoo-ing Leather,</div>
                                                  <div className={"bg-blue-950 px-2"}>Procedural Generation,</div>
                                              </div>
                                          </>
                                      }

                                      buttons={
                                          <div className={"flex flex-row"}>
                                              <Link href={"/aboutme"}>
                                                  <div
                                                      className={"bg-red-900 p-2 rounded-full text-white font-bold font-serif m-2 border-2 border-black hover:border-red-900"}> Get
                                                      to Know Me
                                                  </div>
                                              </Link>
                                              <Link href={"/myCV"}>
                                                  <div
                                                      className={"bg-[#35654d] p-2 rounded-full text-white font-bold font-serif m-2  border-2 border-black hover:border-[#35654d]"}> Look
                                                      at my CV
                                                  </div>
                                              </Link>
                                              <Link href={"/projects/process"}>
                                                  <div
                                                      className={"bg-[#335566] p-2 rounded-full text-white font-bold font-serif m-2  border-2 border-black hover:border-[#35654d]"}> My
                                                      Process
                                                  </div>
                                              </Link>
                                          </div>
                                      }

                                  />
                                  }/>


                <div className={""}>

                    <div className={"mx-10 my-5"}>
                        <h1 className={"font-handwritten md:-mb-6 text-lg"}> The main attraction: </h1>
                        <h1 className={"font-serif md:text-9xl text-3xl"}> My Work </h1>
                        <div className="flex flex-wrap gap-2 mx-10 my-5">
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
                    {/*<ScreenLayoutComp*/}
                    {/*    leftComponent={<HeaderComp heading={"My Work"} subheading={""}/>}*/}
                    {/*    rightComponent={<ProjectComp projects={projects} categories={categories}/>}*/}
                    {/*/>*/}
                </div>

                <ScreenLayoutComp
                    leftComponent={<HeaderComp heading={"My Experience"} subheading={"Want to hire me?"}/>}
                    rightComponent={<XPComp/>}
                />
            </div>
            <FooterComp></FooterComp>
        </main>
    );
}
