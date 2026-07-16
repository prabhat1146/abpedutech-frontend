import React from "react";

const academicList = [
  {
    subject: {
      id: "SUB000001",
      name: "Computer Science",
    },
    chapter: {
      id: "CH000001",
      name: "Programming",
    },
    topic: {
      id: "TOP000001",
      name: "C Programming",
    },
    subTopic: {
      id: "ST000001",
      name: "Variables",
    },
  },

  {
    subject: {
      id: "SUB000001",
      name: "Computer Science",
    },
    chapter: {
      id: "CH000001",
      name: "Programming",
    },
    topic: {
      id: "TOP000001",
      name: "C Programming",
    },
    subTopic: {
      id: "ST000002",
      name: "Loops",
    },
  },

  {
    subject: {
      id: "SUB000001",
      name: "Computer Science",
    },
    chapter: {
      id: "CH000002",
      name: "Database",
    },
    topic: {
      id: "TOP000002",
      name: "SQL",
    },
    subTopic: {
      id: "ST000003",
      name: "SELECT Query",
    },
  },

  {
    subject: {
      id: "SUB000002",
      name: "Mathematics",
    },
    chapter: {
      id: "CH000003",
      name: "Algebra",
    },
    topic: {
      id: "TOP000003",
      name: "Quadratic Equation",
    },
    subTopic: {
      id: "ST000004",
      name: "Roots",
    },
  },
];

const Academic = ({ formData, setFormData }) => {

  const subjects = [
    ...new Map(
      academicList.map(item => [
        item.subject.id,
        item.subject,
      ])
    ).values(),
  ];

  const chapters = [
    ...new Map(
      academicList
        .filter(item => item.subject.id === formData.academic.subject.id)
        .map(item => [
          item.chapter.id,
          item.chapter,
        ])
    ).values(),
  ];

  const topics = [
    ...new Map(
      academicList
        .filter(item => item.chapter.id === formData.academic.chapter.id)
        .map(item => [
          item.topic.id,
          item.topic,
        ])
    ).values(),
  ];

  const subTopics = [
    ...new Map(
      academicList
        .filter(item => item.topic.id === formData.academic.topic.id)
        .map(item => [
          item.subTopic.id,
          item.subTopic,
        ])
    ).values(),
  ];

  const handleSubject = (e) => {

    const subject = subjects.find(
      item => item.id === e.target.value
    );

    setFormData(prev => ({
      ...prev,

      academic: {

        subject,

        chapter: {
          id: "",
          name: "",
        },

        topic: {
          id: "",
          name: "",
        },

        subTopic: {
          id: "",
          name: "",
        },

      },

    }));

  };

  const handleChapter = (e) => {

    const chapter = chapters.find(
      item => item.id === e.target.value
    );

    setFormData(prev => ({
      ...prev,

      academic: {

        ...prev.academic,

        chapter,

        topic: {
          id: "",
          name: "",
        },

        subTopic: {
          id: "",
          name: "",
        },

      },

    }));

  };

  const handleTopic = (e) => {

    const topic = topics.find(
      item => item.id === e.target.value
    );

    setFormData(prev => ({
      ...prev,

      academic: {

        ...prev.academic,

        topic,

        subTopic: {
          id: "",
          name: "",
        },

      },

    }));

  };

  const handleSubTopic = (e) => {

    const subTopic = subTopics.find(
      item => item.id === e.target.value
    );

    setFormData(prev => ({
      ...prev,

      academic: {

        ...prev.academic,

        subTopic,

      },

    }));

  };

  // ----------- Part 2 starts from: return ( ... )
    return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">
        Academic Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Subject */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Subject*
          </label>

          <select
            value={formData.academic.subject.id}
            onChange={handleSubject}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            <option value="">Select Subject</option>

            {subjects.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Chapter */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Chapter*
          </label>

          <select
            value={formData.academic.chapter.id}
            onChange={handleChapter}
            disabled={!formData.academic.subject.id}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 disabled:bg-gray-100"
          >
            <option value="">Select Chapter</option>

            {chapters.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Topic */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Topic*
          </label>

          <select
            value={formData.academic.topic.id}
            onChange={handleTopic}
            disabled={!formData.academic.chapter.id}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 disabled:bg-gray-100"
          >
            <option value="">Select Topic</option>

            {topics.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Topic */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Sub Topic*
          </label>

          <select
            value={formData.academic.subTopic.id}
            onChange={handleSubTopic}
            disabled={!formData.academic.topic.id}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 disabled:bg-gray-100"
          >
            <option value="">Select Sub Topic</option>

            {subTopics.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default Academic;