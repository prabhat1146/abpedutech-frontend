import React from "react";


const RevenueCard = () => {


    return (

        <div className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
        ">


            <div className="
                flex
                items-start
                justify-between
            ">


                <div>

                    <p className="
                        text-sm
                        text-slate-500
                    ">

                        Total Revenue

                    </p>


                    <h2 className="
                        mt-2
                        text-3xl
                        font-bold
                        text-slate-800
                    ">

                        ₹12,45,800

                    </h2>


                    <p className="
                        mt-2
                        text-sm
                        text-green-600
                    ">

                        ↑ 18.5% from last month

                    </p>


                </div>



                <div className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-100
                    text-2xl
                ">

                    💰

                </div>


            </div>





            {/* Fake Chart */}

            <div className="
                mt-6
                flex
                h-28
                items-end
                gap-3
            ">


                {
                    [40,70,50,90,65,100,80].map((height,i)=>(

                        <div
                            key={i}
                            className="
                                flex-1
                                rounded-t-lg
                                bg-green-400
                            "
                            style={{
                                height:`${height}%`
                            }}
                        />


                    ))
                }


            </div>



            <div className="
                mt-5
                grid
                grid-cols-3
                gap-3
            ">


                <RevenueItem
                    title="Today"
                    value="₹24K"
                />


                <RevenueItem
                    title="Month"
                    value="₹3.2L"
                />


                <RevenueItem
                    title="Year"
                    value="₹12L"
                />


            </div>


        </div>

    );

};




const RevenueItem=({
    title,
    value
})=>(

<div className="
rounded-xl
bg-slate-50
p-3
">

<p className="
text-xs
text-slate-500
">

{title}

</p>


<p className="
font-bold
text-slate-800
">

{value}

</p>


</div>

)



export default RevenueCard;