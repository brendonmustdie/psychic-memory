'use client'
import ScreenLayoutComp from "../../components/ScreenLayoutComp";
import HeaderComp from "../../components/HeaderComp";
import GenericContentComp from "../../components/GenericContentComp";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import FooterComp from "@/app/components/FooterComp";

import Process from "@/app/components/Process";

export default function Page() {


    return (
        <main className="min-h-screen">
            <div className={"flex flex-row"}>
                <HomeButtonComp></HomeButtonComp>
            </div>
            <ScreenLayoutComp
                leftComponent={
                    <HeaderComp
                        heading="My Process"
                        subheading="How the sausage gets made"
                    />
                }
                rightComponent={
                    <GenericContentComp
                        heading=""
                        content={
                            <>
                            </>
                        }
                    />
                }
            />
            <Process></Process>
            <FooterComp></FooterComp>
        </main>
    );
}
