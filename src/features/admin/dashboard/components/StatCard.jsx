import React from "react";

const StatCard = ({
    title,
    value,
    subtitle,
    trend,
    icon,
    onDetails
}) => {

    return (

        <div
            className="
            flex
            h-full
            min-h-[240px]
            flex-col
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-lg
            "
        >


            {/* Top Section */}

            <div className="flex items-start justify-between">


                <div>

                    <p className="
                    text-sm
                    font-medium
                    text-slate-500
                    ">
                        {title}
                    </p>



                    <h2 className="
                    mt-3
                    text-3xl
                    font-bold
                    text-slate-800
                    ">
                        {value}
                    </h2>




                    {subtitle && (

                        <p className="
                        mt-2
                        text-sm
                        text-slate-500
                        ">
                            {subtitle}
                        </p>

                    )}





                    {trend && (

                        <p className="
                        mt-2
                        text-sm
                        font-semibold
                        text-green-600
                        ">
                            ↑ {trend}
                        </p>

                    )}



                </div>





                <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-indigo-100
                    text-2xl
                    "
                >
                    {icon}

                </div>


            </div>






            {/* Button fixed bottom */}

            <div className="mt-auto pt-8">


                <button
                    onClick={onDetails}
                    className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-3
                    text-sm
                    font-semibold
                    text-slate-700
                    transition
                    hover:border-indigo-300
                    hover:bg-indigo-50
                    hover:text-indigo-600
                    "
                >

                    View Details

                    <span className="
                    transition
                    group-hover:translate-x-1
                    ">
                        →
                    </span>


                </button>


            </div>


        </div>

    );

};


export default StatCard;