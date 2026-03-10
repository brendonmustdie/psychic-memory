import Link from "next/link";
import PokerChipComp from "@/app/components/PokerChipComp";
import Image from "next/image";


export default function ProjectComp({projects, categories}) {

    return (
        <div className="">
            {projects.map((project) => {
                return (
                    <div key={project.title} href={project.path} className={"m-4"}>
                        <div className={""}>
                            <Link href={project.path} className={"h-full"}>

                                <div className="relative rounded-t-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-fill"
                                    />

                                </div>
                                <div className={"bg-white rounded-b-lg p-4"}>
                                    <div className={"flex flex-row gap-1"}>
                                        {project.categories.map((category) => {
                                            return (
                                                <div key={category}
                                                     className={"p-1 rounded-lg text-white"}
                                                     style={{backgroundColor: categories[category].color}}>{category}</div>
                                            )
                                        })}
                                    </div>
                                    <p className={"text-black text-xl md:text-3xl font-bold font-handwritten p-1 mt-2"}>{project.title}
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
