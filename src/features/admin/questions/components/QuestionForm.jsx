import React from "react";

const QuestionForm = ({
    form,
    setForm,
    onSubmit,
    loading = false,
    isEdit = false,
}) => {

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleOptionChange = (index, value) => {

        const options = [...form.options];

        options[index] = value;

        setForm((prev) => ({
            ...prev,
            options,
        }));

    };

    return (

        <form
            onSubmit={onSubmit}
            className="space-y-6"
        >

            {/* Basic Information */}

            <div className="rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold">
                    Basic Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">

                    <Input
                        label="Question ID"
                        name="questionId"
                        value={form.questionId}
                        onChange={handleChange}
                    />

                    <Input
                        label="Exam"
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
                        label="Chapter"
                        name="chapter"
                        value={form.chapter}
                        onChange={handleChange}
                    />

                    <Input
                        label="Topic"
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                    />

                    <Select
                        label="Difficulty"
                        name="difficulty"
                        value={form.difficulty}
                        onChange={handleChange}
                        options={["Easy", "Medium", "Hard"]}
                    />

                </div>

            </div>

            {/* Question */}

            <div className="rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold">
                    Question
                </h2>

                <Textarea
                    label="Question (English)"
                    name="questionEnglish"
                    value={form.questionEnglish}
                    onChange={handleChange}
                />

                <div className="mt-5">

                    <Textarea
                        label="Question (Hindi)"
                        name="questionHindi"
                        value={form.questionHindi}
                        onChange={handleChange}
                    />

                </div>

            </div>

            {/* Options */}

            <div className="rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold">
                    Options
                </h2>

                {[0, 1, 2, 3].map((index) => (

                    <div
                        key={index}
                        className="mb-4"
                    >

                        <label className="mb-2 block text-sm font-medium">

                            Option {String.fromCharCode(65 + index)}

                        </label>

                        <input
                            value={form.options[index]}
                            onChange={(e) =>
                                handleOptionChange(index, e.target.value)
                            }
                            className="w-full rounded-xl border p-3 focus:border-indigo-500 focus:outline-none"
                        />

                    </div>

                ))}

            </div>

            {/* Answer */}

            <div className="rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold">
                    Correct Answer
                </h2>

                <Select
                    label="Answer"
                    name="correctAnswer"
                    value={form.correctAnswer}
                    onChange={handleChange}
                    options={["A", "B", "C", "D"]}
                />

            </div>

            {/* Explanation */}

            <div className="rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold">
                    Explanation
                </h2>

                <Textarea
                    label="Explanation"
                    name="explanation"
                    value={form.explanation}
                    onChange={handleChange}
                />

            </div>

            {/* Metadata */}

            <div className="rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold">
                    Metadata
                </h2>

                <div className="grid gap-5 md:grid-cols-3">

                    <Input
                        label="Marks"
                        type="number"
                        name="marks"
                        value={form.marks}
                        onChange={handleChange}
                    />

                    <Input
                        label="Negative Marks"
                        type="number"
                        name="negativeMarks"
                        value={form.negativeMarks}
                        onChange={handleChange}
                    />

                    <Select
                        label="Status"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        options={[
                            "Draft",
                            "Published",
                            "Archived",
                        ]}
                    />

                </div>

            </div>

            <div className="flex justify-end">

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    {loading
                        ? "Saving..."
                        : isEdit
                        ? "Update Question"
                        : "Create Question"}
                </button>

            </div>

        </form>

    );

};

const Input = ({ label, ...props }) => (

    <div>

        <label className="mb-2 block text-sm font-medium">
            {label}
        </label>

        <input
            {...props}
            className="w-full rounded-xl border p-3 focus:border-indigo-500 focus:outline-none"
        />

    </div>

);

const Textarea = ({ label, ...props }) => (

    <div>

        <label className="mb-2 block text-sm font-medium">
            {label}
        </label>

        <textarea
            {...props}
            rows={4}
            className="w-full rounded-xl border p-3 focus:border-indigo-500 focus:outline-none"
        />

    </div>

);

const Select = ({ label, options, ...props }) => (

    <div>

        <label className="mb-2 block text-sm font-medium">
            {label}
        </label>

        <select
            {...props}
            className="w-full rounded-xl border p-3 focus:border-indigo-500 focus:outline-none"
        >

            {options.map((option) => (

                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>

            ))}

        </select>

    </div>

);

export default QuestionForm;