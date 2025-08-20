import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
            <p>Add, edit, or remove users.</p>
          </div>
          <div className="bg-green-500 text-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Manage Tasks</h2>
            <p>Create, assign, and update tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
