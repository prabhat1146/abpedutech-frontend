import React from "react";

const sourceTypes = ["original", "pyq", "imported", "ai"];

const Source = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      source: {
        ...prev.source,
        [name]:
          ["year", "shift", "paper", "questionNumber"].includes(name)
            ? value === ""
              ? ""
              : Number(value)
            : value,
      },
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Source Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Source Type */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Source Type*
          </label>

          <select
            name="type"
            value={formData.source.type}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            {sourceTypes.map((item) => (
              <option key={item} value={item}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Exam ID */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Exam ID*
          </label>

          <input
            type="text"
            name="examId"
            value={formData.source.examId}
            onChange={handleChange}
            placeholder="Exam ID"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Year */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Year*
          </label>

          <input
            type="number"
            name="year"
            value={formData.source.year}
            onChange={handleChange}
            placeholder="2025"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Shift */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Shift*
          </label>

          <input
            type="number"
            name="shift"
            value={formData.source.shift}
            onChange={handleChange}
            placeholder="1"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Paper */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Paper*
          </label>

          <input
            type="number"
            name="paper"
            value={formData.source.paper}
            onChange={handleChange}
            placeholder="1"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Question Number */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Question Number*
          </label>

          <input
            type="number"
            name="questionNumber"
            value={formData.source.questionNumber}
            onChange={handleChange}
            placeholder="25"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

      </div>

    </div>
  );
};

export default Source;