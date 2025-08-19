export default function TaskSection({ status, tasks, children }) {
  const bg = status === "pending" ? "bg-light-red" : "bg-white";
  return (
    <section className={`${bg} p-4 rounded-lg shadow-md mb-6`}>
      <h2 className="text-red-800 font-bold capitalize">
        {status.replace("_", " ")}
      </h2>
      {tasks.length ? tasks.map(children) : <p>No tasks in {status}</p>}
    </section>
  );
}
