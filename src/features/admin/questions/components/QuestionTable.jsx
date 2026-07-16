import React from "react";


const QuestionTable = ({
    questions,
    onDelete
}) => {


return (

<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-50">


<tr>

<th>Question</th>
<th>Subject</th>
<th>Difficulty</th>
<th>Marks</th>
<th>Status</th>
<th>Action</th>

</tr>


</thead>



<tbody>


{
questions.map((q)=>(


<tr
key={q._id}
className="border-t"
>


<td className="p-4 max-w-md">

{q.question.eng.text}

</td>



<td>
{q.subject}
</td>



<td>

<span className="
rounded-full
bg-yellow-100
px-3
py-1
text-sm
">

{q.difficulty}

</span>

</td>




<td>
+{q.marks}
</td>




<td>

{q.status}

</td>



<td>


<div className="flex gap-2">


<button
className="
rounded-lg
bg-blue-100
px-3
py-1
"
>
View
</button>


<button
className="
rounded-lg
bg-green-100
px-3
py-1
"
>
Edit
</button>


<button
onClick={()=>onDelete(q._id)}
className="
rounded-lg
bg-red-100
px-3
py-1
"
>
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


export default QuestionTable;