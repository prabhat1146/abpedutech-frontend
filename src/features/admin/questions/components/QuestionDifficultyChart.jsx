import React from "react";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Easy",
        value: 3200,
        color: "#22c55e"
    },
    {
        name: "Medium",
        value: 4100,
        color: "#f59e0b"
    },
    {
        name: "Hard",
        value: 1220,
        color: "#ef4444"
    }
];

const QuestionDifficultyChart = () => {

    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (

        <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold text-slate-800">
                        Difficulty Distribution
                    </h2>

                    <p className="text-sm text-slate-500">
                        Total Questions : {total.toLocaleString()}
                    </p>

                </div>

            </div>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={65}
                            outerRadius={100}
                            paddingAngle={4}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={entry.color}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">

                {data.map((item) => (

                    <div
                        key={item.name}
                        className="rounded-xl bg-slate-50 p-4 text-center"
                    >

                        <div
                            className="mx-auto mb-2 h-3 w-3 rounded-full"
                            style={{
                                backgroundColor: item.color
                            }}
                        />

                        <p className="text-sm text-slate-500">
                            {item.name}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-slate-800">
                            {item.value.toLocaleString()}
                        </h3>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default QuestionDifficultyChart;