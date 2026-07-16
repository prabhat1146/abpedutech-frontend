import React from "react";

const MockTestCard = ({ test, onStart, onEdit, onDelete }) => {
  const {
    title,
    exam,
    subject,
    totalQuestions,
    duration,
    totalMarks,
    difficulty,
    status,
  } = test;

  const difficultyColor = {
    easy: "success",
    medium: "warning",
    hard: "danger",
  };

  const statusColor = {
    draft: "secondary",
    published: "success",
    archived: "dark",
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="mb-1">{title}</h5>

            <small className="text-muted">{exam}</small>
          </div>

          <span className={`badge bg-${statusColor[status] || "secondary"}`}>
            {status}
          </span>
        </div>

        <div className="mb-3">
          <div className="mb-2">
            <strong>Subject :</strong> {subject}
          </div>

          <div className="row text-center">
            <div className="col-4">
              <h6>{totalQuestions}</h6>
              <small className="text-muted">Questions</small>
            </div>

            <div className="col-4">
              <h6>{duration} min</h6>
              <small className="text-muted">Duration</small>
            </div>

            <div className="col-4">
              <h6>{totalMarks}</h6>
              <small className="text-muted">Marks</small>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <span
            className={`badge bg-${difficultyColor[difficulty] || "secondary"}`}
          >
            {difficulty}
          </span>
        </div>

        <div className="mt-auto d-flex gap-2">
          <button
            className="btn btn-primary flex-fill"
            onClick={() => onStart(test)}
          >
            Start
          </button>

          <button
            className="btn btn-outline-warning"
            onClick={() => onEdit(test)}
          >
            Edit
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(test)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockTestCard;
