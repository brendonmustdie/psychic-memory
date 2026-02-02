import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import Image from "next/image";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import NextProjectComp from "@/app/components/NextProjectComp";
import WarningLabelComp from "@/app/components/WarningLabelComp";


export default function Page() {
    return (
        <main className="min-h-screen">
            <WarningLabelComp></WarningLabelComp>
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
                {/*<NextProjectComp></NextProjectComp>*/}
            </div>


            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="Nourish"
                        subheading="Speculative Client:"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Nourish: A Case Study"
                        content={
                            <>
                                <p>
                                    Nourish is a fictional subscription-based
                                    healthy meal prep service focused on mood
                                    support.
                                </p>
                                <p>
                                    Meals are dietitian-developed and delivered
                                    weekly.
                                </p>
                                <p>
                                    Nourish is targeting busy young professionals
                                    (ages 22–25) who struggle to eat well.
                                </p>
                            </>
                        }
                    />
                }
            />
            <h2 className={"font-handwritten  lg:text-3xl flex m-10 w-80"}> Brand Identity Guidelines:</h2>

            <div className="lg:p-10 flex justify-center">
                <div

                    style={{
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        paddingTop: "56.25%",
                        overflow: "hidden",
                        borderRadius: "8px",
                    }}
                >
                    <iframe
                        loading="lazy"
                        src="https://www.canva.com/design/DAG6W467O5A/d3RWCoVTt066Yd7ssGg5Iw/view?embed"
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "70%",
                            border: "none",
                        }}

                    />
                </div>

            </div>
            <h2 className={"font-handwritten  lg:text-3xl flex m-10 w-80"}> User Interface:</h2>

            <div className={"m-10 grid lg:grid-cols-2"}>
                <div
                    className="relative overflow-hidden "
                    style={{ paddingTop: '56.25%' }} // 16:9 ratio
                >
                    <Image
                        src="/images/1.png"
                        alt="test"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className={"m-10"}> These screenshots show off the on-boarding of the Nourish App.</div>
            </div>
            <div className={"m-10 grid lg:grid-cols-2"}>
                <div
                    className="relative overflow-hidden "
                    style={{ paddingTop: '56.25%' }} // 16:9 ratio
                >
                    <Image
                        src="/images/2.png"
                        alt="test"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className={"m-10"}> These screens are a continuation of the on-boarding - it shows how users would provide the company with relevant information.</div>
            </div>
            <div className={"m-10 grid lg:grid-cols-2 gap-6"}>
                <div
                    className="relative overflow-hidden "
                    style={{ paddingTop: '56.25%' }} // 16:9 ratio
                >
                    <Image
                        src="/images/3.png"
                        alt="test"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className={"m-10"}> These are the weekly menu screens, as well as the mood selection screen. </div>
            </div>
        </main>
    );
}
