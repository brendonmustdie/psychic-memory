import WarningLabelComp from "@/app/components/WarningLabelComp";
import ScreenLayoutComp from "@/app/components/ScreenLayoutComp";
import HeaderComp from "@/app/components/HeaderComp";
import GenericContentComp from "@/app/components/GenericContentComp";
import ProjectComp from "@/app/components/ProjectComp";
import XPComp from "@/app/components/XPComp";
import Link from "next/link";
import FooterComp from "@/app/components/FooterComp";
import Process from "@/app/components/Process";

export default function Home() {

    const categories = {
        "UI/UX": {color: "#D32F2F", text: "#B3D89C"},
        "Brand Dev": {color: "#1976D2", text: "#98DFEA"},
        "MY PROCESS": {color: "#388E3C", text: "#5C7457"},
        "Digital Art": {color: "#212121", text: "#6883BA"},
        "Coming Soon": {color: "#7B1FA2", text: "#3D3B8E"},
        "Graphic Design": {color: "#0D0C1D", text: "#3D3B8E"},
        "Illustration": {color: "#0D0C1D", text: "#3D3B8E"}
    };

    const projects = [
        {
            image: ["/images/illustrations/cover.png"],
            title: "My Processs",
            description: "Before you look at my work...check my process.",
            categories: ["MY PROCESS"],
            path: "/projects/process"
        },
        {
            image: [
                "/images/nourish/NourishImage.png",
            ],
            title: "Nourish",
            description: "A speculative design project for a fictional client",
            categories: ["UI/UX", "Graphic Design", "Brand Dev"],
            path: "/projects/nourish",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc2626"
                       className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                <path
                    d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg>
        },
        {
            image: [
                "/images/nature_unmatched/Cover.png",
            ],
            title: "Unmatched Deck",
            description: "Custom illustrations for a personalized Unmatched Card Deck",
            categories: ["Illustration", "Digital Art"],
            path: "/projects/unmatcheddeck",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-spade-fill" viewBox="0 0 16 16">
                <path
                    d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
            </svg>
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
    ];


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
                                          </div>
                                      }

                                  />
                                  }/>


                <div className={""}>
                    {/*<div className={"grid grid-cols-5 mx-10"}>*/}
                    {/*    <button className={"mx-1 bg-red-900 h-10 rounded-lg py-1 px-2"}> UI/UX</button>*/}
                    {/*    <button className={"mx-1 bg-red-900 h-10 rounded-lg py-1 px-2"}> Graphic Design</button>*/}
                    {/*    <button className={"mx-1 bg-red-900 h-10 rounded-lg py-1 px-2"}> Illustration</button>*/}
                    {/*    <button className={"mx-1 bg-red-900 h-10 rounded-lg py-1 px-2"}> Digital Art</button>*/}
                    {/*    <button className={"mx-1 bg-red-900 h-10 rounded-lg py-1 px-2"}> Brand Development</button>*/}
                    {/*</div>*/}
                    <ScreenLayoutComp
                        leftComponent={<HeaderComp heading={"My Work"} subheading={""}/>}
                        rightComponent={<ProjectComp projects={projects} categories={categories}/>}
                    />
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
