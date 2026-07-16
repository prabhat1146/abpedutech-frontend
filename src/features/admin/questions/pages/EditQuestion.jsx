import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import QuestionForm from "../components/QuestionForm";

const EditQuestion = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(null);


    useEffect(() => {

        loadQuestion();

    }, []);


    const loadQuestion = async () => {

        try {

            setLoading(true);

            // const res = await API.questions.getById(id);

            // setForm(res.data.data);

            // Dummy Data

            setForm({

                questionId: "QST-CS-001",

                type: "mcq",

                subject: "Computer Science",

                chapter: "Operating System",

                topic: "Deadlock",

                difficulty: "medium",

                marks: 2,

                negativeMarks: 0.5,

                status: "published",

                source: "PYQ",

                tags: ["os"],

                question: {

                    eng: {
                        question: "What is Deadlock?",
                        options: []
                    },

                    hindi: {
                        question: "डेडलॉक क्या है?",
                        options: []
                    }

                },

                correctAnswer: "",

                explanation: {

                    eng: "",

                    hindi: ""

                }

            });

        } finally {

            setLoading(false);

        }

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            console.log(form);

            // await API.questions.update(id,form);

            navigate("/admin/questions");

        } finally {

            setLoading(false);

        }

    };


    if (loading || !form) {

        return (

            <div className="p-10 text-center">

                Loading...

            </div>

        );

    }


    return (

        <div className="min-h-screen bg-slate-100 p-6">

            <div className="mx-auto max-w-7xl">

                <h1 className="mb-2 text-3xl font-bold">
                    Edit Question
                </h1>

                <p className="mb-6 text-slate-500">
                    Update existing question.
                </p>

                <QuestionForm
                    form={form}
                    setForm={setForm}
                    loading={loading}
                    onSubmit={handleSubmit}
                    isEdit
                />

            </div>

        </div>

    );

};

export default EditQuestion;