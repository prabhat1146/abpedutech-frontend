import React, { useEffect, useState } from "react";

import QuestionFilters from "../components/QuestionFilters";
import QuestionTable from "../components/QuestionTable";


const QuestionList = () => {


    const [questions,setQuestions] = useState([]);

    const [loading,setLoading] = useState(false);



    const [filters,setFilters] = useState({
        search:"",
        subject:"",
        difficulty:"",
        status:"",
        type:""
    });




    const loadQuestions = async()=>{

        try{

            setLoading(true);


            // API CALL

            // const res =
            // await API.questions.getAll(filters)

            // setQuestions(res.data.data)



        }finally{

            setLoading(false);

        }

    };




    useEffect(()=>{

        loadQuestions();

    },[]);




    const deleteQuestion=(id)=>{

        if(confirm("Delete Question?")){

            console.log(id);

            loadQuestions();

        }

    };




    return (

        <div className="
            min-h-screen
            bg-slate-100
            p-6
        ">


        <div className="max-w-7xl mx-auto">



        {/* Header */}


        <div className="
            mb-6
            flex
            justify-between
            items-center
        ">


            <div>

            <h1 className="
                text-3xl
                font-bold
            ">
                Questions
            </h1>


            <p className="text-slate-500">
                Manage question bank
            </p>

            </div>



            <button
            className="
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            text-white
            "
            >
                + Add Question
            </button>



        </div>





        <QuestionFilters
            filters={filters}
            setFilters={setFilters}
        />





        <div className="
            mt-6
            rounded-2xl
            bg-white
            shadow
        ">


        {
            loading ?

            (
                <div className="p-10 text-center">
                    Loading...
                </div>
            )

            :

            <QuestionTable
                questions={questions}
                onDelete={deleteQuestion}
            />

        }



        </div>



        </div>


        </div>

    );

};


export default QuestionList;