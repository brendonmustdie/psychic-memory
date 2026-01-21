

export default function ScreenLayoutComp({leftComponent, rightComponent}) {
    return (
        <div className="mx-36">
            <div className="grid grid-cols-2 gap-4 mt-10 my-32 text-white">
                <div>{leftComponent}</div>
                <div className={"m-10"}>{rightComponent}</div>
            </div>
            <div className={"w-full h-0.5 bg-gray-500"}></div>
        </div>
    );
}
