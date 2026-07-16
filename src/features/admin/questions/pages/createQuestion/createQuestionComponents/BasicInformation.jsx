import React from "react";

const questionTypes = [
  {
    value: "mcq",
    label: "Multiple Choice Question (MCQ)",
  },
  {
    value: "msq",
    label: "Multiple Select Question (MSQ)",
  },
  {
    value: "numerical",
    label: "Numerical Answer Type (NAT)",
  },
  {
    value: "subjective",
    label: "Subjective / Descriptive",
  },
  {
    value: "true_false",
    label: "True / False",
  },
  {
    value: "assertion_reason",
    label: "Assertion and Reason",
  },
];
const difficulties = ["easy", "medium", "hard"];

const statusList = ["draft", "published", "archived"];

const visibilityList = ["public", "private"];

const BasicInformation = ({ formData, setFormData, qid }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2  className="text-xl font-semibold mb-6">Basic Information <span className="text-sm">(Question Id-{qid})</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Question Type */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Question Type*
          </label>

          <select
            name="questionType"
            value={formData.questionType}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {questionTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-sm font-medium mb-2">Difficulty*</label>

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Created By */}
        <div>
          <label className="block text-sm font-medium mb-2">Created By*</label>

          <input
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            placeholder="Enter User ID"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
