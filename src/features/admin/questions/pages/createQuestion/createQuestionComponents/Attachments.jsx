import React from "react";

const attachmentTypes = ["image", "audio", "video", "pdf"];

const Attachments = ({ formData, setFormData }) => {
  const attachments = formData.attachments;

  const handleChange = (index, field, value) => {
    const updated = [...attachments];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      attachments: updated,
    }));
  };

  const addAttachment = () => {
    setFormData((prev) => ({
      ...prev,
      attachments: [
        ...prev.attachments,
        {
          type: "image",
          url: "",
          caption: "",
        },
      ],
    }));
  };

  const removeAttachment = (index) => {
    const updated = [...attachments];
    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      attachments: updated,
    }));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-semibold">
          Attachments
        </h2>

        <button
          type="button"
          onClick={addAttachment}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Add Attachment
        </button>

      </div>

      {attachments.length === 0 && (
        <div className="text-gray-500 text-sm">
          No attachments added.
        </div>
      )}

      {attachments.map((attachment, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-5"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Type */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Type
              </label>

              <select
                value={attachment.type}
                onChange={(e) =>
                  handleChange(index, "type", e.target.value)
                }
                className="w-full border rounded-lg px-3 py-2"
              >
                {attachmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.toUpperCase()}
                  </option>
                ))}
              </select>

            </div>

            {/* URL */}

            <div className="md:col-span-2">

              <label className="block text-sm font-medium mb-2">
                URL
              </label>

              <input
                type="text"
                value={attachment.url}
                onChange={(e) =>
                  handleChange(index, "url", e.target.value)
                }
                placeholder="https://..."
                className="w-full border rounded-lg px-3 py-2"
              />

            </div>

          </div>

          {/* Caption */}

          <div className="mt-4">

            <label className="block text-sm font-medium mb-2">
              Caption
            </label>

            <input
              type="text"
              value={attachment.caption}
              onChange={(e) =>
                handleChange(index, "caption", e.target.value)
              }
              placeholder="Attachment caption"
              className="w-full border rounded-lg px-3 py-2"
            />

          </div>

          <div className="mt-4 flex justify-end">

            <button
              type="button"
              onClick={() => removeAttachment(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Remove
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Attachments;