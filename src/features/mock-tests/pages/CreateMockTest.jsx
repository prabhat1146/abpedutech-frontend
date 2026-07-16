import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMockTest = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        exam: "",
        subject: "",
        description: "",
        totalQuestions: "",
        duration: "",
        totalMarks: "",
        difficulty: "medium",
        language: "english",
        status: "draft",
        negativeMarking: false,
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const submitForm = (e) => {
        e.preventDefault();

        console.log(form);
    };


    const goBack = () => {
        navigate(-1);
    };


    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <div className="mx-auto max-w-5xl">


                {/* Header */}

                <div className="mb-6 flex justify-between items-center">

                    <div>

                        <h1 className="text-3xl font-bold text-slate-800">
                            Create Mock Test
                        </h1>

                        <p className="mt-1 text-slate-500">
                            Create exam pattern based practice test
                        </p>

                    </div>


                    <button
                        onClick={goBack}
                        className="rounded-xl border px-5 py-2 hover:bg-white"
                    >
                        Back
                    </button>

                </div>



                <form
                    onSubmit={submitForm}
                    className="space-y-6"
                >


                    {/* Basic Information */}

                    <Section title="Basic Information">

                        <div className="grid gap-5 md:grid-cols-2">

                            <Input
                                label="Test Title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                            />


                            <Input
                                label="Exam Name"
                                name="exam"
                                value={form.exam}
                                onChange={handleChange}
                            />


                            <Input
                                label="Subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                            />


                            <Input
                                label="Total Questions"
                                name="totalQuestions"
                                type="number"
                                value={form.totalQuestions}
                                onChange={handleChange}
                            />


                            <Input
                                label="Duration (Minutes)"
                                name="duration"
                                type="number"
                                value={form.duration}
                                onChange={handleChange}
                            />


                            <Input
                                label="Total Marks"
                                name="totalMarks"
                                type="number"
                                value={form.totalMarks}
                                onChange={handleChange}
                            />

                        </div>



                        <textarea
                            name="description"
                            placeholder="Description"
                            value={form.description}
                            onChange={handleChange}
                            className="
                            mt-5
                            w-full
                            rounded-xl
                            border
                            p-3
                            outline-none
                            focus:ring-2
                            focus:ring-indigo-300
                            "
                        />


                    </Section>




                    {/* Settings */}


                    <Section title="Test Settings">


                        <div className="grid gap-5 md:grid-cols-3">


                            <Select
                                label="Difficulty"
                                name="difficulty"
                                value={form.difficulty}
                                onChange={handleChange}
                                options={[
                                    "easy",
                                    "medium",
                                    "hard"
                                ]}
                            />


                            <Select
                                label="Language"
                                name="language"
                                value={form.language}
                                onChange={handleChange}
                                options={[
                                    "english",
                                    "hindi",
                                    "both"
                                ]}
                            />


                            <Select
                                label="Status"
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                options={[
                                    "draft",
                                    "published"
                                ]}
                            />

                        </div>



                        <label className="mt-5 flex gap-3 items-center">

                            <input
                                type="checkbox"
                                name="negativeMarking"
                                checked={form.negativeMarking}
                                onChange={handleChange}
                            />

                            Enable Negative Marking

                        </label>


                    </Section>





                    {/* Question Selection */}


                    <Section title="Question Selection">


                        <div className="grid gap-4 md:grid-cols-3">


                            {
                                [
                                    "Select Manually",
                                    "Random Questions",
                                    "Import PYQ"
                                ].map((item)=>(
                                    
                                    <button
                                        key={item}
                                        type="button"
                                        className="
                                        rounded-xl
                                        border
                                        p-5
                                        hover:bg-slate-50
                                        "
                                    >
                                        {item}
                                    </button>

                                ))
                            }


                        </div>


                    </Section>





                    {/* Actions */}


<div className="mt-8 flex items-center justify-between rounded-2xl border bg-white p-5 shadow-sm">

    <div>
        <p className="font-semibold text-slate-800">
            Ready to create this test?
        </p>

        <p className="text-sm text-slate-500">
            You can edit questions and settings later.
        </p>
    </div>


    <div className="flex gap-3">


        <button
            type="button"
            onClick={goBack}
            className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-5
            py-3
            font-medium
            text-slate-700
            transition
            hover:bg-slate-100
            "
        >

            <span className="transition group-hover:-translate-x-1">
                ←
            </span>

            Back

        </button>



        <button
            type="button"
            className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-5
            py-3
            font-medium
            text-red-600
            transition
            hover:bg-red-100
            "
        >
            Cancel
        </button>




        <button
            type="submit"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-7
            py-3
            font-semibold
            text-white
            shadow-lg
            shadow-indigo-200
            transition
            hover:-translate-y-0.5
            hover:bg-indigo-700
            "
        >

            <span>
                ✓
            </span>

            Create Test

        </button>


    </div>

</div>


                </form>


            </div>

        </div>
    );
};





const Section = ({ title, children }) => (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-lg font-semibold text-slate-800">
            {title}
        </h2>

        {children}

    </div>
);




const Input = ({ label, ...props }) => (

    <label>

        <span className="text-sm text-slate-600">
            {label}
        </span>


        <input
            {...props}
            className="
            mt-2
            w-full
            rounded-xl
            border
            p-3
            outline-none
            focus:ring-2
            focus:ring-indigo-300
            "
        />

    </label>

);





const Select = ({ label, options, ...props }) => (

    <label>

        <span className="text-sm text-slate-600">
            {label}
        </span>


        <select
            {...props}
            className="
            mt-2
            w-full
            rounded-xl
            border
            p-3
            "
        >

            {
                options.map((item)=>(
                    <option key={item}>
                        {item}
                    </option>
                ))
            }

        </select>


    </label>

);


export default CreateMockTest;