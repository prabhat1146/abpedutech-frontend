import React, { useEffect, useState } from "react";
import { Plus, Search, RefreshCw } from "lucide-react";

import SubjectTable from "./SubjectTable";
import SubjectModal from "./SubjectModal";
import CRUD from "../../../../../api/crud";

// import SubjectService from "../../services/subject.service";

const SubjectManagement = () => {
  const [subjects, setSubjects] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState(null);

  const [mode, setMode] = useState("add");

  const loadSubjects = async () => {
    try {
      setLoading(true);

      // Replace with your API

      const endpoint = "academic-details/subjects";
      const response = await CRUD.getAll(endpoint);

      /*
      const response = await SubjectService.getAll();

      setSubjects(response.data);
      */

      // Dummy Data

      setSubjects([
        {
          id: "SUB000001",
          name: "Computer Science",
          createdAt: "2026-06-30",
        },
        {
          id: "SUB000002",
          name: "Mathematics",
          createdAt: "2026-06-30",
        },
        {
          id: "SUB000003",
          name: "Physics",
          createdAt: "2026-06-30",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubjects();
  }, []);

  const filteredSubjects = subjects.filter((subject) =>
    `${subject.id} ${subject.name}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleAdd = () => {
    setMode("add");
    setSelectedSubject(null);
    setOpenModal(true);
  };

  const handleEdit = (subject) => {
    setMode("edit");
    setSelectedSubject(subject);
    setOpenModal(true);
  };

  const handleDelete = async (subject) => {
    if (!window.confirm(`Delete ${subject.name}?`)) return;

    try {
      const endpoint = "academic-details/subjects";
      await CRUD.delete(`${endpoint}/${subject?.id}`);
      /*
      await SubjectService.delete(subject.id);
      */

      setSubjects((prev) => prev.filter((item) => item.id !== subject.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (data) => {
    try {
      const endpoint = "academic-details/subjects";
      let response = null;
      if (mode === "add") {
        response = await CRUD.create(endpoint);

        setSubjects((prev) => [response.data, ...prev]);

        /*
        const response = await SubjectService.create(data);

        setSubjects(prev => [
            response.data,
            ...prev
        ]);
        */

        setSubjects((prev) => [data, ...prev]);
      } else {
        response = CRUD.put(`${endpoint}/${data?.id}`, data);
        /*
        const response =
          await SubjectService.update(
            data.id,
            data
          );
        */

        setSubjects((prev) =>
          prev.map((item) => (item.id === data.id ? data : item)),
        );
      }
      alert(response?.data?.message || "Response Error.");
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Response Error.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Subject Management</h1>

            <p className="text-gray-500 mt-1">Manage all subjects.</p>
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
          >
            <Plus size={18} />
            Add Subject
          </button>
        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow border p-5 mb-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subject..."
              className="w-full border rounded-lg pl-10 pr-4 py-3"
            />
          </div>
        </div>

        {/* Table */}

        <SubjectTable
          loading={loading}
          subjects={filteredSubjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRefresh={loadSubjects}
        />

        {/* Modal */}

        <SubjectModal
          open={openModal}
          mode={mode}
          data={selectedSubject}
          onClose={() => setOpenModal(false)}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default SubjectManagement;
