import React, { useEffect, useState } from "react";
import { X, Save } from "lucide-react";
import FullScreenLoader from "../../../../../components/FullScreenLoader";

const SubjectModal = ({ open, mode, data, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || "",
        name: data.name || "",
      });
    } else {
      setFormData({
        id: "",
        name: "",
      });
    }

    setErrors({});
  }, [data, open]);

  if (!open) return null;

  const validate = () => {
    const error = {};

    if (!formData.name.trim()) {
      error.name = "Subject name is required.";
    }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validate()) return;
    setIsLoading(true);
    await onSave(formData);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-5">
      {isLoading && <FullScreenLoader />}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-semibold">
            {mode === "add" ? "Add Subject" : "Edit Subject"}
          </h2>

          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Subject ID */}

          <div>
            <label className="block text-sm font-medium mb-2">Subject ID</label>

            <input
              type="text"
              value={formData.id}
              disabled
              placeholder="Auto Generated"
              className="w-full border rounded-lg px-4 py-3 bg-gray-100 cursor-not-allowed"
            />

            <p className="text-xs text-gray-500 mt-2">
              Generated automatically by the server.
            </p>
          </div>

          {/* Subject Name */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Subject Name
            </label>

            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              placeholder="Enter subject name"
              className={`w-full border rounded-lg px-4 py-3 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
            >
              <Save size={18} />

              {mode === "add" ? "Create Subject" : "Update Subject"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubjectModal;
