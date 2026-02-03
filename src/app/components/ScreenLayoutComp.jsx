

export default function ScreenLayoutComp({leftComponent, rightComponent}) {
    return (
        <div className="mx-10 h-full">
            <div className="xl:grid xl:grid-cols-2 xl:gap-4 mt-10 xl:my-32 text-white">
                <div>{leftComponent}</div>
                <div className="px-4 md:px-8 lg:px-10 py-10">
                    {rightComponent}
                </div>

            </div>
            <div className={"w-full h-0.5 bg-gray-500"}></div>
        </div>
    );
}
