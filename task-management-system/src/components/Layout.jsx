import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Dashboard from "../pages/AdminDashboard.jsx";

// Dummy pages for now
function Users() { return <h1>Users Page</h1>; }
function Tasks() { return <h1>Tasks Page</h1>; }
function TaskStatus() { return <h1>Task Status Page</h1>; }
function Reports() { return <h1>Reports Page</h1>; }

export default function Layout() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <Dashboard />;
      case "users": return <Users />;
      case "tasks": return <Tasks />;
      case "status": return <TaskStatus />;
      case "reports": return <Reports />;
      case "logout":
        localStorage.removeItem("isAdmin");
        return <h1>Logged out</h1>;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-auto bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
}
