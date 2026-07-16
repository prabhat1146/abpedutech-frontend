import React from "react";

const EnglishQuestion = ({ formData, setFormData }) => {

    const options = formData.questionLang.eng.options;

    const updateQuestion = (value) => {
        setFormData(prev => ({
            ...prev,
            questionLang: {
                ...prev.questionLang,
                eng: {
                    ...prev.questionLang.eng,
                    question: value
                }
            }
        }));
    };

    const updateExplanation = (value) => {
        setFormData(prev => ({
            ...prev,
            questionLang: {
                ...prev.questionLang,
                eng: {
                    ...prev.questionLang.eng,
                    explanation: value
                }
            }
        }));
    };

    const updateHint = (value) => {
        setFormData(prev => ({
            ...prev,
            questionLang: {
                ...prev.questionLang,
                eng: {
                    ...prev.questionLang.eng,
                    hint: value
                }
            }
        }));
    };

    const updateOption = (index, field, value) => {

        const newOptions = [...options];

        newOptions[index][field] = value;

        setFormData(prev => ({
            ...prev,
            questionLang: {
                ...prev.questionLang,
                eng: {
                    ...prev.questionLang.eng,
                    options: newOptions
                }
            }
        }));
    };

    const addOption = () => {

        setFormData(prev => ({
            ...prev,
            questionLang: {
                ...prev.questionLang,
                eng: {
                    ...prev.questionLang.eng,
                    options: [
                        ...prev.questionLang.eng.options,
                        {
                            optionId: "",
                            text: "",
                            image: ""
                        }
                    ]
                }
            }
        }));

    };

    const removeOption = (index) => {

        if (options.length <= 2) return;

        const newOptions = [...options];

        newOptions.splice(index, 1);

        setFormData(prev => ({
            ...prev,
            questionLang: {
                ...prev.questionLang,
                eng: {
                    ...prev.questionLang.eng,
                    options: newOptions
                }
            }
        }));

    };

   

    return (

        <div className="bg-white rounded-xl shadow border p-6">

            <h2 className="text-xl font-semibold mb-6">
                English Question
            </h2>

            {/* Question */}

            <div className="mb-6">

                <label className="font-medium block mb-2">
                    Question*
                </label>

                <textarea
                    rows={4}
                    className="w-full border rounded-lg p-3"
                    value={formData.questionLang.eng.question}
                    onChange={(e) => updateQuestion(e.target.value)}
                />

            </div>

            {/* Options */}

            <div>

                <div className="flex justify-between mb-4">

                    <h3 className="font-semibold">
                        Options*
                    </h3>

                    <button
                        type="button"
                        onClick={addOption}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Add Option
                    </button>

                </div>

                {options.map((option, index) => {

                    const letter = String.fromCharCode(65 + index);

                    return (

                        <div
                            key={index}
                            className="border rounded-lg p-4 mb-4"
                        >

                            <div className="flex items-center gap-3 mb-3">


                                <span className="font-bold w-6">
                                    {letter}
                                </span>

                                <input
                                    className="flex-1 border rounded-lg p-2"
                                    placeholder={`Option ${letter}`}
                                    value={option.text}
                                    onChange={(e) =>
                                        updateOption(index, "text", e.target.value)
                                    }
                                />

                                <button
                                    type="button"
                                    onClick={() => removeOption(index)}
                                    className="text-red-600"
                                >
                                    Delete
                                </button>

                            </div>

                            <input
                                className="w-full border rounded-lg p-2"
                                placeholder="Image URL"
                                value={option.image}
                                onChange={(e) =>
                                    updateOption(index, "image", e.target.value)
                                }
                            />

                        </div>

                    );

                })}

            </div>

            {/* Explanation */}

            <div className="mt-6">

                <label className="block font-medium mb-2">
                    Explanation
                </label>

                <textarea
                    rows={3}
                    className="w-full border rounded-lg p-3"
                    value={formData.questionLang.eng.explanation}
                    onChange={(e) => updateExplanation(e.target.value)}
                />

            </div>

            {/* Hint */}

            <div className="mt-6">

                <label className="block font-medium mb-2">
                    Hint
                </label>

                <textarea
                    rows={2}
                    className="w-full border rounded-lg p-3"
                    value={formData.questionLang.eng.hint}
                    onChange={(e) => updateHint(e.target.value)}
                />

            </div>

        </div>

    );

};

export default EnglishQuestion;