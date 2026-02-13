
import WarningLabelComp from "@/app/components/WarningLabelComp";
import ScreenLayoutComp from "@/app/components/ScreenLayoutComp";
import HeaderComp from "@/app/components/HeaderComp";
import GenericContentComp from "@/app/components/GenericContentComp";
import ProjectComp from "@/app/components/ProjectComp";
import XPComp from "@/app/components/XPComp";
import Link from "next/link";
import FooterComp from "@/app/components/FooterComp";



export default function Home() {
    const categories = [
        {name: "UI/UX Design", color: "#D32F2F", text: "#B3D89C"},
        {name: "Brand Dev", color: "#1976D2", text: "#98DFEA"},
        {name: "Digital Media Management", color: "#388E3C", text: "#5C7457"},
        {name: "Digital Art", color: "#212121", text: "#6883BA"},
        {name: "Coming Soon", color: "#7B1FA2", text: "#3D3B8E"},
        {name: "Graphic Design", color: "#0D0C1D", text: "#3D3B8E"},
        {name: "Illustration", color: "#0D0C1D", text: "#3D3B8E"},

    ];

    const blogPosts = [
        {
            image: "",
            title: "Authentic Beauty Concept",
            description: "Brand spotlight: a study of Authentic Beauty Concept",
            date: "01/01/01"
        },
        {
            image: "",
            title: "Colour of the Year",
            description: "Brand spotlight: a study of Authentic Beauty Concept",
            date: "01/01/01"
        },
        {
            image: "",
            title: "Kleinsky's",
            description: "Brand spotlight: a study of Kleinsky's",
            date: "01/01/01"
        },

    ]

    const projects = [
        {
            image: "",
            title: "Nourish",
            description: "A speculative design project for a fictional client",
            categories: ["Brand Dev", "UI/UX Design", "Graphic Design"],
            path: "/projects/nourish",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc2626"
                       className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                <path
                    d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg>
        },
        {
            image: "",
            title: "Unmatched Deck",
            description: "A speculative design project for a fictional client",
            categories: ["Illustration", "Digital Art"],
            path: "/projects/unmatcheddeck",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-spade-fill" viewBox="0 0 16 16">
                <path
                    d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
            </svg>
        },
        {
            image: "",
            title: "Nothing to see here...",
            description: "More projects coming soon.",
            categories: ["Coming Soon"],
            path: "/",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-spade-fill" viewBox="0 0 16 16">
                <path
                    d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
            </svg>
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
                                              <p>Brendon is a UI/UX designer and front-end developer at Intelligent
                                                  Elephant.io.</p>
                                              <p>In 2024, she obtained an honours degree in Digital Art.</p>
                                              <p>She is a creative and results-driven UX/UI Designer with 2 years of
                                                  professional experience in user-centered and visual design across
                                                  multiple platforms.</p>
                                              <p>Skilled in collaborating with clients, developers, and cross-functional
                                                  teams to deliver user-centric and aesthetically compelling design
                                                  solutions.</p>
                                              <p>Proficient in Notion, Figma, Adobe Creative Suite, and Sketch.</p>
                                          </>
                                      }

                                    buttons={
                                      <div className={"flex flex-row"}>
                                          <Link href={"/aboutme"}><div className={"bg-red-900 p-2 rounded-full text-white font-bold font-serif m-2 border-2 border-black hover:border-red-900"}> Get to Know Me </div>
                                          </Link>
                                          <Link href={"/myCV"}><div className={"bg-[#35654d] p-2 rounded-full text-white font-bold font-serif m-2  border-2 border-black hover:border-[#35654d]"}> Look at my CV  </div>
                                          </Link>
                                      </div>
                                        }

                                  />
                                  }/>


                <div className={""}>
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
