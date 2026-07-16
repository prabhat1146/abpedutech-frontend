import React from "react";


const RecentTests=()=>{


const tests=[
{
title:"BPSC Computer Science",
attempts:1200,
status:"Live"
},
{
title:"Operating System Mock",
attempts:650,
status:"Draft"
},
{
title:"DBMS PYQ Test",
attempts:900,
status:"Live"
}
];


return (

<div className="space-y-4">


{
tests.map((test)=>(

<div
key={test.title}
className="
flex
justify-between
rounded-xl
border
p-4
"
>


<div>

<h3 className="font-semibold">

{test.title}

</h3>


<p className="text-sm text-slate-500">

{test.attempts} Attempts

</p>


</div>



<span className="
rounded-full
bg-green-100
px-3
py-1
text-xs
text-green-700
">

{test.status}

</span>


</div>

))

}


</div>

)

}


export default RecentTests;