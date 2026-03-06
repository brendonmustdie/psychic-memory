import Link from "next/link";
import PokerChipComp from "@/app/components/PokerChipComp";
import Image from "next/image";


export default function ProjectComp({projects, categories}) {

    return (
        <div className="grid-cols-2 grid gap-2">
            {projects.map((project) => {
                return (
                    <div key={project.title} href={project.path} className={"m-4"}>
                        <div className={"flex flex-row gap-2"}>
                            <div className={"flex flex-col"}>
                                {project.categories.map((category) => {
                                    return (
                                        <PokerChipComp text={category} key={category}
                                                       colour={categories[category].color}/>
                                    )
                                })}
                            </div>
                            <Link href={project.path} className={"h-full"}>

                                <div className="relative rounded-t-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-fill"
                                    />

                                </div>
                                <div className={"bg-white rounded-b-lg p-4"}>

                                    <p className={"text-black text-xl md:text-3xl font-bold font-handwritten p-1"}>{project.title}
                                    </p>
                                    <p className={"text-black font-serif"}>{project.description}</p>


                                </div>
                            </Link>
                        </div>

                    </div>

                );
            })}
        </div>
    );


}
