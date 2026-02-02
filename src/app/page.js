
import WarningLabelComp from "@/app/components/WarningLabelComp";
import ScreenLayoutComp from "@/app/components/ScreenLayoutComp";
import HeaderComp from "@/app/components/HeaderComp";
import GenericContentComp from "@/app/components/GenericContentComp";
import ProjectComp from "@/app/components/ProjectComp";
import XPComp from "@/app/components/XPComp";



export default function Home() {
    const categories = [
        {name: "UI/UX Design", color: "#375823", text: "#B3D89C"},
        {name: "Brand Development", color: "#186A77", text: "#98DFEA"},
        {name: "Digital Media Management", color: "#121711", text: "#5C7457"},
        {name: "Digital Marketing", color: "#1A2438", text: "#6883BA"},
        {name: "Copywriting", color: "#0D0C1D", text: "#3D3B8E"},
        {name: "Graphic Design", color: "#0D0C1D", text: "#3D3B8E"},
        {name: "Illustration", color: "#0D0C1D", text: "#3D3B8E"},
        {name: "Digital Art", color: "#0D0C1D", text: "#3D3B8E"},

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
            categories: ["Brand Development", "UI/UX Design", "Graphic Design"],
            path: "/projects/nourish",
        },
        {
            image: "",
            title: "Unmatched Deck",
            description: "A speculative design project for a fictional client",
            categories: ["Illustration", "Digital Art"],
            path: "/projects/unmatcheddeck",
        },

    ];


    return (
        <main>
            <div className="bg-black">
                <WarningLabelComp></WarningLabelComp>
                <div className={"md:hidden"}>
                    <div className={"text-construction-yellow m-3 font-serif"}>Please mind the dust! I'm building something beautiful!</div>
                    <WarningLabelComp ></WarningLabelComp>
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
                                  />
                                  }/>


                <div className={"grid-cols-5 grid gap-2 lg:mx-56 mx-10 my-3 text-gray-400 text-center font-serif text-sm md:text-md lg:text-lg"}>
                    <div className={"font-bold"}> UI/UX Design</div>
                    <div> Brand Development</div>
                    <div className={"font-bold"}> Digital Media Management</div>
                    <div> Digital Marketing</div>
                    <div className={"font-bold"}> Copywriting</div>
                </div>
                <div className={"mx-56 h-0.5 bg-gray-500 "}></div>
                <ScreenLayoutComp
                    leftComponent={<HeaderComp heading={"My Work"} subheading={""}/>}
                    rightComponent={<ProjectComp projects={projects} categories={categories}/>}
                />
                <ScreenLayoutComp
                    leftComponent={<HeaderComp heading={"My Experience"} subheading={"Want to hire me?"}/>}
                    rightComponent={<XPComp/>}
                />
            </div>
        </main>
    );
}
