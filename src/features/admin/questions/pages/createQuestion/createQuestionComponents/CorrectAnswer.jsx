import React from "react";

const CorrectAnswer = ({ formData, setFormData }) => {

    const options = formData.questionLang.eng.options;

    const handleChange = (answer) => {

        if (formData.questionType === "mcq") {

            setFormData(prev => ({
                ...prev,
                correctAnswers: [answer]
            }));

        } else {

            setFormData(prev => {

                const answers = prev.correctAnswers.includes(answer)
                    ? prev.correctAnswers.filter(item => item !== answer)
                    : [...prev.correctAnswers, answer];

                return {
                    ...prev,
                    correctAnswers: answers
                };

            });

        }

    };

    return (

        <div className="bg-white rounded-xl shadow border border-gray-200 p-6">

            <h2 className="text-xl font-semibold mb-6">
                Correct Answer*
            </h2>

            <div className="space-y-4">

                {options.map((option, index) => {

                    const answer = String(index);
                    const letter = String.fromCharCode(65 + index);

                    return (

                        <label
                            key={index}
                            className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                        >

                            <input
                                type={
                                    formData.questionType === "mcq"
                                        ? "radio"
                                        : "checkbox"
                                }
                                checked={formData.correctAnswers.includes(answer)}
                                onChange={() => handleChange(answer)}
                            />

                            <div className="font-semibold w-8">
                                {letter}.
                            </div>

                            <div className="flex-1">

                                {option.text || (
                                    <span className="text-gray-400">
                                        Empty Option
                                    </span>
                                )}

                            </div>

                        </label>

                    );

                })}

            </div>

            {formData.questionType === "mcq" && (
                <p className="text-sm text-gray-500 mt-5">
                    Select one correct option.
                </p>
            )}

            {formData.questionType === "msq" && (
                <p className="text-sm text-gray-500 mt-5">
                    Multiple correct answers are allowed.
                </p>
            )}

        </div>

    );

};

export default CorrectAnswer;