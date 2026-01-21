export default function WarningLabelComp() {
    return (
        <div className="">
            <div className="relative w-full h-10 md:h-32 overflow-hidden
                      bg-[repeating-linear-gradient(-45deg,#facc15_0_40px,transparent_0_80px)]
                      flex items-center justify-center">

                <div className="bg-[#facc15] md:p-15 text-black uppercase tracking-wider
                        transform -skew-x-45">
                    <div className="hidden md:flex skew-x-45 text-center text-serif text-xl font-bold">
                        Please mind the dust! <br/> I'm building something beautiful!</div>
                </div>
            </div>
        </div>
    );
}
