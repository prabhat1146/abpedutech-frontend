import React from "react";

const MockTestTable = ({
    tests = [],
    onView,
    onEdit,
    onDelete,
    onStart
}) => {


return (

<div className="overflow-hidden rounded-2xl border border-slate-200">


<table className="w-full">


<thead className="bg-slate-50">


<tr className="text-left text-sm text-slate-500">


<th className="px-6 py-5 font-medium">
Title
</th>


<th className="px-6 py-5 font-medium">
Exam
</th>


<th className="px-6 py-5 font-medium">
Subject
</th>


<th className="px-6 py-5 font-medium">
Questions
</th>


<th className="px-6 py-5 font-medium">
Duration
</th>


<th className="px-6 py-5 font-medium">
Marks
</th>


<th className="px-6 py-5 font-medium">
Level
</th>


<th className="px-6 py-5 font-medium">
Status
</th>


<th className="px-6 py-5 text-right">
Action
</th>


</tr>


</thead>



<tbody className="divide-y bg-white">


{
tests.map((test)=>(


<tr
key={test.id}
className="hover:bg-slate-50 transition"
>



{/* Title */}

<td className="px-6 py-5">


<div className="flex items-center gap-3">


<div className="
h-11
w-11
rounded-xl
bg-indigo-100
flex
items-center
justify-center
font-bold
text-indigo-600
">

{test.testId.slice(-2)}

</div>



<div>

<p className="
font-semibold
text-slate-800
">

{test.title}

</p>


<p className="
text-xs
text-slate-400
">

{test.testId}

</p>


</div>


</div>


</td>





<td className="px-6 py-5">

<span className="
rounded-full
bg-blue-100
px-3
py-1
text-xs
font-medium
text-blue-700
">

{test.exam}

</span>

</td>





<td className="px-6 py-5 text-slate-600">

{test.subject}

</td>




<td className="px-6 py-5">

<div className="font-semibold">

{test.totalQuestions}

</div>

<span className="text-xs text-slate-400">
Questions
</span>

</td>





<td className="px-6 py-5 text-slate-600">

{test.duration} min

</td>





<td className="px-6 py-5 text-slate-600">

{test.totalMarks}

</td>





<td className="px-6 py-5">


<span
className={`
rounded-full
px-3
py-1
text-xs
font-semibold

${
test.difficulty==="easy"

?"bg-green-100 text-green-700"

:

test.difficulty==="medium"

?"bg-yellow-100 text-yellow-700"

:

"bg-red-100 text-red-700"
}

`}
>

{test.difficulty}

</span>


</td>






<td className="px-6 py-5">


<span
className={`
rounded-full
px-3
py-1
text-xs
font-semibold

${
test.status==="published"

?"bg-emerald-100 text-emerald-700"

:

"bg-gray-100 text-gray-600"
}

`}
>


{test.status}


</span>


</td>







<td className="px-6 py-5">


<div className="flex justify-end gap-2">


<button
onClick={()=>onView(test)}
className="
rounded-lg
bg-slate-100
px-3
py-2
text-xs
font-medium
hover:bg-slate-200
">

View

</button>



<button
onClick={()=>onStart(test)}
className="
rounded-lg
bg-indigo-100
px-3
py-2
text-xs
font-medium
text-indigo-700
hover:bg-indigo-200
">

Start

</button>




<button
onClick={()=>onEdit(test)}
className="
rounded-lg
bg-amber-100
px-3
py-2
text-xs
font-medium
text-amber-700
hover:bg-amber-200
">

Edit

</button>




<button
onClick={()=>onDelete(test)}
className="
rounded-lg
bg-red-100
px-3
py-2
text-xs
font-medium
text-red-700
hover:bg-red-200
">

Delete

</button>



</div>


</td>





</tr>


))
}



</tbody>



</table>


</div>

)

}


export default MockTestTable;