import React, { useEffect, useState } from "react";

import MockTestFilters from "../components/MockTestFilters";
import MockTestTable from "../components/MockTestTable";
import { useNavigate } from "react-router-dom";


const MockTestList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState({
        search: "",
        exam: "",
        subject: "",
        difficulty: "",
        status: ""
    });


    const [tests] = useState([
        {
            id:1,
            testId:"MT001",
            title:"Computer Science Mock Test 1",
            exam:"BPSC STET",
            subject:"Computer Science",
            totalQuestions:100,
            duration:120,
            totalMarks:100,
            difficulty:"medium",
            status:"published"
        },
        {
            id:2,
            testId:"MT002",
            title:"Operating System Test",
            exam:"BPSC STET",
            subject:"Computer Science",
            totalQuestions:50,
            duration:60,
            totalMarks:50,
            difficulty:"easy",
            status:"draft"
        }
    ]);


    const loadTests = async()=>{

        try{
            setLoading(true);

            // API call

        }
        finally{
            setLoading(false);
        }
    }


    useEffect(()=>{
        loadTests();
    },[])


   const goToCreateTest = () => {
    navigate("/test/mocktest/create-mocktest");
};


    return (

        <div className="min-h-screen bg-slate-100 p-8">


            <div className="mx-auto max-w-[1400px]">


                {/* Header */}

                <div className="
                    mb-8
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                ">


                    <div>

                        <h1 className="
                            text-3xl
                            font-bold
                            text-slate-800
                        ">
                            Mock Tests
                        </h1>


                        <p className="
                            mt-1
                            text-slate-500
                        ">
                            Create, manage and analyze exams
                        </p>


                    </div>



                    <button
                    onClick={()=>goToCreateTest()}
                        className="
                        rounded-xl
                        bg-indigo-600
                        px-6
                        py-3
                        font-semibold
                        text-white
                        shadow
                        hover:bg-indigo-700
                        "
                    >
                        + Create Test
                    </button>


                </div>




                {/* Stats */}


                <div className="
                    mb-8
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-4
                ">


                    <StatCard
                        title="Total Tests"
                        value="120"
                    />


                    <StatCard
                        title="Published"
                        value="85"
                    />


                    <StatCard
                        title="Draft"
                        value="35"
                    />


                    <StatCard
                        title="Attempts"
                        value="12.5K"
                    />


                </div>




                {/* Filters */}


                <div className="
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                ">


                    <MockTestFilters

                        filters={filters}

                        onChange={setFilters}

                        onSearch={loadTests}

                        onReset={()=>
                            setFilters({
                                search:"",
                                exam:"",
                                subject:"",
                                difficulty:"",
                                status:""
                            })
                        }

                    />


                </div>




                {/* Table */}


                <div className="
                    mt-8
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-sm
                ">


                    {
                    loading

                    ?

                    <div className="
                        py-24
                        text-center
                        text-slate-500
                    ">
                        Loading...
                    </div>


                    :

                    <MockTestTable

                        tests={tests}

                        onView={(x)=>console.log(x)}

                        onEdit={(x)=>console.log(x)}

                        onDelete={(x)=>console.log(x)}

                        onStart={(x)=>console.log(x)}

                    />

                    }


                </div>


            </div>


        </div>

    );
};




const StatCard = ({title,value})=>{

    return (

        <div className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
        ">

            <p className="
                text-sm
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


        </div>

    )

}



export default MockTestList;