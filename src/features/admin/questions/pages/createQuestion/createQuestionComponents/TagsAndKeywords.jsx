import React, { useState } from "react";

const TagsAndKeywords = ({ formData, setFormData }) => {
  const [tagInput, setTagInput] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  const addItem = (field, value, setValue) => {
    const item = value.trim();

    if (!item) return;

    if (formData[field].includes(item)) {
      setValue("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], item],
    }));

    setValue("");
  };

  const removeItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleKeyDown = (e, field, value, setValue) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addItem(field, value, setValue);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Tags & Keywords
      </h2>

      {/* TAGS */}

      <div className="mb-8">

        <label className="block text-sm font-medium mb-2">
          Tags
        </label>

        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) =>
            handleKeyDown(e, "tags", tagInput, setTagInput)
          }
          placeholder="Type tag and press Enter"
          className="w-full border rounded-lg px-4 py-2"
        />

        <div className="flex flex-wrap gap-2 mt-4">

          {formData.tags.map((tag, index) => (

            <div
              key={index}
              className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >

              <span>{tag}</span>

              <button
                type="button"
                onClick={() => removeItem("tags", index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ×
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* KEYWORDS */}

      <div>

        <label className="block text-sm font-medium mb-2">
          Keywords
        </label>

        <input
          type="text"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onKeyDown={(e) =>
            handleKeyDown(
              e,
              "keywords",
              keywordInput,
              setKeywordInput
            )
          }
          placeholder="Type keyword and press Enter"
          className="w-full border rounded-lg px-4 py-2"
        />

        <div className="flex flex-wrap gap-2 mt-4">

          {formData.keywords.map((keyword, index) => (

            <div
              key={index}
              className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full"
            >

              <span>{keyword}</span>

              <button
                type="button"
                onClick={() => removeItem("keywords", index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ×
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default TagsAndKeywords;