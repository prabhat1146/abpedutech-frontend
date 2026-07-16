import React, { useState } from "react";

const MockTestForm = ({
    initialValues = {},
    onSubmit,
    loading = false
}) => {

    const [form, setForm] = useState({
        testId: initialValues.testId || "",
        title: initialValues.title || "",
        exam: initialValues.exam || "",
        subject: initialValues.subject || "",
        description: initialValues.description || "",
        totalQuestions: initialValues.totalQuestions || "",
        totalMarks: initialValues.totalMarks || "",
        duration: initialValues.duration || "",
        difficulty: initialValues.difficulty || "easy",
        language: initialValues.language || "English",
        visibility: initialValues.visibility || "public",
        status: initialValues.status || "draft"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onSubmit) {
            onSubmit(form);
        }
    };

    return (
        <div className="card shadow-sm border-0">

            <div className="card-header bg-white">
                <h5 className="mb-0">
                    {initialValues.testId ? "Edit Mock Test" : "Create Mock Test"}
                </h5>
            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Test ID
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="testId"
                                value={form.testId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Exam
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="exam"
                                value={form.exam}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Subject
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-12 mb-3">
                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                rows="3"
                                className="form-control"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">
                                Questions
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="totalQuestions"
                                value={form.totalQuestions}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">
                                Marks
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="totalMarks"
                                value={form.totalMarks}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">
                                Duration (Minutes)
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="duration"
                                value={form.duration}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Difficulty
                            </label>

                            <select
                                className="form-select"
                                name="difficulty"
                                value={form.difficulty}
                                onChange={handleChange}
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Language
                            </label>

                            <select
                                className="form-select"
                                name="language"
                                value={form.language}
                                onChange={handleChange}
                            >
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Both</option>
                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Visibility
                            </label>

                            <select
                                className="form-select"
                                name="visibility"
                                value={form.visibility}
                                onChange={handleChange}
                            >
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">
                                Status
                            </label>

                            <select
                                className="form-select"
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                            </select>

                        </div>

                    </div>

                    <div className="d-flex justify-content-end gap-2">

                        <button
                            type="reset"
                            className="btn btn-secondary"
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading
                                ? "Saving..."
                                : initialValues.testId
                                ? "Update Mock Test"
                                : "Create Mock Test"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default MockTestForm;