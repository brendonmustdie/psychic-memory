export default function NavBar(){
    return (
        <div>
        <div className={"sticky-top flex justify-center w-full my-3"}>
            <nav>
                <ul className={"grid grid-cols-4 gap-3 content-center w-full text-xl"}>
                    <li><a>My Work</a></li>
                    <li><a>My Blog</a></li>
                    <li><a>Hire Me</a></li>
                </ul>
            </nav>
        </div>
            <div className={"w-full h-0.5 bg-white mt-2"}></div>
        </div>
    )
}