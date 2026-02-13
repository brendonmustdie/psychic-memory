import ScreenLayoutComp from "../components/ScreenLayoutComp";
import HeaderComp from "../components/HeaderComp";
import GenericContentComp from "../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";
import Image from "next/image";
import FooterComp from "@/app/components/FooterComp";


export default function Page() {
    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>


            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="I'm Brendon"
                        subheading="Get to know me:"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Professionally"
                        content={
                            <>
                                <p>
                                    I'm a UI/UX designer and front-end developer with a passion for beautiful websites.I'm interested in brand development, and copywriting - and I'm hoping to develop some experience in these areas.

                                </p>
                                <br/>
                                <p>
                                    I'd love to be the ui/ux designer that overhauls your sites and applications. My strengths lie in designing and building beautiful, responsive front
                                    ends. I'm comfortable in native HTML, React, and Next.js. I'm a big fan of Tailwind, and HeroUI, but I'm also comfortable building components
                                    from scratch.
                                    </p>
                                <br/>
                                <p>
                                    I work best on a small team or on my own. I like a clear hierarchy, but a culture of learning and passion. Our differences make us a better team - and I'd like our culture to support that.
                                    I'm an avid learner with a passion for "manipulating" the user. I'm great at knowing - and studying - how a user interacts with a product, and how
                                    to guide them the way we want.
                                </p>
                            </>
                        }
                    />
                }
            />
            <ScreenLayoutComp
            leftComponent={
                <HeaderComp
                    heading="Outside of work"
                    subheading="Behind the scenes:"
                />
            }
            rightComponent={
                <GenericContentComp
                    heading="In my personal life,"
                    content={
                        <>
                            <p>
                                I care deeply about animals and the environment. I absolutely live for my pets and the time that I can spend with them.
                            </p>
                            <br/>
                            <p>
                                Of course, I love games and integrate play into my life as often as possible. I spend a lot of time thinking about or playing card games, particularly solitaire and a variant of Poker.
                            </p>
                            <br/>
                            <p>  I enjoy musical theater, and even did some drama in my short time in high school! I love to do yoga, bake new and interesting recipes, and reading fantasy or horror novels.
                            </p>
                        </>
                    }
                />
            }
        />
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="Meet my assistants"
                        subheading="I can't do it all alone."
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Meet the team behind Me"
                        content={
                            <div className="flex gap-6">
                                {[
                                    { name: "Elaine", title: "Pest Control Expert", desc: "Ensures no spiders, geckos, or mice go un-eaten." },
                                    { name: "Frank", title: "Lead Cuddle-bug", desc: "Handles the tricky task of keeping me company." },
                                    { name: "Kramer", title: "Consulting Guard Dog", desc: "Reminds me of food time, everyday." },
                                ].map((assistant) => (
                                    <div key={assistant.name} className="flex flex-col items-center w-48">
                                        <div className="relative w-48 h-48">
                                            <Image
                                                src={`/images/${assistant.name}.jpeg`}
                                                alt={assistant.name}
                                                fill
                                                className="object-cover rounded-xl"
                                            />
                                        </div>
                                        <h3 className="mt-2 text-lg font-handwritten">{assistant.name}</h3>
                                        <p className="text-md text-white text-center font-bold">{assistant.title}</p>
                                        <p className="text-md text-gray-400 text-center mt-1">{assistant.desc}</p>
                                    </div>
                                ))}
                            </div>
                        }
                    />
                }
            />
<FooterComp></FooterComp>
        </main>
    );
}
