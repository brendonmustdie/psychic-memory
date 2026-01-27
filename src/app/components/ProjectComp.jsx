import Link from "next/link";

export default function ProjectComp({ projects, categories }) {

    const getCategoryColor = (name) => {
        const cat = categories.find(c => c.name === name);
        return cat ? cat.color : "bg-gray-400";
    };

    const getCategoryTextColor = (name) => {
        const cat = categories.find(c => c.name === name);
        return cat ? cat.text : "#000"; // fallback to black for text
    };

    return (
        <div className="md:grid md:grid-cols-3 md:gap-6">
            {projects.map((project) => (
                <Link key={project.title} href={project.path}>
                    <div className="block p-4 rounded bg-white text-black cursor-pointer hover:shadow-lg hover:-translate-y-1 transition">
                        <div className="font-bold text-lg text-black font-handwritten">
                            {project.title}
                        </div>

                        <div className="text-black font-serif">
                            {project.description}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.categories.map((catName) => (
                                <span
                                    key={catName}
                                    className="px-2 py-1 text-sm rounded font-serif"
                                    style={{
                                        backgroundColor: getCategoryColor(catName),
                                        color: getCategoryTextColor(catName)
                                    }}
                                >
                                    {catName}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
