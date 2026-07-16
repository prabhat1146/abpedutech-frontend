import React from "react";

const HindiQuestion = ({ formData, setFormData }) => {
  const options = formData.questionLang.hindi.options;

  const updateQuestion = (value) => {
    setFormData((prev) => ({
      ...prev,
      questionLang: {
        ...prev.questionLang,
        hindi: {
          ...prev.questionLang.hindi,
          question: value,
        },
      },
    }));
  };

  const updateExplanation = (value) => {
    setFormData((prev) => ({
      ...prev,
      questionLang: {
        ...prev.questionLang,
        hindi: {
          ...prev.questionLang.hindi,
          explanation: value,
        },
      },
    }));
  };

  const updateHint = (value) => {
    setFormData((prev) => ({
      ...prev,
      questionLang: {
        ...prev.questionLang,
        hindi: {
          ...prev.questionLang.hindi,
          hint: value,
        },
      },
    }));
  };

  const updateOption = (index, field, value) => {
    const newOptions = [...options];
    newOptions[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      questionLang: {
        ...prev.questionLang,
        hindi: {
          ...prev.questionLang.hindi,
          options: newOptions,
        },
      },
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-semibold mb-6">
        Hindi Question
      </h2>

      {/* Question */}

      <div className="mb-6">

        <label className="font-medium block mb-2">
          Question*
        </label>

        <textarea
          rows={4}
          className="w-full border rounded-lg p-3"
          value={formData.questionLang.hindi.question}
          onChange={(e) => updateQuestion(e.target.value)}
          placeholder="हिंदी प्रश्न लिखें..."
        />

      </div>

      {/* Options */}

      <div>

        <h3 className="font-semibold mb-4">
          Options*
        </h3>

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
          value={formData.questionLang.hindi.explanation}
          onChange={(e) => updateExplanation(e.target.value)}
          placeholder="Explanation..."
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
          value={formData.questionLang.hindi.hint}
          onChange={(e) => updateHint(e.target.value)}
          placeholder="Hint..."
        />

      </div>

    </div>
  );
};

export default HindiQuestion;