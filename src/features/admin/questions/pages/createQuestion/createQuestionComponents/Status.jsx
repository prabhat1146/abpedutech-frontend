import React from "react";

const Status = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "version"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Status & Audit Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Status */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Status*
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        {/* Visibility */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Visibility*
          </label>

          <select
            name="visibility"
            value={formData.visibility}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        {/* Version */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Version*
          </label>

          <input
            type="number"
            min={1}
            name="version"
            value={formData.version}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Parent Question ID */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Parent Question ID
          </label>

          <input
            type="text"
            name="parentQuestionId"
            value={formData.parentQuestionId}
            onChange={handleChange}
            placeholder="Optional"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Updated By */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Updated By
          </label>

          <input
            type="text"
            name="updatedBy"
            value={formData.updatedBy}
            onChange={handleChange}
            placeholder="User ID"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Approved By */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Approved By
          </label>

          <input
            type="text"
            name="approvedBy"
            value={formData.approvedBy}
            onChange={handleChange}
            placeholder="User ID"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

      </div>

    </div>
  );
};

export default Status;