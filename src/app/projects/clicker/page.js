'use client'

import {useEffect, useMemo, useState} from "react";
import HomeButtonComp from "@/app/components/HomeButtonComp";
import {
    CartesianGrid,
    ResponsiveContainer,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

export default function Page() {

    const [simulation, setSimulation] = useState({
        time: 0,
        population: 1,
        score: 0,
        chartData: [
            {time: 0, population: 1, score: 0, birthRate: 5}
        ],
    });

    const growthRate =
        simulation.chartData.length > 1
            ? simulation.chartData[simulation.chartData.length - 1].score -
            simulation.chartData[simulation.chartData.length - 2].score
            : 0;

    const [birthRate, setBirthRate] = useState(5);
    const [deathRate, setDeathRate] = useState(1);

    const [abortion, setAbortion] = useState(true);
    const [vote, setVote] = useState(true);
    const [work, setWork] = useState(true);
    const [liberation, setLiberation] = useState(true);
    const [education, setEducation] = useState(true);
    const [childMarriage, setChildMarriage] = useState(true);
    const [childLabour, setChildLabour] = useState(true);

    const [abortionPropoganda, setAbortionPropoganda] = useState(true);
    const [votePropoganda, setVotePropoganda] = useState(true);
    const [workPropoganda, setWorkPropoganda] = useState(true);
    const [liberationPropoganda, setLiberationPropoganda] = useState(true);
    const [educationPropoganda, setEducationPropoganda] = useState(true);
    const [childMarriagePropoganda, setChildMarriagePropoganda] = useState(false);

    const [womensWork, setWomensWork] = useState("Midwife");
    const [mensWork, setMensWork] = useState("Factory Worker");
    const [childWork, setChildWork] = useState("Factory Worker");

    useEffect(() => {

        const interval = setInterval(() => {

            setSimulation((prev) => {

                const effectiveBirthRate = childMarriage
                    ? birthRate + 2
                    : birthRate;

                const newPopulation =
                    prev.population +
                    (effectiveBirthRate * prev.population * 0.01) -
                    (deathRate * prev.population * 0.01);

                const labourOutput = childLabour
                    ? newPopulation * 2
                    : newPopulation;

                const prevScore = prev.score;

                const newScore =
                    prev.score + labourOutput * 0.5;

                const scoreGrowth = newScore - prevScore;

                const newTime = prev.time + 1;

                const newPoint = {
                    time: newTime,
                    population: newPopulation,
                    score: newScore,
                    birthRate: effectiveBirthRate
                };

                return {
                    time: newTime,
                    population: newPopulation,
                    score: newScore,
                    chartData: [
                        ...prev.chartData,
                        newPoint
                    ].slice(-50)
                };
            });

        }, 1000);

        return () => clearInterval(interval);

    }, [
        birthRate,
        deathRate,
        childLabour,
        childMarriage
    ]);

    const createTicks = (max) => {

        if (max <= 4) {
            return Array.from(
                {length: Math.floor(max) + 1},
                (_, i) => i
            );
        }

        const step = Math.ceil(max / 4);

        return Array.from(
            {length: 5},
            (_, i) => i * step
        );
    };

    const maxY = useMemo(() => {
        return Math.max(
            ...simulation.chartData.map(d =>
                Math.max(d.population, d.score)
            )
        );
    }, [simulation.chartData]);

    const maxX = useMemo(() => {
        return Math.max(
            ...simulation.chartData.map(d => d.time)
        );
    }, [simulation.chartData]);

    const xTicks = useMemo(() => createTicks(maxX), [maxX]);
    const yTicks = useMemo(() => createTicks(maxY), [maxY]);

    return (
        <main className="min-h-screen">
            <div className="flex flex-row">
                <HomeButtonComp/>
            </div>

            <div>
                Profit/sec = Labour Force × Productivity
            </div>

            <ResponsiveContainer width="50%" aspect={1.618}>
                <LineChart
                    data={simulation.chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 5,
                        left: 0
                    }}
                >
                    <CartesianGrid stroke="#aaa" strokeDasharray="5 5"/>

                    <Line
                        type="monotone"
                        dataKey="population"
                        stroke="purple"
                        strokeWidth={2}
                        name="Labour Force"
                        isAnimationActive={false}
                        dot={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="scoreGrowth"
                        stroke="green"
                        name="Profit Growth Rate"
                        isAnimationActive={false}
                        dot={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="birthRate"
                        stroke="blue"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Birth Rate"
                        isAnimationActive={false}
                        dot={false}
                    />

                    <XAxis dataKey="time" ticks={xTicks}/>
                    <YAxis ticks={yTicks}/>

                    <Tooltip/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>

            <ul>
                <li> propaganda button</li>
                <li> lobby for policy change button</li>
                <li> Women's rights display</li>
            </ul>

            <div>
                Population Statistics:
            </div>

            <div>
                labour force: {Math.round(simulation.population)}
            </div>

            <div>
                birthrate: {birthRate} / second
            </div>

            <div>
                labour force growth: {childLabour ? "boosted" : "standard"}
            </div>

            <div>
                <div>
                    growth rate: {Math.round(growthRate)} / sec
                </div>
            </div>

            <div>
                ${Math.round(simulation.score)}
            </div>

        </main>
    );
}