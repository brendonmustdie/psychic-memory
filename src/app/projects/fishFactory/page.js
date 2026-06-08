'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import FooterComp from "@/app/components/FooterComp";
import Process from "@/app/components/Process.jsx";

export default function Page() {

    const models = [
        {
            image: "/images/fishFactoryModels/ManualFiller.png",
            title: "Manual Filler Model"
        },
        {
            image: "/images/fishFactoryModels/BoneCrusherNormal.png",
            title: "Bone Crusher Model"
        },
        {
            image: "/images/fishFactoryModels/CanLabelerNormal.png",
            title: "CanLabeler Model"
        },
        {
            image: "/images/fishFactoryModels/Canner.png",
            title: "Canner Model"
        },
        {
            image: "/images/fishFactoryModels/ContainersNormal.png",
            title: "Containers Model"
        },
        {
            image: "/images/fishFactoryModels/CoolingTankNormal.png",
            title: "Cooling Tanks Model"
        },
        {
            image: "/images/fishFactoryModels/FishKettleNormal.png",
            title: "Fish Kettle Model"
        },
        {
            image: "/images/fishFactoryModels/InspectionTable.png",
            title: "InspectionTable Model"
        },
        {
            image: "/images/fishFactoryModels/ScaleNormal.png",
            title: "Scale Model"
        },

        {
            image: "/images/fishFactoryModels/SoupKettleNormal.png",
            title: "Soup Kettle Model"
        },

        {
            image: "/images/fishFactoryModels/SteamKettleNormal.png",
            title: "Steam Kettle Model"
        },

        {
            image: "/images/fishFactoryModels/SteamSterilizerNormal.png",
            title: "Steam Sterilizer Model"
        },


    ]

    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="Fish Canning Models"
                        subheading="3D Models made in Blender."
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading="Fish Factory Models"
                        content={
                            <>
                                <p>
                                    I was hired by Luke Eales to create these 3D models for a passion progress of a
                                    fish-canning factory in a shipping container.
                                </p>
                            </>
                        }
                    />
                }
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {models.map((illustration) => (
                    <div
                        key={illustration.title}
                        className="relative group overflow-hidden"
                    >
                        <img
                            src={illustration.image}
                            alt={illustration.description}
                            className="w-full block"
                        />

                        {/* Mobile text */}
                        <div className="md:hidden p-3 bg-white text-black">
                            <h3 className="text-lg font-bold mb-1">
                                {illustration.title}
                            </h3>
                            <p className="text-sm">
                                {illustration.description}
                            </p>
                        </div>

                        {/* Desktop overlay */}
                        <div
                            className="
                    hidden md:flex
                    absolute inset-0
                    bg-black/80
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    flex-col justify-center items-center
                    text-white p-4 text-center
                "
                        >
                            <h3 className="text-lg font-bold mb-2">
                                {illustration.title}
                            </h3>

                            <p className="text-sm">
                                {illustration.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <FooterComp></FooterComp>
        </main>
    );
}
