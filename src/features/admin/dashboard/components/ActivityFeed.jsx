import React from "react";


const ActivityFeed = () => {


    const activities = [
        {
            title: "New student registered",
            desc: "Rahul joined BPSC Computer Science batch",
            time: "2 min ago",
            icon: "👨‍🎓"
        },
        {
            title: "New test created",
            desc: "BPSC STET Mock Test 2026 published",
            time: "15 min ago",
            icon: "📝"
        },
        {
            title: "Teacher added",
            desc: "Amit Kumar joined as teacher",
            time: "1 hour ago",
            icon: "👨‍🏫"
        },
        {
            title: "Payment received",
            desc: "₹999 course payment received",
            time: "3 hours ago",
            icon: "💰"
        },
        {
            title: "Course updated",
            desc: "Operating System course updated",
            time: "Yesterday",
            icon: "📚"
        }
    ];


    return (

        <div className="space-y-5">


            {
                activities.map((item,index)=>(


                    <div
                        key={index}
                        className="
                        flex
                        gap-4
                        rounded-xl
                        border
                        p-4
                        hover:bg-slate-50
                        transition
                        "
                    >


                        <div className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-indigo-100
                            text-xl
                        ">

                            {item.icon}

                        </div>



                        <div className="flex-1">


                            <div className="
                                flex
                                justify-between
                            ">


                                <h3 className="
                                    font-semibold
                                    text-slate-800
                                ">

                                    {item.title}

                                </h3>



                                <span className="
                                    text-xs
                                    text-slate-400
                                ">

                                    {item.time}

                                </span>


                            </div>


                            <p className="
                                mt-1
                                text-sm
                                text-slate-500
                            ">

                                {item.desc}

                            </p>


                        </div>


                    </div>


                ))
            }


        </div>

    );

};


export default ActivityFeed;