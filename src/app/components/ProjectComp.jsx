import Link from "next/link";
import PokerChipComp from "@/app/components/PokerChipComp";

export default function ProjectComp({ projects, categories }) {

    const getCategoryColor = (name) => {
        const cat = categories.find(c => c.name === name);
        return cat ? cat.color : "bg-gray-400";
    };

    const getCategoryTextColor = (name) => {
        const cat = categories.find(c => c.name === name);
        return cat ? cat.text : "#000";
    };

    const suits = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-club-fill" viewBox="0 0 16 16">
                <path
                    d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/>
            </svg> , color: "black"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                <path
                    d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg>, color: "red"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-heart-fill ml-2" viewBox="0 0 16 16">
                <path
                    d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
            </svg>,
            color: "red"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                       className="bi bi-suit-spade-fill" viewBox="0 0 16 16">
                <path
                    d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
            </svg>,
            color: "black"
        }

    ]

    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const getRandomCard = () => {
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const value = values[Math.floor(Math.random() * values.length)];
        return { suit, value };
    };

    const projectCards = projects.map(() => getRandomCard());

    return (
        <div className="md:grid md:grid-cols-3 md:gap-x-24 md:gap-y-6 my-1">

        {projects.map((project, index) => {
                const card = projectCards[index];

                return (
                    <Link key={project.title} href={project.path}>
                        <div className="relative block p-4 my-10 md:my-0 rounded bg-white text-black cursor-pointer hover:shadow-lg hover:-translate-y-1 transition h-full">

                            {/* Right-side scattered Poker Chips */}
                            <div className="absolute top-4 right-0 h-full z-10 pointer-events-none">
                                {project.categories.map((catName, index) => {
                                    // Base positions
                                    const baseTop = index * 80;                   // vertical spacing
                                    const topOffset = baseTop + Math.random() * 20; // vertical jitter

                                    const rightOffset = -90 + Math.random() * 15;   // mostly outside the card
                                    const rotation = -20 + Math.random() * 40;      // random rotation

                                    return (
                                        <div
                                            key={catName}
                                            className="absolute"
                                            style={{
                                                top: `${topOffset}px`,
                                                right: `${rightOffset}px`,
                                                transform: `rotate(${rotation}deg)`,
                                            }}
                                        >
                                            <PokerChipComp
                                                colour={getCategoryColor(catName)}
                                                text={catName}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Top-left card corner */}
                            <div className="flex flex-col items-start leading-none">
      <span className="text-xl font-bold m-1" style={{color: card.suit.color}}>
        {card.value}
      </span>
                                <span style={{color: card.suit.color}}>
        {card.suit.icon}
      </span>
                            </div>

                            {/* Card content */}
                            <div className="font-bold text-lg m-2 text-black font-handwritten">
                                {project.title}
                            </div>

                            <div className="text-black font-serif">
                                {project.description}
                            </div>

                            {/* Bottom-right card corner */}
                            <div className="flex flex-col items-end justify-end mt-4">
      <span className="text-xl m-1 font-bold " style={{color: card.suit.color}}>
        {card.value}
      </span>
                                <span style={{color: card.suit.color}}>
        {card.suit.icon}
      </span>
                            </div>
                        </div>
                    </Link>

                );
            })}
        </div>
    );


}
