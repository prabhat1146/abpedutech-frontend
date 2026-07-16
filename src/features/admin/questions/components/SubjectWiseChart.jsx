import React from "react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell
} from "recharts";

const data = [

    {
        subject: "Computer Science",
        questions: 2350,
        color: "#4f46e5"
    },

    {
        subject: "Mathematics",
        questions: 1820,
        color: "#22c55e"
    },

    {
        subject: "Reasoning",
        questions: 1350,
        color: "#f59e0b"
    },

    {
        subject: "English",
        questions: 920,
        color: "#ef4444"
    },

    {
        subject: "General Knowledge",
        questions: 680,
        color: "#06b6d4"
    }

];

const SubjectWiseChart = () => {

    const totalQuestions = data.reduce(
        (sum, item) => sum + item.questions,
        0
    );

    return (

        <div className="rounded-2xl bg-white p-6 shadow-sm">

            {/* Header */}

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold text-slate-800">
                        Subject Wise Questions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Total Questions : {totalQuestions.toLocaleString()}
                    </p>

                </div>

            </div>

            {/* Chart */}

            <div className="h-80">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 10,
                            bottom: 5
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="subject"
                            tick={{
                                fontSize: 12
                            }}
                        />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="questions"
                            radius={[8, 8, 0, 0]}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={entry.color}
                                />

                            ))}

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

            {/* Summary */}

            <div className="mt-6 space-y-3">

                {data.map((item) => (

                    <div
                        key={item.subject}
                        className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="h-4 w-4 rounded-full"
                                style={{
                                    backgroundColor: item.color
                                }}
                            />

                            <span className="font-medium text-slate-700">
                                {item.subject}
                            </span>

                        </div>

                        <span className="font-bold text-slate-800">
                            {item.questions.toLocaleString()}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default SubjectWiseChart;