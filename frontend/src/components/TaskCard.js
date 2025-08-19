export default function TaskCard({ task, currentUser, onDelete, onUpdateStatus }) {
  const canEdit = ["admin", "boss"].includes(currentUser.role);
  const isEmployee = currentUser.role === "employee";

  return (
    <div className="p-4 border rounded mb-3 shadow-sm">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-red-700">
        <strong>Dates:</strong> {task.start_date} – {task.end_date}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span className="capitalize">{task.status}</span>
      </p>
      <p>
        <strong>Assigned To:</strong>{" "}
        {task.assigned.map((u) => u.name).join(", ")}
      </p>

      <div className="mt-2 flex space-x-2">
        {canEdit && (
          <button
            onClick={() => onUpdateStatus(task)}
            className="bg-brand-red text-white px-2 py-1 rounded"
          >
            Edit
          </button>
        )}
        {canEdit && (
          <button
            onClick={() => onDelete(task.id)}
            className="bg-gray-300 text-black px-2 py-1 rounded"
          >
            Delete
          </button>
        )}
        {isEmployee && task.status !== "completed" && (
          <button
            onClick={() => onUpdateStatus(task)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Mark Complete
          </button>
        )}
      </div>
    </div>
  );
}
