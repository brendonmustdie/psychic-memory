

export default function ScreenLayoutComp({leftComponent, rightComponent}) {
    return (
        <div className="lg:mx-36 mx-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-4 mt-10 lg:my-32 text-white">
                <div>{leftComponent}</div>
                <div className="px-4 md:px-8 lg:px-10 py-10">
                    {rightComponent}
                </div>

            </div>
            <div className={"w-full h-0.5 bg-gray-500"}></div>
        </div>
    );
}
