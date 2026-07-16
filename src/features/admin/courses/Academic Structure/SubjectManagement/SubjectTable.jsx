import React from "react";
import {
  Pencil,
  Trash2,
  RefreshCw,
  BookOpen,
} from "lucide-react";

const SubjectTable = ({
  loading,
  subjects,
  onEdit,
  onDelete,
  onRefresh,
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow border p-16 flex flex-col items-center">

        <RefreshCw
          size={36}
          className="animate-spin text-blue-600"
        />

        <p className="mt-4 text-gray-500">
          Loading subjects...
        </p>

      </div>
    );
  }

  if (!subjects.length) {
    return (
      <div className="bg-white rounded-xl shadow border p-16 flex flex-col items-center">

        <BookOpen
          size={55}
          className="text-gray-300"
        />

        <h3 className="text-xl font-semibold mt-5">
          No Subjects Found
        </h3>

        <p className="text-gray-500 mt-2">
          Create your first subject to get started.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b">

        <div>

          <h2 className="text-lg font-semibold">
            Subjects
          </h2>

          <p className="text-sm text-gray-500">
            Total Subjects : {subjects.length}
          </p>

        </div>

        <button
          onClick={onRefresh}
          className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-100"
        >
          <RefreshCw size={18} />

          Refresh
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-6 py-4 font-semibold">
                #
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Subject ID
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Subject Name
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Created
              </th>

              <th className="text-center px-6 py-4 font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {subjects.map((subject, index) => (

              <tr
                key={subject.id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="px-6 py-4">
                  {index + 1}
                </td>

                <td className="px-6 py-4 font-mono text-blue-600">
                  {subject.id}
                </td>

                <td className="px-6 py-4 font-medium">
                  {subject.name}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {subject.createdAt || "-"}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit(subject)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                    >
                      <Pencil size={17} />

                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(subject)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                    >
                      <Trash2 size={17} />

                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SubjectTable;