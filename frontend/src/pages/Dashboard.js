import { useEffect, useState } from "react";
import api from "../services/api";
import TaskSection from "../components/TaskSection";
import TaskCard from "../components/TaskCard";

export default function Dashboard({ currentUser }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch(console.error);
  }, []);

  const grouped = {
    pending: tasks.filter((t) => t.status === "pending"),
    in_progress: tasks.filter((t) => t.status === "in_progress"),
    completed: tasks.filter((t) => t.status === "completed"),
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      {Object.entries(grouped).map(([status, list]) => (
        <TaskSection key={status} status={status} tasks={list}>
          {(task) => (
            <TaskCard
              key={task.id}
              task={task}
              currentUser={currentUser}
              onDelete={(id) => setTasks(tasks.filter((t) => t.id !== id))}
              onUpdateStatus={(task) =>
                setTasks(tasks.map((t) => (t.id === task.id ? { ...t, status: "completed" } : t)))
              }
            />
          )}
        </TaskSection>
      ))}
    </div>
  );
}
